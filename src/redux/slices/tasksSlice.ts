import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ITasks} from '../../models/common.model';

interface ITasksState {
    tasks: ITasks[]
}

const initialState : ITasksState = {
    tasks: []
};

export const TaskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
    },
  });

export const {} = TaskSlice.actions; 

export default TaskSlice.reducer;
