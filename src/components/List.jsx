import { useState } from "react"

const List = () => {

    const [pokemonList, setPokemonList] = useState([]);

    const fetchPokemon = () => {
		fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
			.then((response) => response.json())
            .then((response) => setPokemonList(response.results))
            .catch((error) => console.log(error));

	};

    return (
        <div className="container w-25 border border-2 p-3">
            <button className="btn btn-success" onClick={() => fetchPokemon()}> Obtener Pokemones </button>
            <h4>List</h4>

            
            <ol className="list-group list-group-numbered">
            {pokemonList.map((pokemon, idx) => (
                <li  key={idx} className="list-group-item">{pokemon.name}</li>
            ))}
            </ol>
        </div>
    );
}
export default List;