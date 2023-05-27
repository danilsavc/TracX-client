import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { $authHost } from "../../http/index";

export const fetchAllRoles = createAsyncThunk("fetchAllRoles/fetchGetRoles", async (params) => {
  const { data } = await $authHost.get("/api/roles");
  return data;
});

export const fetchUserRole = createAsyncThunk("roles/fetchUserRole", async (params) => {
  try {
    const { data } = await $authHost.post("/api/roles/user-role", params);
    return data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("An error occurred while processing your request.");
    }
  }
});

const initialState = {
  roles: [],
  status: null,
  message: null,
  status_userRole: null,
  message_userRole: null,
};

const rolesSlice = createSlice({
  name: "roles",
  initialState,
  reducers: {
    resetData(state) {
      state.status_userRole = null;
      state.message_userRole = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllRoles.pending, (state) => {
        state.status = "loading";
        state.roles = [];
      })
      .addCase(fetchAllRoles.fulfilled, (state, action) => {
        state.roles = action.payload;
        state.status = "loaded";
      })
      .addCase(fetchAllRoles.rejected, (state, action) => {
        state.roles = [];
        state.status = "error";
      })
      .addCase(fetchUserRole.pending, (state) => {
        state.status_userRole = "loading";
        state.message_userRole = null;
      })
      .addCase(fetchUserRole.fulfilled, (state, action) => {
        state.message_userRole = action.payload.message;
        state.status_userRole = "loaded";
      })
      .addCase(fetchUserRole.rejected, (state, action) => {
        if (action.error.message) {
          state.message_userRole = action.error.message;
        } else {
          state.message_userRole = "An error occurred while processing your request.";
        }
        state.status_userRole = "error";
      });
  },
});

export const { resetData } = rolesSlice.actions;

export const rolesReducer = rolesSlice.reducer;
