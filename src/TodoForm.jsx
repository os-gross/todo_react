import { useState } from "react";
import Priorities from "./Priority";

export default function TodoForm({ addTodo, pushError }) {
    const [todo, setTodo] = useState({
        name: '',
        description: '',
    });
    const [priority, setPriority] = useState('normal');
    const handleNameChange = (e) => {
        setTodo({ ...todo, name: e.target.value })
    }
    const handleDescriptionChange = (e) => {
        setTodo({ ...todo, description: e.target.value })
    }
    const pushTodo = () => {
        if (todo.name === '') pushError('The name field is empty');
        else {
            addTodo(
                { ...todo, priority }
            );
            setPriority('normal');
            setTodo({
                name: '',
                description: '',
            });
        }
    }
    return <div className="form">
        <input
            type="text"
            className="form__name"
            placeholder="task name"
            value={todo.name || ''}
            onChange={handleNameChange}
        />
        <textarea
            className="form__descr"
            placeholder="task description"
            value={todo.description || ''}
            onChange={handleDescriptionChange}
        />
        <div className="form__details">
            <Priorities priority={priority} setPriority={setPriority} />
        </div>
        <button onClick={pushTodo} className="form__confirm">Add Todo</button>
    </div>
}