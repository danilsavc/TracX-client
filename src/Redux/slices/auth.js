import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";
import { $authHost, $host } from "../../http/index";

export const fetchRegister = createAsyncThunk("auth/fetchRegister", async (params) => {
  try {
    const { data } = await $host.post("/api/user/registration", params);
    localStorage.setItem("token", data.token);
    return jwt_decode(data.token);
  } catch (error) {
    if (error.response.data.errors) {
      throw new Error(JSON.stringify(error.response.data.errors));
    }
    if (error.response.data.message) {
      throw new Error(JSON.stringify(error.response.data.message));
    }
  }
});

export const fetchLogin = createAsyncThunk("auth/fetchLogin", async (params) => {
  try {
    const { data } = await $host.post("/api/user/login", params);
    localStorage.setItem("token", data.token);
    return jwt_decode(data.token);
  } catch (error) {
    if (error.response.data.errors) {
      throw new Error(JSON.stringify(error.response.data.errors));
    }
    if (error.response.data.message) {
      throw new Error(JSON.stringify(error.response.data.message));
    }
  }
});

export const fetchAuth = createAsyncThunk("auth/fetchAuth", async () => {
  try {
    const { data } = await $authHost.get("/api/user/auth");
    localStorage.setItem("token", data.token);
    const decodedToken = jwt_decode(data.token);

    return decodedToken;
  } catch (error) {
    if (error.response.data.message) {
      throw new Error(JSON.stringify(error.response.data.message));
    }
  }
});

const initialState = {
  data: null,
  status: "loading",
  error: null,
  badReq: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.data = null;
    },
    resetData(state) {
      state.data = null;
      state.status = "loading";
      state.error = null;
      state.badReq = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRegister.pending, (state) => {
        state.status = "loading";
        state.badReq = null;
      })
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "loaded";
        state.badReq = null;
      })
      .addCase(fetchRegister.rejected, (state, action) => {
        state.badReq = JSON.parse(action.error.message);
        state.status = "error";
      })
      .addCase(fetchLogin.pending, (state) => {
        state.status = "loading";
        state.badReq = null;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "loaded";
        state.badReq = null;
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.badReq = JSON.parse(action.error.message);
        state.status = "error";
      })
      .addCase(fetchAuth.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchAuth.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "loaded";
        state.error = null;
      })
      .addCase(fetchAuth.rejected, (state, action) => {
        state.error = JSON.parse(action.error.message);
        state.status = "error";
      });
  },
});

export const { logout, resetData } = authSlice.actions;

export const authReducer = authSlice.reducer;
