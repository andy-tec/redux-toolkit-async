import { useEffect, useState } from "react"
import Library from "./library"
import MyLibrary from "./mylibrary"
import SearchBar from "./searchBar"
import { useSelector } from "react-redux"
import useLogicProcess from "../../hooks/logicProcess"
import { Body } from "../../styles"

const Content = () => {
    const { data, loading, error } = useSelector((state) => state.dataBaseSong);
    const { libraryData } = useSelector((state) => state.getData);
    const [infoArtist, setInfoArtist] = useState(null);
    useLogicProcess();
    const libData = libraryData.length;
    useEffect(() => {
        if (data.length === 0) return
        setInfoArtist(data.album);

    }, [data, loading, error])
    return (
        <Body show={libData}>
            <SearchBar />
            <Library value={infoArtist} />
            {libData > 0 && <MyLibrary />}
        </Body>
    )
}

export default Content
