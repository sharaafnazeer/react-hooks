import { useRef } from 'react';
import '../App.css';

const UseRef = () => {

    const nameInput = useRef();

    const buttonInput = useRef();

    const onButtonClick = () => {
        console.log('Button Click');

        nameInput.current.focus();

        nameInput.current.value = "ABC";
        nameInput.current.placeholder='Please type here!';

        buttonInput.current.innerHTML = 'Heyyy!'
    }

    

   return (
    <div className="App">

        <div style={{
            padding: '2rem'
        }}>
            
            Name : <input type='text' ref={nameInput} ></input>

            <button ref={buttonInput} onClick={() => onButtonClick()}>Click!!</button>

        </div>
    </div>
   )

}

export default UseRef