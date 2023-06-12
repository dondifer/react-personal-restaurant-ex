import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Contact = (props) => {
  let navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const [btnDisabled, setBtnDisabled] = useState(true);

  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    if (data.name.length + 1 < 3) {
      setMessage("Name must be at least 3 characters");

      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("contactData", JSON.stringify(data));
    setTimeout(() => {
      navigate("/");
    }, 300);
    console.log(`sending data… ${data.name} ${data.email} ${data.phoneNumber}`);
  };

  return (
    <div>
      <div className="profile">
        <h1 className="menu__title">Contact</h1>
        <form className="react-forms" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="name"
            onChange={handleInputChange}
            name="name"
          />
          <span className="error-msg">{message}</span>
          <input
            type="email"
            placeholder="email"
            onChange={handleInputChange}
            name="email"
          />
          <input
            type="tel"
            placeholder="phone"
            onChange={handleInputChange}
            name="phoneNumber"
          />
          <button disabled={btnDisabled} type="submit">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
