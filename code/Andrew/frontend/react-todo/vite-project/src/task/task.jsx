import React from "react";
import './task.css';
import { useState } from "react";
function Task({name}){
    return(
        <div className="task">
            {name}
        </div>
    )
}
export default Task;