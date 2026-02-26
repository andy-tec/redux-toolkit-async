import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { UrlFirstPartArtist } from "../links/urls";
import { useFetchSong } from "./fetchData";
import { setModifyLibrary } from "../store/slices";

const useLogicProcess = () => {
    const { nameArtist } = useSelector((state) => state.getData);
    const dispatch = useDispatch();
    useEffect(() => {
        if (!nameArtist) return;
        const url = `${UrlFirstPartArtist}${nameArtist}`;
        dispatch(useFetchSong(url));
    }, [nameArtist, dispatch])
}

export default useLogicProcess;
