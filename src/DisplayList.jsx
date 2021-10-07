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
                        <td className="complete">✅</td>
                        <td className="col3"><button class="mark" type="button">Undo</button></td>
                      </tr> 
                    )
                } else {
                    return (<tr key={task.name}><td>{task.name}</td>
                        <td className="complete">❌</td>
                        <td className="col3"><button class="mark" type="button">Complete</button></td>
                      </tr>  )
                }
            })}
            </tbody>
        </table>
    </section>

    )
}

export default DisplayList;