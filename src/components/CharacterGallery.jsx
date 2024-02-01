import characterData from "../data/characterData.json";
import Character from "./Character";

const CharacterGallery = () => {

    return (<div>
        {characterData.map((character) => (
            <Character key={character.id} name={character.name} 
            
            />
        ))}
    </div>)
};

export default CharacterGallery;