import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Badge from "../shared/Badge";

function PokemonDetails({ pokemon }) {
  const params = useParams();
  return (
    <>
      <div className="banner">
        <div className="banner-content">
          <Link to="/" className="navigate">
            <AiOutlineArrowLeft />
            <span className="back-text">Back</span>
          </Link>

          <h1 className="banner-title">{pokemon.species.name} </h1>
        </div>
      </div>
      <div className="pokemon-details-container">
        <div className="pokemon-card-medium">
          <img
            className="pokemon-sprite"
            alt={pokemon.species.name}
            src={pokemon.sprites.front_default}
          />
          <div className="badge-container">
            {pokemon.types.map((type, index) => {
              return <Badge type={type.type.name} key={index} />;
            })}
          </div>
        </div>
        <div className="pokemon-card-medium pokemon-stats-card">
          <h1 className="pokemon-card-title">Stats</h1>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Base Stat</th>
              </tr>
            </thead>
            <tbody>
              {pokemon.stats.map((stat, index) => {
                return (
                  <tr key={index}>
                    <td>{stat.stat.name.toUpperCase()}</td>
                    <td style={{ textAlign: "center" }}>{stat.base_stat}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="pokemon-card-medium pokemon-abilities-card">
          <h1 className="pokemon-card-title">Abilities</h1>
          <ul>
            {pokemon.abilities.map((ability, index) => {
              return (
                <li className="tooltip" key={index}>
                  <span>{ability.ability.name.toUpperCase()}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

PokemonDetails.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default PokemonDetails;
