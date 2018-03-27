import React from 'react';
import Todo from './Todo.js'

function List (props) {
    var tasksFromParent = props.tasks.map( (e, i) => (
            <Todo key={i} task={ e }/>
    ))
    return (
        <div>
            {tasksFromParent}
        </div>
    )
}

export default List;