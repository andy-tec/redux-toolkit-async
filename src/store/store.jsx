import { configureStore } from "@reduxjs/toolkit";
import { searchSong, setData } from "./slices";


export default configureStore({
    reducer: {
        dataBaseSong: searchSong.reducer,
        getData: setData.reducer
    },
});
