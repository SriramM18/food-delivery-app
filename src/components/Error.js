import { useRouteError, Link } from "react-router-dom";
import img from "../assets/img/mars.png";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="container">
      <div className="error-page">
        <img className="error-img" alt="error-img" src={img} />
        <h1>Oops!!</h1>
        <p className="subheading-text">
          You might have landed on a different planet!
        </p>
        {err && <p>{err.status + " : " + err.statusText}</p>}
        <button className="error-button">
          <Link to="/">Back to Home</Link>
        </button>
      </div>
    </div>
  );
};

export default Error;
