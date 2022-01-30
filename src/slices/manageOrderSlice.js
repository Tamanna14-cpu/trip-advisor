import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


const initialState = {
    manageOrders: [],
    myOrders: [],
}

export const fetchAllOrders = createAsyncThunk(
    'allOrders/fetchAllOrders',
    async () => {
        const response = await fetch('https://safe-island-53802.herokuapp.com/manageOrders')
            .then(res => res.json())
        return response

    }
)


export const fetchMyorders = createAsyncThunk(
    'allOrders/fetchMyOrders',
    async ({ email }) => {
        const response = await fetch(`https://safe-island-53802.herokuapp.com/myOrders/${email}`)
            .then(res => res.json())
        return response
    }
)


export const updateStatus = createAsyncThunk(
    'allOrders/update',
    async ({ id }) => {
        // console.log(id);
        const response = await fetch(`https://safe-island-53802.herokuapp.com/manageOrders/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
        return response
    }
)



export const orderDelete = createAsyncThunk(
    'allOrders/delete',
    async ({ id }) => {
        const response = await fetch(`https://safe-island-53802.herokuapp.com/deleteProduct/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
        return response;
    }
)



const manageOrderSlice = createSlice({
    name: 'allOrder',
    initialState,
    reducers: {
        deleteOrder: (state, { payload }) => {
            state.manageOrders = state.manageOrders.filter(order => order._id !== payload);
        },
        deleteMyOrder: (state, { payload }) => {
            state.myOrders = state.myOrders.filter(order => order._id !== payload);
        },
    },

    extraReducers: (builder) => {
        builder.addCase(fetchAllOrders.fulfilled, (state, { payload }) => {
            state.manageOrders = payload;
        });

        builder.addCase(fetchMyorders.fulfilled, (state, { payload }) => {
            state.myOrders = payload;
        });
    }


})


export const { deleteOrder, deleteMyOrder } = manageOrderSlice.actions;

export default manageOrderSlice.reducer;