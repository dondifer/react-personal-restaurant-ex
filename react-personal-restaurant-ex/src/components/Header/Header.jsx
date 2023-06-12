import { Link } from "react-router-dom";
import { useState } from "react";

const Header = (props) => {
  const [isRes, setisRes] = useState(false);
  const showRes = () => {
    setisRes(!isRes);
  };
  return (
    <div>
      <nav>
        <ul className="bullet-less">
          {isRes
            ? props.links.map((link, index) => (
                <li key={index}>
                  <Link to={link.url}>{link.name}</Link>
                </li>
              ))
            : props.linksRes.map((link, index) => (
                <li key={index}>
                  <Link to={link.url}>{link.name}</Link>
                </li>
              ))}
        </ul>
        <button className="change-button" onClick={showRes}>
          Switch between My Profilo/Il Ristorante
        </button>
      </nav>
    </div>
  );
};

export default Header;
