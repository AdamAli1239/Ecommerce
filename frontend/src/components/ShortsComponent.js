import ShortsObject from "../imageObjects/ShortsObjecy";

const ShortsComponent = () => {
  const shortslist = ShortsObject();
  return (
    <div>
      {shortslist &&
        shortslist.map((short) => (
          <img key={short.id} src={short.src} alt={short.alt} />
        ))}
    </div>
  );
};

export default ShortsComponent;
