import { Flex } from "@chakra-ui/react";
// export default function ProductSimple() {
import ProductSimple from "./card";

const FirstCard = () => {
  let content = [
    {
      src: "https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192329_aa.png",
      alt: "Green double couch with wooden legs",
    },
    {
      src: "https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192307_cc.png",
      alt: "Green double couch with wooden legs",
    },

    {
      src: "https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192273_bb.png",
      alt: "Green double couch with wooden legs",
    },
    {
      src: "https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192344_dd.png",
      alt: "Green double couch with wooden legs",
    },
  ];
  return (
    <>
      <Flex
        w="90%"
        flexDirection="row"
        m="auto"
        alignItems="center"
        justifyContent="space-around"
        mt="36px"
      >
        {content.map((el, index) => (
          <ProductSimple key={index} X={el.src} />
        ))}
      </Flex>
    </>
  );
};

export default FirstCard;
