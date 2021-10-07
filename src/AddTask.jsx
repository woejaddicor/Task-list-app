function AddTask () {
    return (
    <section className="add-task">
        <form>
            <label for="list-addition">Add to the list</label>
            <input type="text" id="list-addition"/>
            <button>Submit Task</button>
        </form>
    </section>
    )
}

export default AddTask;