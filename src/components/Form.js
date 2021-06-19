import React, { useState } from 'react';
import PropTypes from 'prop-types';
function Form(props) {

    const addTodo = props.addTodoFunc
    // proptype
    Form.propTypes = {
        addTodoFunc : PropTypes.func.isRequired
    }
     //State
     const [title,setTitle] = useState('')

     // handle functions
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if(title !== ''){
            addTodo(title)
            setTitle('')
        }

    }

    const changeTitle =(e)=>{
        setTitle(e.target.value)
    }

    


    return (
        <div>
            <form className="form-input" onSubmit={handleSubmit} >
                <input type="text" 
                name="title" 
                placeholder="Add To Do" 
                id="" 
                value={title}
                onChange={changeTitle} /> <br />

                <input className="btn-add" type="submit" value="Add"  >
                </input>
            </form>
        </div>
    );
}

export default Form;