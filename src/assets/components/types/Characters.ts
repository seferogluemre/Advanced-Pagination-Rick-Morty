export default interface CharactersProps {
    id?: number;
    name: string;
    status: string;
    image: string;
    gender: string;
    location: {
        name: string;
    }[];
}