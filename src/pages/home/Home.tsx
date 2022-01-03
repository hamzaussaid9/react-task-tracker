import { Button, Container } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react';
import Header from '../../components/header/Header';
import { ITasks } from '../../models/common.model';
import { DivHome, DivHomeContent } from './home.style'
const Home = () => {
    const [tasks,setTasks] = useState<ITasks[]>([]);
    const getTasks=()=>{
        axios.get<ITasks[]>('http://localhost:1500/tasks')
        .then(res=> setTasks(res.data))
        .catch(err=>console.log(err));
    }
    const changeRemainder = (id:string,remainder: true | false)=>{
        axios.patch(`http://localhost:1500/tasks/${id}`, {remainder: !remainder }).catch(err=>console.log(err));
        getTasks();
    }
    const deleteTask = (id: string) =>{
        axios.delete(`http://localhost:1500/tasks/${id}`).catch(err=>console.log(err));
        getTasks();
    }
    React.useEffect(()=>{
        getTasks();
    },[])    
    return (
        <DivHome>
            <Container className="home" maxWidth="xl">
                <DivHomeContent>
                    <Header
                    heading="Tasks"
                    btn="Add Task"
                    />
                    {
                        tasks.length > 0 ? tasks.map(task=>{
                            return <h3><Button onDoubleClick={()=>changeRemainder(task.id,task.remainder)} variant={`${task.remainder ? 'contained': 'text'}`} fullWidth>{task.text}</Button><span onClick={()=>deleteTask(task.id)}>delete</span></h3>;
                        })
                        : <h3>No tasks found</h3>
                    }
                </DivHomeContent>
            </Container>
        </DivHome>
    )
}

export default Home;
