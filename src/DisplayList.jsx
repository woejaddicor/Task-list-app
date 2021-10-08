function DisplayList ({list, setList}) {
    function changeCompletion (e, taskName) {
        e.preventDefault()
        
        setList((currList) => {
            const newList = [...list]
            const tasktoUpdate = taskName
            const updatedList = newList.map((item) => {
                if (item.name === tasktoUpdate) {
                    return {name: item.name, completed: !item.completed}
                } else {
                    return {name: item.name, completed: item.completed}
                }
            })
            return updatedList
        })
    }

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
                        <td className="col3"><button onClick={
                            e => {changeCompletion(e, task.name)}
                        } className="mark" type="button">Undo</button></td>
                      </tr> 
                    )
                } else {
                    return (<tr key={task.name}><td>{task.name}</td>
                        <td className="complete">❌</td>
                        <td className="col3"><button onClick={
                            e => {changeCompletion(e, task.name)}
                        } className="mark" type="button">Complete</button></td>
                      </tr>  )
                }
            })}
            </tbody>
        </table>
    </section>

    )
}

export default DisplayList;