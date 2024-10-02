import img1 from "../images/Socks/brownDiamondSocks.jpg";
import img2 from "../images/Socks/graySocks.jpg";
import img3 from "../images/Socks/redDiamondSocks.jpg";

const SocksObject = () => {
  const SocksList = [
    {
      id: 1,
      src: img1,
      alt: "brownDiamondSocks",
    },
    {
      id: 2,
      src: img2,
      alt: "graySocks",
    },
    {
      id: 3,
      src: img3,
      alt: "redDiamondSocks",
    },
  ];
  return SocksList;
};
export default SocksObject;
