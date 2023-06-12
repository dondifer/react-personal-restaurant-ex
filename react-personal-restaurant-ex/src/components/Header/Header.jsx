import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = (props) => {
  const [isRes, setisRes] = useState(false);
  const navigate = useNavigate();
  const showRes = () => {
    setisRes(!isRes);
    if (!isRes) {
      setTimeout(() => {
        navigate("/home");
      }, 100);
    } else {
      setTimeout(() => {
        navigate("/");
      }, 100);
    }
  };
  useEffect(() => {
    navigate("/");
  }, []);
  return (
    <div>
      <nav>
        <ul className="bullet-less">
          {!isRes
            ? props.links.map((link, index) => (
                <li key={index}>
                  <Link to={link.url}>{link.name}</Link>
                </li>
              ))
            : props.linksRes.map((link, index) => (
                <li key={index}>
                  <Link className="res-links" to={link.url}>
                    {link.name}
                  </Link>
                </li>
              ))}
        </ul>
        <button className="change-button" onClick={showRes}>
          Switch My Profilo/Il Ristorante
        </button>
      </nav>
    </div>
  );
};

export default Header;
