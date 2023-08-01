const Priority = ({ name, id, isChecked }) => {
    return <div className="priority__block">
        <input
            checked={isChecked}
            className="priority__input"
            type="radio"
            name={name}
            id={id}
            readOnly
        />
        <label className={"priority__label " + (id === "critical" ? 'critical' : '')} htmlFor={id}>
            {id}
        </label>
    </div>
}

const Priorities = (props) => {
    const priorities = ['low', 'normal', 'high', 'critical'];
    const { priority, setPriority } = props;
    const changePriority = (e) => {
        setPriority(e.target.id);
    }
    return <div onChange={changePriority} className="priority">
        {
            priorities.map((value) => {
                return <Priority
                    name="priority"
                    id={value}
                    isChecked={value === priority}
                    key={value}
                />
            })
        }
    </div>
}

export default Priorities;