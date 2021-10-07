function DisplayList ({list}) {
    return (
    <section className="display-list">
        <table className="task-table">
            <thead>
            <tr>
                <th>Task</th>
                <th>Completed</th>
                <th>Mark Complete</th>
            </tr>
            </thead>
            <tbody>
            {list.map((task) => {
                if (task.completed) {
                    return(<tr key={task.name}><td>{task.name}</td>
                        <td>✅</td>
                        <td><button type="button">Undo</button></td>
                      </tr> 
                    )
                } else {
                    return (<tr key={task.name}><td>{task.name}</td>
                        <td>❌</td>
                        <td><button type="button">Complete</button></td>
                      </tr>  )
                }
            })}
            </tbody>
        </table>
    </section>

    )
}

export default DisplayList;