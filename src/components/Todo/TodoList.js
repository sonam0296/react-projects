import { AppBar, Box, Button, colors, FormControl, Input, TextField } from "@mui/material"
import { useState } from "react"
import { drawerWidth } from "../../common/constants"

export const TodoComponent = () => {
    const [inputText, setInputText] = useState('')
    const [task, setTask] = useState([])
    const [error, setError] = useState({ name: '', isError: false })
    const handleChange = (e) => {
        e.preventDefault()
        setInputText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputText.length, ':::input')
        if (inputText.length <= 0) {
            setError({ name: 'Input should not be empty' })
            return
        }
        setTask(prev => [...prev, { name: inputText, isCompleted: false }])
        setInputText('')
    }

    const handleKeyDown = (e) => {
        if (e.key == 'Enter') {
            handleSubmit(e)
        }
    }

    return (
        <>
            <Box
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >
                <div className="todoapp stack-large">
                    <Box component="main"
                        sx={{ flexGrow: 1, bgcolor: 'white', p: 3 }}>
                        <FormControl variant="standard">
                            <h2>
                                <label>What needs to be done?</label>
                            </h2>
                            <TextField fullWidth id="fullWidth" type="text"
                                name="inputText"
                                value={inputText}
                                onChange={(e) => handleChange(e)}
                                required={true}
                                onKeyDown={handleKeyDown}
                            />

                            <Button variant="outlined" style={{ color: 'white', backgroundColor: 'black', marginTop: '20px' }} onClick={(e) => handleSubmit(e)}>Add</Button>
                        </FormControl>
                    </Box>
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
            </Box>
        </>
    )
}