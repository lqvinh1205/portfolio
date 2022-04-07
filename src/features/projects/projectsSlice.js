import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { create, list, read, remove, update } from "../../api/projects";

export const getListProject = createAsyncThunk(
  "project/getListProject",
  async () => {
    try {
      const { data } = await list();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const getProject = createAsyncThunk(
    "project/getProject",
    async (id) => {
      try {
        const { data } = await read(id);
        return data;
      } catch (error) {
        console.log(error);
      }
    }
  );
  
export const createProject = createAsyncThunk(
    "project/createProject",
    async (project) => {
      try {
        const { data } = await create(project);
        return data;
      } catch (error) {
        console.log(error);
      }
    }
  );
  
export const removeProject = createAsyncThunk(
    "project/removeProject",
    async (id) => {
      try {
        const { data } = await remove(id);
        return data;
      } catch (error) {
        console.log(error);
      }
    }
  );

  export const updateProject = createAsyncThunk(
    "project/updateProject",
    async (project) => {
      try {
        const { data } = await update(project);
        return data;
      } catch (error) {
        console.log(error);
      }
    }
  );

const ProjectSlice = createSlice({
  name: "project",
  initialState: {
    value: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getListProject.fulfilled, (state, action) => {
        state.value = action.payload
        console.log(222);
    });
  },
});

export default ProjectSlice.reducer;
