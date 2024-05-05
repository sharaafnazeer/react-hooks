import { useMemo, useState } from 'react';
import '../App.css';

const UseMemo = () => {

    const [count, setCount] = useState(0);
    const [items, setItems] = useState([]);


    const doHeavyCalculation = (count) => {
        console.log("Heavy Calculation!!");

        for (let index = 0; index < 10000000; index++) {
            count += 1;
            
        }

        return count;
    }

    const heavyCalculation = useMemo(() => doHeavyCalculation(count), [count]);
    

    const increment = () => {
        setCount(count + 1);
    }


    const addItem = () => {
        setItems((t) => [...t, "New Item"]);
    }

    console.log("Rendering");
    console.log(items);
    console.log(count);
    console.log(heavyCalculation)

    return (
        <div className="App">

            <div style={{
                padding: '2rem'
            }}>
                
                <h4>My Work Items</h4>
                {
                    items.map((item, index) => {
                        return (
                            <div key={index}>{item}</div>
                        )
                    })
                }
                <button onClick={addItem}>Add Items</button>

            </div>

            <div style={{
                padding: '2rem'
            }}>
                
                <h4>Count : {count}</h4>
                <button onClick={increment}>Increase</button>

            </div>

            <div style={{
                padding: '2rem'
            }}>
                
                <h4>Heavy Calculation : {heavyCalculation}</h4>

            </div>
        </div>
    )
}

export default UseMemo;