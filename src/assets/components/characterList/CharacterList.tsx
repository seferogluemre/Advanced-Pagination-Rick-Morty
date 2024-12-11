import useFetch from "../../hooks/useFetch";
import CharactersProps from "../types/Characters";

const CharacterList = () => {

    const { data, error, loading } = useFetch<CharactersProps[]>('https://rickandmortyapi.com/api/character');





    return <>
        characterList   
    </>
}



export default CharacterList;