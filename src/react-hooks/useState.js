import { useState } from 'react';
import '../App.css';

const UseState = () => {

    const [count, setCount] = useState(10);

    const [display, isDisplay] = useState(false);

    const onIncrementClick = () => {
        setCount(count + 1);
    }

    const onDecrementClick = () => {
        setCount(count - 1);
    }

    console.log(display)


    return (
        <div className="App">
        
        <div style={{
            padding: '2rem'
        }}>Counter : {count}</div>

        <button onClick={
            () => {
            isDisplay(!display)
            onIncrementClick();
            }
            
            }>INCREMENT</button>
        <button onClick={() => onDecrementClick()}>DECREMENT</button>


        <div>
            {
            display && <>Hello World</>
            
            }
        </div>

        </div>
    );
}

export default UseState;