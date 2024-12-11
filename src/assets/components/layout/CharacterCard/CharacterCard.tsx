import CharactersProps from '../../types/Characters';
import './CharacterCard.scss'

const CharacterCard = ({ name, status, gender, image, location }: CharactersProps) => {

    return (
        <div className='card'>
            <div className='card-header'>
                <img src={image} className='img-fluid character-image' />
            </div>
            <div className='card-body'>
                <h6 className='character-name'>{name}</h6>
                <p className='character-status'>{status}</p>
                <h6 className='character-gender'>{gender}</h6>
                <h6 className='character-location'>{location.name}</h6>
            </div>
        </div>
    )
}


export default CharacterCard;