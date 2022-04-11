import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { create, list, remove, update } from "../../api/skill";

export const getListSkill = createAsyncThunk(
  "skill/getListSkill",
  async () => {
    try {
      const { data } = await list();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const createSkill = createAsyncThunk(
  "skill/createSkill",
  async (skill)=> {
    try {
      const { data } = await create(skill);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const removeSkill = createAsyncThunk(
  "skill/removeSkill",
  async (id) => {
    try {
      const { data } = await remove(id);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateSkill = createAsyncThunk(
  "project/updateSkill",
  async (skill) => {
    try {
      const { data } = await update(skill);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const SkillSlice = createSlice({
  name: "skill",
  initialState: {
    value: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getListSkill.fulfilled, (state, action) => {
      state.value = action.payload;
    });
    builder.addCase(createSkill.fulfilled, (state, action) => {
      state.value.push(action.payload);
    });
    builder.addCase(updateSkill.fulfilled, (state, action) => {
      state.value.map((item) => item._id === action.payload._id ? action.payload : item)
    });
    builder.addCase(removeSkill.fulfilled, (state, action) => {
      console.log(222);
      state.value = state.value.filter(
        (item) => item._id !== action.payload._id
      );
    });
  },
});

export default SkillSlice.reducer;
