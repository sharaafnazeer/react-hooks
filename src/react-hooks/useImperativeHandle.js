import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import '../App.css';


// Parent Component
const ParentComponent = () => {

    const childRef = useRef();
    const [childCount, setChildCount] = useState(0);


    const onClick = () => {
        childRef.current.increaseCount();

        setChildCount(childRef.current.getCount());
    }

    return (
        <>
            <ChildComponent ref={childRef}></ChildComponent>
            <button onClick={() => onClick()}>Increment</button>

            <div>{childCount}</div>
            
        </>
    )
}

// Child Component
const ChildComponent = forwardRef((props, ref) => { 

    const [count, setCount] = useState(0);

    useImperativeHandle(ref, () => ({

        increaseCount() {
            setCount(count + 1);
        },

        getCount() {
            return count;
        }

    }));


    return (
        <div></div>
    )
})



const UseImperativeHandle = () => {

    return (
        <ParentComponent></ParentComponent>
    )

}

export default UseImperativeHandle;