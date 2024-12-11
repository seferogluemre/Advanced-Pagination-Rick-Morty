import { Col, Container, Row } from "react-bootstrap";
import useFetch from "../../hooks/useFetch";
import CharactersProps from "../types/Characters";

const CharacterList = () => {

    const { data, error, loading } = useFetch<{ results: CharactersProps[] }>('https://rickandmortyapi.com/api/character');





    return <>
        <Container>
            <Row>
                {
                    // data.map((item) => (
                    //     <Col>


                    //     </Col>
                    // ))
                }
            </Row>
        </Container>
    </>
}



export default CharacterList;