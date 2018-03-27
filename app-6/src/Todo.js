import React from 'react';

function Todo (props) {

    var toDo_list = props.taskList;
    var renderedList = toDo_list.map( (e,i) => (
        <div key={i}>
            <p>{e}</p>
        </div>
    ))

    return (
        <div>
            <h1>To Do List:</h1>
            <input placeholder="Enter new task..." onChange={ (e) => props.inputText(e.target.value)}/>
            <button onClick={props.buttonFunc}>Add</button>
            {renderedList}
        </div>
    )
}

export default Todo;