import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function GenerationCard({ generation: { name } }) {
  const navigate = useNavigate();
  return (
    <div
      className="generation-card"
      onClick={() => {
        navigate(`/generations/${name}`);
      }}
    >
      <h4 className="generation-card-title">{name.toUpperCase()}</h4>
      <div>
        <img
          className="generation-image"
          src={`${process.env.PUBLIC_URL}/assets/images/generation/${name}.png`}
          alt={name}
        />
      </div>
    </div>
  );
}

GenerationCard.propTypes = {
  generation: PropTypes.object.isRequired,
};
export default GenerationCard;
