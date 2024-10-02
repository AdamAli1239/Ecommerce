import PantsObject from "../imageObjects/PantsObject";

const PantsComponent = () => {
  const Pantslist = PantsObject();
 
  return (
    <div>
      {Pantslist &&
        Pantslist.map((image) => (
          <img key={image.id} src={image.src} alt={image.alt} />
        ))}
    </div>
  );
};

export default PantsComponent;
