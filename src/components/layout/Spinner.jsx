import spinner from "./assets/spinner/pokeball.gif";

function Spinner() {
  return (
    <div className="spinner-container">
      <img className="spinner-gif" src={spinner} alt="Loading..." />
    </div>
  );
}

export default Spinner;
