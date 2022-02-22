import { useNavigate, Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div className="banner">
        <div style={{ alignItems: "center" }}>
          <h1>
            NOT FOUND Click <Link to="/">Here</Link> to return to the home page
          </h1>
        </div>
      </div>
    </>
  );
}

export default NotFound;
