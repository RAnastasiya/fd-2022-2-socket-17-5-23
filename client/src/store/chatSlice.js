import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getMessages } from '../api';

export const getAllMessages = createAsyncThunk(
  'chat/getAllMessages',
  async (params, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await getMessages(params);
      return data;
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
    isFetching: false,
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
      state.error = null;
    },
    errorMessage: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllMessages.pending, (state, action) => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(getAllMessages.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    });
    builder.addCase(getAllMessages.fulfilled, (state, action) => {
      state.isFetching = false;
      state.error = null;
      state.messages.push(...action.payload);
    });
  },
});

export const { addMessage, errorMessage } = chatSlice.actions;
export default chatSlice.reducer;
