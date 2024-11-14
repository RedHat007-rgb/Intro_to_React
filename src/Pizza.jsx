//learned how to import and export the components from one file to another file by creating a new component(pizza).

const Pizza = (props) => {
  return (
    <div className="pizza">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <img src={props.image} alt={props.name}></img>
    </div>
  );
};

export default Pizza;
