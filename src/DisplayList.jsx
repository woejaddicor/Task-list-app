function DisplayList ({list}) {
    return (
    <section className="display-list">
        <ul>{list.map((task) => {
            return <li key={task.name}>{task.name}</li>
        })}</ul>
    </section>

    )
}

export default DisplayList;