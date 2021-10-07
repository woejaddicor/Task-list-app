function DisplayList ({list}) {
    return (
    <section className="display-list">
        <table className="task-table">
            <thead>
            <tr>
                <th>Task</th>
                <th>Completed</th>
            </tr>
            </thead>
            <tbody>
            {list.map((task) => {
                if (task.completed) {
                    return(<tr key={task.name}><td>{task.name}</td>
                        <td>✅</td>
                      </tr> 
                    )
                } else {
                    return (<tr key={task.name}><td>{task.name}</td>
                        <td>❌</td>
                      </tr>  )
                }
            })}
            </tbody>
        </table>
        {/* <ul>{list.map((task) => {
            return <li key={task.name}>{task.name}</li>
        })}</ul> */}
    </section>

    )
}

export default DisplayList;