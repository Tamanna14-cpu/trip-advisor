import { configureStore } from '@reduxjs/toolkit'
import serviceDataSlice from '../slices/serviceDataSlice';

export const store = configureStore({
    reducer: {
        service: serviceDataSlice
    },
});