import { useReducer, useState } from 'react';
import '../App.css';

const UseReducer = () => {

    console.log("Re Rendering")

    const reducer = (state, action) => {

        // this will return modified/current state
        let newState = state;
        switch (action.type) {
            // state.count = current state + 1
            case 'INCREMENT': newState =  {count: state.count + 1, display: state.display}; break
            case 'DISPLAY': newState =  {count: state.count, display: !state.display}; break
            default:
                break;
        }

        return newState;

    }

    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        display: false
    });

    return (
        <div className="App">
        
        <div style={{
            padding: '2rem'
        }}>Counter : {state.count}</div>

        <button onClick={
            () => {
                dispatch({type: 'INCREMENT'});

                dispatch({type: 'DISPLAY'})
            }
            }>INCREMENT</button>

        <div>
            {
            state.display && <>Hello World</>
            
            }
        </div>

        </div>
    );
}

export default UseReducer;