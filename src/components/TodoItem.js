import React, { useState } from 'react';
import PropTypes from 'prop-types'

function TodoItem(props) {
    const todo = props.todoProps
    const markComplete = props.markCompleteFunc
    const deleteTodo = props.deleteTodoFunc
    //PropType
    TodoItem.propTypes = {
        todoProps: PropTypes.object.isRequired,
        markCompleteFunc:PropTypes.func.isRequired,
        deleteTodoFunc: PropTypes.func.isRequired
    }
    
   

    //Style
    const todoStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        width: '100%',
    }
    const buttonStyle =
    {
        padding: '5px 9px',
        marginRight:'20px'
    }
    const textStyle = {
        textDecoration: todo.completed ? 'line-through' : 'none'

    }

    // Return
    return (
        <div>
            <div style={todoStyle}>
                {/* sử dụng kỹ thuật bind(this, a)  để xử lý lỗi infinite loops khi truyền 1 func qua prop*/}
                <input type="checkbox" onChange={markComplete.bind(this, todo.id)} checked={todo.completed}/> 
                <p style={textStyle}>{todo.title}</p>
                <button style={buttonStyle} onClick={deleteTodo.bind(this,todo.id)}> Delete</button>
            </div>
        </div>
    );
}

export default TodoItem;