import React, {useState} from "react";
import Counter from "./Counter";

const CounterList = () => {

    const initialState = [
        { id: 0, value: 0, name: "Car" },
        { id: 1, value: 0, name: "Bike" },
        { id: 2, value: 0, name: "Apple Macbook" },
        { id: 3, value: 0, name: "iPhone XR" },
        { id: 4, value: 0, name: "Tesla" },
    ];

    const [counters, setCounters] = useState(initialState);


    const handleDelete = (id) => {
        const newCounters = counters.filter(c =>c.id !== id);
        setCounters(newCounters);
    };
    const handleReset = () => {
        setCounters(initialState)

    };

    const decrement = (id) => {
        const newCounters = counters.map(count => {
            if (count.id === id) {
                count.value--
            }
            return count
        })
        setCounters(newCounters)
    };

    const increment = (id) => {
        const newCounters = counters.map(count => {
            if (count.id === id) {
                count.value++
            }
            return count
        })
        setCounters(newCounters)
    };

    return (
        <>
            {counters.map((count) => (
                <Counter
                    key={count.id}
                    onDelete={ handleDelete }
                    onDecrement={decrement }
                    onIncrement={increment }
                    { ...count }/>
            ))}
            <button className="btn btn-primary btn-sm m-2 "
                    onClick={handleReset}
            >
                Reset
            </button>
        </>
    );
};

export default CounterList;



