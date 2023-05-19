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
    const currentTime = Date.now() / 1000;
    if (decodedToken.exp < currentTime) {
      throw new Error("Token expired");
    }

    return decodedToken;
  } catch (error) {
    // if (error.response.data.message) {
    //   throw new Error(JSON.stringify(error.response.data.message));
    // }
  }
});

const initialState = {
  data: null,
  status: "loading",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRegister.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "loaded";
        state.error = null;
      })
      .addCase(fetchRegister.rejected, (state, action) => {
        state.error = JSON.parse(action.error.message);
        state.status = "error";
      })
      .addCase(fetchLogin.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "loaded";
        state.error = null;
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.error = JSON.parse(action.error.message);
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

export const { logout } = authSlice.actions;
export const selectIsAuth = (state) => Boolean(state.auth.data);
export const authReducer = authSlice.reducer;
