import { useEffect, useState } from "react";
import '../App.css';
import axios from "axios";

const UseEffect = () => {

    const [universities, setUniversities] = useState([]);

    useEffect(() => {

        axios
        .get("http://universities.hipolabs.com/search?country=United+States")
        .then((response) => {
            console.log("API called!!");

            const first20 = response.data.slice(0, 20);
            setUniversities(first20);
        })
        
    }, []);

    // 1. Not passing any dependency params -> useEffect hook will execute when the component redenders everytime
    // 2. Passing empty array as a dependency -> useEffect hook will execute only once
    // 3. Passing a dependecy varialbe -> useEffect will execute depends on the variable

    return (
        <div className="App">
            DATA: 

            {
                universities.map((university, index) => (
                    <div key={`university-${index}`}>
                        {university.name } - {university.country}
                    </div>
                ))
            }

        </div>
    );
}

export default UseEffect;