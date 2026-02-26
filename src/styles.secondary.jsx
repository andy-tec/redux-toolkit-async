import styled from "styled-components";

const MyLibraryStyled = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5em;   
`

const PrincipalSection = styled.section`
    display: grid;
    width: 16em;
    height:8em;
    border: solid 0.2em;
    grid-template-columns: 2fr 1fr;
    grid-template-areas:
    "Imagen Artist"
    "Imagen Tittle" 
    "Imagen Button";  
`
const ImagenSection = styled.img`
    grid-area: Imagen;
    width:100%;
    height: 8em;
    margin:0;
`
const ArtistSection = styled.p`
    grid-area: Artist;
    font-size:0.8em;
    text-align: center;
    height: 3em;
    margin-top:0.2em;
    margin-bottom:0;
`

const TittleSection = styled.p`
    grid-area: Tittle;
    font-size:0.8em;
    text-align: center;
    height: 2em;
    margin:0;
`
const ButtonSection = styled.button`
    grid-area: Button;
    width: 100%;
    height: 3em;
    border-radius: 0.0em;
    border: none;
    align-self: end;
    box-sizing: border-box;
    cursor: pointer;
    margin:0;
    
`

export { ButtonSection, PrincipalSection, MyLibraryStyled, ImagenSection, TittleSection, ArtistSection }