import CharactersProps from '../../types/Characters';
import './CharacterCard.scss';

const CharacterCard = ({ name, status, gender, image, location }: CharactersProps) => {

    let statusText = '';

    // Switch ifadesini burada kullanarak statusText değerini belirleyelim
    switch (status) {
        case 'Alive':
            statusText = 'Yaşıyor';
            break;
        case 'Dead':
            statusText = 'Öldü';
            break;
        case 'Unknown':
            statusText = 'Bilinmiyor';
            break;
        default:
            statusText = 'Not Status';
            break;
    }

    let genderText = "";
    switch (gender) {
        case "Male":
            genderText = "Erkek";
            return 0;
        case "Female":
            genderText = "Kadın";
            return 0;
    }

    return (
        <div className='card'>
            <div className='card-header'>
                <img src={image} className='img-fluid character-image' alt={name} />
            </div>
            <div className='card-body d-flex flex-column row-gap-2'>
                <h6 className='character-name'>{name}</h6>
                <div className='d-flex align-items-center column-gap-1'>
                    <span className="h-2 status-color rounded-full bg-success"></span>
                    <span>{statusText}</span>
                </div>
                <h6 className='character-gender'>{gender}</h6>
                <h6 className='character-location'>{location.name}</h6>
            </div>
        </div>
    );
};

export default CharacterCard;
