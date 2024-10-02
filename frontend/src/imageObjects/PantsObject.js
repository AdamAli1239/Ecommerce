import img1 from "../images/Pants/blackPants.jpg";
import img2 from "../images/Pants/darkBlueJeans.jpg";
import img3 from "../images/Pants/lightBlueJeans.jpg";
import img4 from "../images/Pants/whiteChinos.jpg";
import img5 from "../images/Pants/brownpants.jpg";
const PantsObject = () => {
  const Pantslist = [
    {
      id: 1,
      src: img1,
      alt: "blackPants",
    },
    {
      id: 2,
      src: img2,
      alt: "darkBlueJeans",
    },
    {
      id: 3,
      src: img3,
      alt: "lightBlueJeans",
    },
    {
      id: 4,
      src: img4,
      alt: "whiteChinos",
    },
    {
      id: 5,
      src: img5,
      alt: "brownpants",
    },
  ];
  return Pantslist;
};

export default PantsObject;
