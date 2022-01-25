import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


const initialState = {
    rentals: [],
    services: []
}


export const fetchRentalsCollection = createAsyncThunk(
    'rentals/fetchRentals',
    async () => {
        const response = await fetch('https://safe-island-53802.herokuapp.com/addService')
            .then(res => res.json())
        return response
    }
)


export const fetchServicesCollection = createAsyncThunk(
    'service/fetchServices',
    async () => {
        const response = await fetch('https://safe-island-53802.herokuapp.com/services')
            .then(res => res.json())
        return response
    }
)




const serviceDataSlice = createSlice({
    name: 'serviceData',
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder.addCase(fetchRentalsCollection.fulfilled, (state, action) => {
            state.rentals = action.payload
        })

        builder.addCase(fetchServicesCollection.fulfilled, (state, action) => {
            state.services = action.payload
        })
    }
});


export default serviceDataSlice.reducer;