import { createSlice } from "@reduxjs/toolkit";
import { useFetchSong } from "../hooks/fetchData";

export const setData = createSlice({
    name: "getData",
    initialState: {
        nameArtist: "",
        libraryData: []
    },
    reducers: {
        setArtistName: (state, action) => {
            state.nameArtist = action.payload;
        },
        setDataLibrary: (state, action) => {
            state.libraryData = [...state.libraryData, action.payload];

        },
        setModifyLibrary: (state, action) => {
            state.libraryData = action.payload;
        }
    }
})

export const searchSong = createSlice({
    name: "getDataFetch",
    initialState: {
        data: [],
        error: null,
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(useFetchSong.pending, (state) => {
                state.loading = true;
            })
            .addCase(useFetchSong.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
            })
            .addCase(useFetchSong.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            });
    },
});

export const { setArtistName, setDataLibrary, setModifyLibrary } = setData.actions;

