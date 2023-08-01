const Todo = ({todo, removeTodo}) => {
    return <div className="todo">
        <div className="todo__details">
            <div className={"todo__priority " + todo.priority}>{todo.priority}</div>
            <div className="todo__id">{todo.id}</div>
        </div>
        <h2 className="todo__name">{todo.name}</h2>
        <p className="todo__description">{todo.description}</p>
        <button onClick={()=>removeTodo(todo)} className="todo__done">done</button>
    </div>
}

export default function TodoDisplay({ todos, removeTodo }) {
    return <div className="display">
        {todos.map((todo, index) => {
            return <Todo todo={todo} key={index} removeTodo={removeTodo} />
        })}
    </div>
}