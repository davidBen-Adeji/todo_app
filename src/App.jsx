import { Route, Routes } from 'react-router-dom';

import Home from './Home.jsx';
import NewTask from './NewTask.jsx';
import CompletedTasks from './CompletedTasks.jsx';
import Task from './Task.jsx';
import { useState } from 'react';

function App() {
    const [taskIndex, setTaskIndex] = useState(0);

    function changeIndexHandler(index) {
        setTaskIndex(index);
    }
    
    return (
        <>
            <div>
                <Routes>
                    <Route path="/" element={<Home onChangeIndex={changeIndexHandler}/>} />
                    <Route path='/newTask' element={<NewTask />} />
                    <Route path='/completedTasks' element={<CompletedTasks />} />
                    <Route path='/task' element={<Task index={taskIndex} />} />
                </Routes>
            </div>
        </>
    )
}

export default App