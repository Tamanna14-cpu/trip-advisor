import { configureStore } from '@reduxjs/toolkit'
import serviceDataSlice from '../slices/serviceDataSlice';
import manageOrderSlice from '../slices/manageOrderSlice';

export const store = configureStore({
    reducer: {
        service: serviceDataSlice,
        orders: manageOrderSlice,
    },
});