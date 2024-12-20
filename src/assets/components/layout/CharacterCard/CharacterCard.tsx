import CharactersProps from "../../types/Characters";
import "./CharacterCard.scss";

const CharacterCard = ({
  name,
  status,
  gender,
  image,
  location,
}: CharactersProps) => {
  let statusText = "";
  let genderText = "";
  let statusClass = "";

  // Switch ifadesini burada kullanarak statusText değerini belirleyelim
  switch (status) {
    case "Alive":
      statusText = "Yaşıyor";
      statusClass = "h-2 status-color rounded-full bg-success";
      break;
    case "Dead":
      statusText = "Öldü";
      statusClass = "h-2 status-color rounded-full bg-danger";
      break;
    case "Unknown":
      statusText = "Bilinmiyor";
      statusClass = "h-2 status-color rounded-full bg-body-secondary";
      break;
    default:
      statusText = "Not Status";
      statusClass = "h-2 status-color rounded-full bg-body-tertiary";
      break;
  }

  const genderCondition = () => {
    switch (gender) {
      case "Male":
        genderText = "Erkek";
        return 0;
      case "Female":
        genderText = "Kadın";
        return 0;

      case "genderless":
        genderText = "Cinsiyetsiz";
        return 0;
      default:
        genderText = "Bilinmiyor";
        return 0;
    }
  };
  genderCondition();

  return (
    <div className="card">
      <div className="card-header">
        <img src={image} className="img-fluid character-image" alt={name} />
      </div>
      <div className="card-body d-flex flex-column row-gap-2">
        <h6 className="character-name">{name}</h6>
        <div className="d-flex align-items-center column-gap-1">
          <span className={statusClass}></span>
          <span>{statusText}</span>
        </div>
        <h6 className="character-gender">{genderText}</h6>
        <div>
          <p className="m-0">Son Konum;</p>
          <h6 className="character-location">{location.name}</h6>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
