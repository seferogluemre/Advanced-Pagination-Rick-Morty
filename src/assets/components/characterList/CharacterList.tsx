import { Alert, Button, Container, Row, Form } from "react-bootstrap";
import useFetch from "../../hooks/useFetch";
import CharactersProps from "../types/Characters";
import Card from "../layout/CharacterCard/CharacterCard";
import { useState } from "react";
import { useForm } from "react-hook-form";

const CharacterList = () => {
  const { register } = useForm<{ search: string; gender: string }>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [genderFilter, setGenderFilter] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("");

  const { data, error, loading, pageCount } = useFetch<{
    results: CharactersProps[];
  }>(`https://rickandmortyapi.com/api/character?page=${currentPage}`);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleGenderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGenderFilter(e.target.value);
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatusFilter(e.target.value);
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

  const filteredData = data?.results.filter(
    (character: CharactersProps) =>
      (genderFilter ? character.gender === genderFilter : true) &&
      (searchTerm
        ? character.name.toLowerCase().includes(searchTerm.toLowerCase())
        : true) &&
      (statusFilter ? character.status === statusFilter : true)
  );

  return (
    <>
      <Container>
        <div className="text-center my-5">
          <h2 className="gradient-title" style={{ color: "yellow" }}>
            Rick Ve Morty Karakterleri
          </h2>
          <p className="fs-6 text-white py-3">
            Çoklu evrenleri keşfet ve favori karakterlerini bul
          </p>
        </div>
        <Row className="row">
          <Form className="d-flex form justify-content-center row-gap-4 text-white align-items-center flex-column">
            <label>Karakter arama</label>
            <input
              type="text"
              className="bg-dark w-50 search-input form-control text-white"
              style={{ border: "none" }}
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <Form className="d-flex justify-content-center text-white column-gap-5 align-items-center filter-form">
              <Form.Group
                className="control"
                controlId="genderFilter"
                style={{ width: "400px" }}
              >
                <Form.Label>Cinsiyet Filtrele</Form.Label>
                <Form.Control as="select" onChange={handleGenderChange}>
                  <option value="">Hepsi</option>
                  <option value="Male">Erkek</option>
                  <option value="Female">Kadın</option>
                  <option value="Genderless">Cinsiyetsiz</option>
                  <option value="Unknown">Bilinmiyor</option>
                </Form.Control>
              </Form.Group>
              <Form.Group
                className="control"
                controlId="statusFilter"
                style={{ width: "400px" }}
              >
                <Form.Label>Durum Filtrele</Form.Label>
                <Form.Control as="select" onChange={handleStatusChange}>
                  <option value="">Hepsi</option>
                  <option value="Alive">Canlı</option>
                  <option value="Dead">Ölü</option>
                  <option value="unknown">Bilinmiyor</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </Form>
        </Row>
        <Row className="d-flex justify-content-center">
          {filteredData?.map((character: CharactersProps) => (
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
          <div className="pagination d-flex justify-content-center">
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
