import {configureStore} from '@reduxjs/toolkit'
import {api} from './services/auth';
import authReducer from './reducers/authSlice';

export const createStore = () => 
    configureStore({
        reducer: {
            [api.reducerPath]:api.reducer,
            auth: authReducer
        },
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware().concat(api.middleware)
    })

export const store = createStore();
    