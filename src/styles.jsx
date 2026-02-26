import styled from "styled-components";

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`
const Body = styled.main`
    display: grid;
    grid-template-columns: ${prop => (prop.show > 0 ? "1fr 1fr" : "1fr")};
    grid-template-areas: 
    "FieldsetInput FieldsetInput"
    "${prop => (prop.show > 0 ? "Library MyLibrary" : "Library Library")}";
    width: 100%;
`
const Input = styled.input`
    border-radius: 0.3rem;
    width: 30rem;
    text-align: center;
`

const Button = styled.button`
    border-radius: 0.3rem;
    padding: 0.5rem;
`
const FieldsetInput = styled.fieldset`
grid-area: FieldsetInput;
    display: inline-block;
    padding: 0.6rem;
    border: 2px solid #000000;
    justify-self: center;
`
const LibraryStyled = styled.section`
    grid-area: Library;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(11em, 1fr));
    gap: 1.5em;
    padding: 2em;
    justify-content: center;
    justify-items: center;
    text-align: center;
    box-sizing: border-box;
`

const PrincipalSectionLibrary = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
`

const PrincipalSongsSingle = styled.section`
    background-color: #ffffff;
    width: 10em;
    height:18em;
    box-sizing: border-box;
    display: grid;
    grid-template-rows: 3em 5fr 1fr 1fr;
    grid-template-areas: 
        "SongTittle"
        "SongsImg"
        "SongDescription"
        "SongButton";
    align-items: center;
    justify-items: center;
    border: solid 0.15em;
    border-radius: 0.5em;
    overflow: hidden;
`

const SongsImg = styled.img`
    grid-area: SongsImg;
    width: 100%;
    height: 10em;
    object-fit: cover;
`;

const SongTittle = styled.h2`
    grid-area: SongTittle;
    font-size: 0.9em;
`;

const SongDescription = styled.p`
    grid-area: SongDescription;
    font-size: 0.8em;   
`;

const SongButton = styled.button`
    grid-area: SongButton;
    cursor: pointer;
`
const EmptyLibrary = styled.p`
    grid-column: 1 / -1;
    text-align: center;
    margin-top: 2em;
    width: 100%;
`

export { Header, Body, Input, Button, FieldsetInput, LibraryStyled, PrincipalSectionLibrary, PrincipalSongsSingle, SongsImg, SongTittle, SongDescription, SongButton, EmptyLibrary }