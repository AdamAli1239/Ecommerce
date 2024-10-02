import SweaterObject from "../imageObjects/SweaterObject";
const SweaterComponent = () => {
  const Sweaterlist = SweaterObject();
  return (
    <div>
      {Sweaterlist &&
        Sweaterlist.map((image) => <img src={image.src} key={image.id} />)}
    </div>
  );
};

export default SweaterComponent;
