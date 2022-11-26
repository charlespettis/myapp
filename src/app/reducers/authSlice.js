import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'auth',
    initialState: {
        user: null
    },
    reducers: {
        setCredentials: (state, action) => {
            state.user = action.payload;
        }
    }
})

export const {setCredentials} = slice.actions;

export default slice.reducer;