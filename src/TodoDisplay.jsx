const Todo = ({todo}) => {
    return <div className="todo">
        <h2 className="todo__name">{todo.name}</h2>
        <p className="todo__description">{todo.description}</p>
        <div className="todo__details">
            <div className={"todo__priority " + todo.priority}>{todo.priority}</div>
            <div className="todo__id">{todo.id}</div>
        </div>
    </div>
}

export default function TodoDisplay({ todos }) {
    return <div className="display">
        {todos.map((todo, index) => {
            return <Todo todo={todo} key={index} />
        })}
    </div>
}