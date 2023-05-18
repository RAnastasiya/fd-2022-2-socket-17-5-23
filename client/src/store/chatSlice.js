import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMessages } from '../api'

export const getAllMessages = createAsyncThunk(
    'chat/getAllMessages',
    async (params, thunkAPI) => {
        try {
            const {data: {data}} = await getMessages(params);
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        messages: [],
        error: null,
        isFetchiing: false
    },
    redusers: {
        addMassage: (store, action) => {
            store.messages.push(action.payload)
        },
        errorMassage: (store, action) => {
            store.error = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllMessages.pending, (state, action) => {
            state.isFetchiing = true;
            state.error = null;
        });
        builder.addCase(getAllMessages.rejected, (state, action) => {
            state.isFetchiing = false;
            state.error = action.payload;
        });
        builder.addCase(getAllMessages.fulfilled, (state, action) => {
            state.isFetchiing = false;
            state.error = null;
            state.messages.push(...action.payload)
        })
    }
})
export const {addMassage} = chatSlice.actions;
export const {errorMassage} = chatSlice.actions;
export default chatSlice.reducer;