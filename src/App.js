
import { BrowserRouter, Route, Router } from 'react-router-dom';
import './App.css';
import { SideBar } from './components/SideBar';
import { TodoComponent } from './components/Todo/TodoList';

function App() {
    return (
        <BrowserRouter>
            <div className="App" >
                <SideBar />
                {/* <TodoComponent /> */}
                {/* <Router> */}
                <Route path='/todo' element={<TodoComponent />} />
                {/* </Router> */}
            </div>
        </BrowserRouter>
    );
}

export default App;
