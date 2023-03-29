import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const ImageCour = ({ images }) => {
  return (
    <div className="w-full">
      <Carousel showArrows={true} showThumbs={false} infiniteLoop={true}>
        {images.map((image, index) => (
          <div key={index}>
            <Image src={image} alt={`Image ${index}`} width={500} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCour;
