import { useState } from "react"

export const TodoComponent = () => {
    const [inputText, setInputText] = useState('')
    const [task, setTask] = useState([])
    const [error, setError] = useState({ name: '', isError: false })
    const handleChange = (e) => {
        setInputText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputText.length < 0) {
            setError({ name: 'Input should not be empty' })
        }
        setTask(prev => [...prev, { name: inputText, isCompleted: false }])
        setInputText('')
    }

    return (
        <>
            <div className="todoapp stack-large">
                <h1>Todo List</h1>
                <form>
                    <h2>
                        <label>What needs to be done?</label>
                    </h2>
                    <input
                        type="text"
                        name="inputText"
                        value={inputText}
                        onChange={(e) => handleChange(e)}
                        required={true}
                    />
                    <button onClick={(e) => handleSubmit(e)}>Add</button>
                </form>
                <div>
                    <ul>
                        {task.map((text, index) => (
                            <>
                                <li key={index}>
                                    <input type="checkbox" />
                                    <label>
                                        {text.name}
                                    </label>
                                </li>
                            </>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}