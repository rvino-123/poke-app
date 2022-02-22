import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getEntity, filterPokemon } from "../../context/pokemonActions";
import PokemonCardSmall from "./PokemonCardSmall";
import Spinner from "../layout/Spinner";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredResults, setFilteredResults] = useState([]);
  const params = useParams();

  const handleChange = async (e) => {
    const query = e.target.value;

    console.log(pokemons);
    const pokemonFiltered = filterPokemon(pokemons, query);
    setFilteredResults(pokemonFiltered);
  };

  useEffect(() => {
    const loadGenerations = async () => {
      const generations = await getEntity("generation", params.name, "[]");
      setPokemons(generations.pokemon_species);
      setFilteredResults(generations.pokemon_species);
      setLoading(false);
    };
    loadGenerations();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="banner">
        <div className="banner-content">
          <Link to="/" className="navigate">
            <AiOutlineArrowLeft />
            <span className="back-text">Back</span>
          </Link>

          <h1 className="banner-title">{params.name}</h1>
        </div>
      </div>
      <div className="pokemon-search-container">
        <div className="pokemon-search-bar">
          <FaSearch />
          <input className="pokemon-search-input" onChange={handleChange} />
        </div>
      </div>
      <div className="pokemon-container">
        {filteredResults.map((poke, index) => {
          return <PokemonCardSmall key={index} pokemon={poke} />;
        })}
      </div>
    </>
  );
}

export default PokemonList;
