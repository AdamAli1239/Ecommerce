import SocksObject from "../imageObjects/SocksObject";

const SockComponent = () => {
  const sockList = SocksObject();
  return (
    <div>
      {sockList &&
        sockList.map((image) => <img src={image.src} key={image.id} />)}
    </div>
  );
};

export default SockComponent;
