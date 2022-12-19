import { Image,Box } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSlider = () => {

const slides=[
    {
        image:
          "https://cdn1.tripoto.com/media/filter/nxxl/img/1516992/Image/1670586625_img_0434.jpg"
      },
      {
        image:
          "https://cdn1.tripoto.com/media/filter/nxxl/img/2215463/Image/1669102212_1667974883_web1.jpeg"
      },
      {
        image:
          "https://cdn1.tripoto.com/media/filter/nxxl/img/2224454/Image/1670482094_homepage_recovered_op2.jpg"
      },
]

  return (
    <Carousel infiniteLoop="true" autoPlay={"true"} showThumbs={false}>
      {slides.map((slide) => {
        return(
            <Box width={"90%"} m="auto" mt="36px" >
<Image src={slide.image} height="auto" width="100%" borderRadius="md" />
            </Box>

        ) 
      })}
    </Carousel>
  );
};

export default ImageSlider;
