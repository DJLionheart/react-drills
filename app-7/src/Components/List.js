import React from 'react';
import Todo from './Todo.js'

function List (props) {
    var toDoList = props.toDoList.map( (e, i) => (
            <Todo key={i} task={ e }/>
    ))
    return (
        <div>
            { toDoList }
        </div>
    )
}

export default List;