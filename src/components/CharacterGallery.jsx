import characterData from "../data/characterData.json";
import Character from "./Character";

const CharacterGallery = () => {

    return (<div>
        {characterData.map((character) => (
            <Character key={character.id} {...character} name={character.name} imgUrl={character.imgUrl}
            
            />
        ))}
    </div>)
};

export default CharacterGallery;