import PropTypes from "prop-types";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function PokemonCardSmall({ pokemon: { name } }) {
  const navigate = useNavigate();
  const handleClick = async () => {
    navigate(`/pokemon/${name}`);
  };
  return (
    <div id={name} className="pokemon-card-small" onClick={handleClick}>
      <h1 className="generation-card-title">{name}</h1>
    </div>
  );
}

PokemonCardSmall.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default PokemonCardSmall;
