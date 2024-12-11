import { Alert, Button, Container, Row } from "react-bootstrap";
import useFetch from "../../hooks/useFetch";
import CharactersProps from "../types/Characters";
import Card from "../layout/CharacterCard/CharacterCard";

const CharacterList = () => {
  const { data, error, loading, pageCount } = useFetch<{
    results: CharactersProps[];
  }>("https://rickandmortyapi.com/api/character");

  if (error) {
    return (
      <Alert role="alert" className="alert">
        Hata mesajı: {error}
      </Alert>
    );
  }
  if (loading) {
    return <div>Yükleniyor.........</div>;
  }

  return (
    <>
      <Container>
        <Row className="d-flex justify-content-center">
          {data?.results.map((character: CharactersProps) => (
            <div
              className="col-xxl-3 col-lg-4  col-md-6 col-sm-12"
              key={character.id}
            >
              <Card
                image={character.image}
                name={character.name}
                status={character.status}
                location={character.location}
                gender={character.gender}
              />
            </div>
          ))}
        </Row>
        <Row className="d-flex justify-content-center flex-row">
          {Array.from({ length: pageCount }, (_, index) => (
            <Button key={index + 1} className="mx-1">
              {index + 1}
            </Button>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default CharacterList;
