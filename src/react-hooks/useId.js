import { useId } from 'react';
import '../App.css';


const UseID = () => {

    const uniqueId = useId();

    return (
        <div className="App">

        <div style={{
            padding: '2rem'
        }}>

            Unique ID : {uniqueId}
        </div>
    </div>
    )
}

export default UseID;