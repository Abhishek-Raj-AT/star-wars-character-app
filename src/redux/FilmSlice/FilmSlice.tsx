import { getFilmActions } from "./FilmAyscThunk";
import { initialFilmList } from "./FilmType";
import { createSlice } from "@reduxjs/toolkit";

const initialState: initialFilmList = {
  list: [],
  isLoading: false,
  value: 5,
};
const FilmSlice = createSlice({
  name: "star",
  initialState,
  reducers: {
    increaseItems: (state, action) => {
      state.value *= action.payload;
    },
  },
  extraReducers: (builder)=>{
    builder
    .addCase(getFilmActions.pending,(state: initialFilmList)=>{
      state.isLoading = true;
    })
    .addCase(getFilmActions.fulfilled,(state: initialFilmList, {payload})=>{
      if(payload){
        state.list = payload
        console.log("payload " , payload)
      } else {
        state.list =[]
      }
      state.isLoading = false
    })
    .addCase(getFilmActions.rejected, (state: initialFilmList)=>{
      state.isLoading = false;
    })
    
    // .addCase(getAllItemAction.pending, (state: initialMovieState) => {
    //   state.loading = true;
    // })
    // .addCase(
    //   getAllItemAction.fulfilled,
    //   (state: initialMovieState, { payload }) => {
    //     if (payload) {
    //       state.list = payload;
    //     } else {
    //       state.list = [];
    //     }
    //     state.loading = false;
    //   }
    // )
    // .addCase(getAllItemAction.rejected, (state: initialMovieState) => {
    //   state.loading = false;
    // })
  },
});
export const filmReducer = FilmSlice.reducer;
export const filmAction = FilmSlice.actions;
