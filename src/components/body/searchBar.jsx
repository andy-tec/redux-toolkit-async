import React, { useState } from 'react'
import { FieldsetInput, Input } from '../../styles'
import { useDispatch } from 'react-redux'
import { setArtistName } from '../../store/slices'
import { useEffect } from 'react'

const SearchBar = () => {
    const [input, setDataInput] = useState("");
    const dispatch = useDispatch();
    const handleChange = (e) => {
        e.preventDefault();
        const newValueInput = e.target.value;
        setDataInput(newValueInput);
        const normalizeInput = newValueInput.toLowerCase().trim();
        dispatch(setArtistName(normalizeInput));
    }

    return (
        <FieldsetInput>
            <Input onChange={handleChange} value={input} placeholder='Ingrese nombre del artista'></Input>
        </FieldsetInput>
    )
}

export default SearchBar
