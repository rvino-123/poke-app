import PokemonDetails from "../components/pokemon/PokemonDetails";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEntity } from "../context/pokemonActions";
import Spinner from "../components/layout/Spinner";

function Pokemon() {
  const [pokemon, setPokemon] = useState();
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const navigate = useNavigate;

  useEffect(async () => {
    const pokemonDetails = await getEntity("pokemon", params.name, "{}");
    setPokemon(pokemonDetails);
    setLoading(false);
  }, []);

  if (!loading) {
    return <PokemonDetails pokemon={pokemon} />;
  } else {
    return <Spinner />;
  }
}

export default Pokemon;
