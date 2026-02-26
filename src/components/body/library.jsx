import { useDispatch } from "react-redux";
import { setDataLibrary } from "../../store/slices";
import { useSelector } from "react-redux";
import { LibraryStyled, PrincipalSectionLibrary, PrincipalSongsSingle, SongButton, SongsImg, SongTittle, SongDescription, EmptyLibrary } from "../../styles";
import { useEffect, useState } from "react";

const Library = ({ value }) => {
    const dispatch = useDispatch();
    const { error, loading } = useSelector((state) => state.dataBaseSong);
    const { nameArtist, libraryData } = useSelector((state) => state.getData);

    const handleClick = (infoAlbum) => {
        if (libraryData.some(album => album.idAlbum === infoAlbum.idAlbum)) return;
        dispatch(setDataLibrary(infoAlbum))
    }

    useEffect(() => {
        console.log(libraryData)
    }, [value])

    return <PrincipalSectionLibrary>
        <h2>Librería</h2>
        {loading ? <p>Cargando...</p> :
            nameArtist === "" ? <p>Ingrese el nombre del artista </p> :
                <LibraryStyled>
                    {value ? value.map(infoAlbum => {
                        const songTittle = String(infoAlbum.strAlbum);
                        const subStringTittle = String(songTittle.substring(0, 17));
                        const songInfo = String(infoAlbum.strStyle);

                        return (
                            <PrincipalSongsSingle key={infoAlbum.idAlbum}>
                                <SongTittle>{songTittle.length > 17 ? subStringTittle + "..." : songTittle}</SongTittle>
                                <SongsImg src={infoAlbum.strAlbumThumb}></SongsImg>
                                <SongDescription>{!songInfo || songInfo === "null" ? "SIN DATOS" : songInfo}</SongDescription>
                                <SongButton type="button" onClick={() => handleClick(infoAlbum)} >Agregar</SongButton>
                            </PrincipalSongsSingle>
                        )
                    }) : <EmptyLibrary> No hay álbumes disponibles  </EmptyLibrary>}
                </LibraryStyled>}
    </PrincipalSectionLibrary>;
};

export default Library;
