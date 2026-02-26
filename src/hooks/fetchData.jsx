import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const useFetchSong = createAsyncThunk("artist/fetchArtist", async (url) => {
    const response = await axios.get(url);
    return response.data;
})



