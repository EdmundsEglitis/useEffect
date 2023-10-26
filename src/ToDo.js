import React, { useState } from "react";

function ToDo(){
    
    
    const todo = {
        userId: 1,
        id: 1,
        title: "koma",
        completed: false, 
    };

    return(
        <div>
            <p>{todo.userId}</p>
            <p>{todo.id}</p>
            <p>{todo.title}</p>
            <input type="checkbox"/>
            <p>{String(todo.completed)}</p>
        </div>
    );
};
export default ToDo;