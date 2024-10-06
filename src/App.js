
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import { SideBar } from './components/SideBar';
import { TodoComponent } from './components/Todo/TodoList';
import { Box, Toolbar, Typography } from '@mui/material';

function App() {
    return (
        <BrowserRouter>
            <div className="App" >
                <SideBar />
                <Routes>
                    <Route path='/todo' element={<TodoComponent />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
