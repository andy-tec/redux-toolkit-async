import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TittleSection, ImagenSection, PrincipalSection, MyLibraryStyled, ButtonSection, ArtistSection } from "../../styles.secondary";
import { setModifyLibrary } from "../../store/slices";

const Mylibrary = () => {
  const { libraryData } = useSelector((state) => state.getData);
  const [myLibrary, setMyLibrary] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    if (libraryData.length === 0) return;
    setMyLibrary(libraryData);
  }, [libraryData])
  const handleClick = (dataAlbum) => {
    const newLibrary = myLibrary.filter(album => album.idAlbum !== dataAlbum.idAlbum);
    setMyLibrary(newLibrary);
    dispatch(setModifyLibrary(newLibrary));
  }
  return <MyLibraryStyled>
    <h2>Mi Biblioteca</h2>
    {myLibrary.length > 0 ? myLibrary.map(infoAlbum => {
      const songTittle = String(infoAlbum.strAlbum);
      const subStringTittle = String(songTittle.substring(0, 12));
      const songArist = String(infoAlbum.strArtist);
      const subStringArtist = String(songArist.substring(0, 10));
      return (
        <PrincipalSection key={infoAlbum.idAlbum}>
          <ArtistSection>{songArist?.length > 12 ? subStringArtist + "..." : songArist}</ArtistSection>
          <TittleSection>{songTittle?.length > 10 ? subStringTittle + "..." : songTittle}</TittleSection>
          <ImagenSection src={infoAlbum.strAlbumThumb}></ImagenSection>
          <ButtonSection onClick={() => handleClick(infoAlbum)} type="button" >Eliminar</ButtonSection>
        </PrincipalSection>
      )
    }) : <p>Lista vacía</p>}
  </MyLibraryStyled>;
};

export default Mylibrary;
