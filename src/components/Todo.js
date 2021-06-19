import React, { useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import Form from './Form'
import axios from 'axios'
function Todo(props) {

    // fetch fake API from jsonplaceholder 
    useEffect(()=>{
        const getTodo = async () =>{
            try {
                const res = await axios.get(
                    'https://jsonplaceholder.typicode.com/todos?_limit=5'
                )
                setTodo(res.data);
            } catch(error) {
                console.log(error.message);
            }
        }
        getTodo()
        
    },[])
    const [todos, setTodo] = useState([
        
    ])



    // markComplete
    const markComplete = id => {
        const newTodo = todos.map(todo => {
            if (todo.id === id) todo.completed = !todo.completed
            return todo;
        })
        setTodo(newTodo)
    }
    

    //delete todoItem
    const deleteTodo = async (id) => {
        await axios.delete(
            `https://jsonplaceholder.typicode.com/todos/${id}`
        )
        // dùng hàm filter để trả về 1 array với phần tử đã đc lọc theo điều kiện 
        const newTodos = todos.filter(todo => {  
            return todo.id !== id
        })
        setTodo(newTodos)
    }
     // addTodo
     const addTodo = async title =>{
         try { 
             const res = await axios.post(
                 'https://jsonplaceholder.typicode.com/todos',{
                     title,
                     completed:false
                 }
             )
             const newTodo = [...todos,res.data]
             setTodo(newTodo)
         } catch (error) {
             console.log(error);
         }
         
     }

    return (
        <div>
            <Form addTodoFunc = {addTodo}/>
            <div>
                


                <div className="todo-list">
                    {todos.map(todo => <TodoItem key={todo.id} 
                    todoProps={todo} 
                    markCompleteFunc={markComplete} 
                    deleteTodoFunc ={deleteTodo}
                   
                    />)}

                </div>

            </div>
        </div>
    );
}

export default Todo;