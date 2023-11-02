import React, { useState } from "react";

function ToDo(props){
    
    const [runcuks, setRuncuks] = useState(props.completed)
    function handleChange(event){
        setRuncuks(event.target.checked)
    }

    return(
        <div>
            <p>{props.userId}</p>
            <p>{props.id}</p>
            <p>{props.title}</p>
            <input type="checkbox" checked={runcuks} onChange={handleChange}/>
        </div>
    );
};
export default ToDo;