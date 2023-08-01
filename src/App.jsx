import './styles/style.scss';
import TodoForm from './TodoForm';
import TodoDisplay from './TodoDisplay';
import Errors from './Errors';
import { useEffect, useState } from 'react';

const generateId = () => {
    return Math.floor(Math.random() * 1000000);
}

export default function App() {
    const [todos, setTodos] = useState([]);
    const [errors, setErrors] = useState([]);
    const addTodo = (todo) => {
        setTodos(todos.concat({ ...todo, id: generateId() }));
    }
    const removeTodo = (todo) =>{
        setTodos((prevTodos) => prevTodos.filter(item => item.id != todo.id));
    }
    const pushError = (message) => {
        if (errors.find(e => e.message === message)) return;
        const error = { message };
        setErrors((prevErrors) => prevErrors.concat(error));
        setTimeout(() => {
            setErrors((prevErrors) => prevErrors.filter((e) => e !== error));
        }, 3000);
    }


    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem("todos"));
        if (storedTodos) setTodos(storedTodos);
        
    }, []);
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
    return <>
        <TodoDisplay todos={todos} removeTodo={removeTodo}/>
        <TodoForm addTodo={addTodo} pushError={pushError} />
        <Errors errors={errors} />
    </>
}

