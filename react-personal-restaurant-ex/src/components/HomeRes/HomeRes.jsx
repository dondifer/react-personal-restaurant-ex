const HomeRes = (props) => {
  return (
    <div>
      <div className="profile">
        <h1 className="menu__title">Welcome to Il Ristorante</h1>
        {/* <ul>
          {props.dishesList.map((item, index) => (
            <li key={index}>
              <p>Name: {item.name}</p>
              <p>Description: {item.description}</p>
              <p>Price: {item.price}</p>
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default HomeRes;
