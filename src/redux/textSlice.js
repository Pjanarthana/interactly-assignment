import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  textBoxes: [],
};

export const textSlice = createSlice({
  name: 'text',
  initialState,
  reducers: {
    addTextBox: (state, action) => {
      state.textBoxes.push(action.payload);
    },
    updateTextBox: (state, action) => {
      const { id, updates } = action.payload;
      const index = state.textBoxes.findIndex(box => box.id === id);
      if (index >= 0) {
        state.textBoxes[index] = { ...state.textBoxes[index], ...updates };
      }
    },
    deleteTextBox: (state, action) => {
      state.textBoxes = state.textBoxes.filter(box => box.id !== action.payload);
    },
  },
});

export const { addTextBox, updateTextBox, deleteTextBox } = textSlice.actions;
export default textSlice.reducer;
