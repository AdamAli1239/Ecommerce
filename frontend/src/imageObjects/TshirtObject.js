import img1 from "../images/Tshirts/blacktShirt.jpg"
import img2 from "../images/Tshirts/greyTshirt.jpg"
import img3 from "../images/Tshirts/maroontshirt.jpg"
import img4 from "../images/Tshirts/whiteTshirt.jpg"
import img5 from "../images/Tshirts/yellowTshirt.jpg"

const TshirtObject = () => {
    const TshirtList = [
        {
          id: 1,
          src: img1,
          alt: "blacktShirt",
        },
        {
          id: 2,
          src: img2,
          alt: "greyTshirt",
        },
        {
          id: 3,
          src: img3,
          alt: "maroontshirt",
        },
        {
          id: 4,
          src: img4,
          alt: "whiteTshirt",
        },
        {
          id: 5,
          src: img5,
          alt: "yellowTshirt",
        },
      ];
      return TshirtList;
    };

 
export default TshirtObject;