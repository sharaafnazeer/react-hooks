import { memo, useCallback, useState } from 'react';
import '../App.css';


const Product = memo(({productName, onAddBagItem}) => {

    console.log("Child Rendered: " + productName)

    return (
        <div style={{
            padding: '2rem'
        }}>
            <div>
                {productName}
            </div>
            <div>
                <button onClick={onAddBagItem}>Add to bag</button>
            </div>
        </div>
    );
})


const UseCallBack = () => {

    const [items, setItems] = useState(['IPhone 15', 'Samsung S4']);
    const [counter, setCounter] = useState(0);
    const [bagItems, setBagItems] = useState(0); 

    console.log("Parent Rendered!")

    const onAddBagItem = useCallback(() => {
        setBagItems(bagItems + 1);
    }, [bagItems]);


    return (

        <div className="App">

            <h3>Counter : {counter}</h3>
            <button onClick={() => setCounter(counter + 1)}>+ Increase</button>

            <h4>Bag : {bagItems}</h4>

            <div>
                {
                    items.map((item, index) => {
                        return <Product key={index} productName={item} onAddBagItem={onAddBagItem}/>
                    })
                }
            </div>

        </div>
    );
}

export default UseCallBack;