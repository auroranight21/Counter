import React,{useState} from "react";
const Counter = ({ name, value, onIncrement, onDecrement, onDelete, id }) => {
    const getBadgeClasses = () => {
        let classes = "badge m-2 ";
        classes += value < 0 ? "bg-danger" : "bg-success";
        return classes;
    };


    return (
        <div>
            <span>{ name }</span>
            <span className={getBadgeClasses()}>{value}</span>
            <button className="btn btn-primary btn-sm m-2 "
                    onClick={ () => onIncrement(id) }
            >
                +
            </button>
            <button className="btn btn-primary btn-sm m-2 "
                    onClick={ () => onDecrement(id) }
            >
                -
            </button>
            <button className="btn btn-danger btn-sm m-2 "
                    onClick={ () => onDelete(id) }
            >
                Delete
            </button>

        </div>
    )
};

export default Counter;