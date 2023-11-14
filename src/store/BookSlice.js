import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance} from "../utils/API";

export const fetchBooks = createAsyncThunk(
  "books/fetchBooks",
  async (query, thunkAPI) => {
    try {
      const response = await instance.get(
        `?q=${query}&orderBy=newest&maxResults=30`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

// Define the initial state here
const savedList = localStorage.getItem("favBooks");
const parsedList = savedList ? JSON.parse(savedList) : [];
const initialState = {
  books: [],
  list: parsedList,
  loading: "idle",
  error: null,
  activeTab: "History",
  Count: 12,
};

const bookSlice = createSlice({
  name: "books",
  initialState, 
  reducers: {
    handleTab: (state, action) => {
      state.activeTab = action.payload;
    },
    LoadMore: (state, action) => {
      state.Count = action.payload;
    },
    FavBooks: (state, action) => {
      if (!state.list.some((b) => b.id === action.payload.id)) {
        state.list.push(action.payload);
        localStorage.setItem("favBooks", JSON.stringify(state.list));
      }
    },
    DeleteBook: (state, action) => {
      state.list = state.list.filter((book) => book.id !== action.payload);
      localStorage.setItem("favBooks", JSON.stringify(state.list));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state, action) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.books = action.payload.items;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message;
      });
  },
});

export const { handleTab, LoadMore, FavBooks, DeleteBook } = bookSlice.actions;
export default bookSlice.reducer;
