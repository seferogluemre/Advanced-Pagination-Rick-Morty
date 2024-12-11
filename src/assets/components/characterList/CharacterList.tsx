import { Alert, Button, Container, Row } from "react-bootstrap";
import useFetch from "../../hooks/useFetch";
import CharactersProps from "../types/Characters";
import Card from "../layout/CharacterCard/CharacterCard";
import { useState } from "react";

const CharacterList = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data, error, loading, pageCount } = useFetch<{
    results: CharactersProps[];
  }>(`https://rickandmortyapi.com/api/character?page=${currentPage}`);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

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
              className="col-xxl-3 col-lg-4 col-md-6 col-sm-12"
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
        <Row className="d-flex justify-content-center">
          <div className="pagination">
            {currentPage > 1 && (
              <Button
                onClick={() => handlePageChange(currentPage - 1)}
                className="mx-1"
              >
                &lt;
              </Button>
            )}
            {Array.from({ length: pageCount }, (_, index) =>
              index + 1 >= currentPage - 1 && index + 1 <= currentPage + 1 ? (
                <Button
                  key={index + 1}
                  className={`mx-1 ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </Button>
              ) : null
            )}
            {currentPage < pageCount && (
              <Button
                onClick={() => handlePageChange(currentPage + 1)}
                className="mx-1"
              >
                &gt;
              </Button>
            )}
          </div>
        </Row>
      </Container>
    </>
  );
};

export default CharacterList;
