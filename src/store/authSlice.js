import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Auther } from "../utils/API";

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (userData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await Auther.post("/register", userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await Auther.post("/login", userData);
      localStorage.setItem("user", JSON.stringify(response.data.result));
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const logoutUser = createAsyncThunk(
  "user/logoutUser",
  async (_, thunkAPI) => {
    try {
      localStorage.removeItem("user");
      return { status: "success" };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getUser = () => {
  let userStorage = JSON.parse(localStorage.getItem("user"));
  if (userStorage) {
    return userStorage;
  } else {
    return null;
  }
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: getUser(),
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;

        if (action.error.message === "Request failed with status code 404") {
          state.error = "Access Denied! Invalied Credendials";
        } else {
          state.error = action.error.message;
        }
      })
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
