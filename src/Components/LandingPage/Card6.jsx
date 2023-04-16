import {
  Text,
  Card,
  CardBody,
  Image,
  Stack,
  SimpleGrid,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Card6() {
  let content = [
    {
      src: `https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669632307_1571062180_florian_wehde_fwtpzbjw_a0_unsplash.jpg`,
      alt: "Photo of These Thrilling",
      heading: "Resorts World Sentosa",
      text: "10 Best Places To Experience the Chills This Winter",
      name: "Kadambari Bhatte (curlytravelmess)",
    },
    {
      src: `https://static2.tripoto.com/media/filter/tst/img/388225/TripDocument/1508499780_106187671.jpg`,
      alt: "Photo of Visit These 7 C",
      heading: "singapore tourism Board",
      text: "15 Winter Destinations, That are Not Shimla or Manali",
      name: "Karishma Shaikh",
    },
    {
      src: "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1658863969_1493707507_15798144758_5a93457ae4_o.jpg",
      alt: "Photo of A Curated Guide",
      heading: "Resorts World Sentosa",
      text: "12 Hot Springs in India That Will Warm You Up This Winter",
      name: "Disha Kapkoti",
    },
    {
      src: "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1651046452_1545558276_erdap_2129568_1280.jpg",
      alt: "Photo of Just 3 Hours Aw",
      heading: "Oman Tourism",
      text: "Trips to Take with Your Bae This Winter in India",
      name: "Mouna Nanaiah",
    },
    {
      src: `https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1664284174_1638860409_photo_1459600661907_3c72c54955de.jpeg`,
      alt: "Photo of These Thrilling",
      heading: "Resorts World Sentosa",
      text: "Nagaland's Hornbill Festival is Happening this December",
      name: "Shruti Singh",
    },
    {
      src: `https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1666951409_1654136098_chinatown_mural_art.jpg`,
      alt: "Photo of Visit These 7 C",
      heading: "singapore tourism Board",
      text: "26 Best Places In India To Visit This December",
      name: "Pritha Puri",
    },
    {
      src: "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1666952031_1637516919_img_8593.jpg",
      alt: "Photo of A Curated Guide",
      heading: "Resorts World Sentosa",
      text: "10 Events You Can't Miss This Winter in Delhi",
      name: "Tanisha Mundra",
    },
    {
      src: "https://static2.tripoto.com/media/filter/tst/img/464802/TripDocument/1576478834_cover.jpg",
      alt: "Photo of Just 3 Hours Aw",
      heading: "Oman Tourism",
      text: "10 Events You Can't Miss This Winter in Delhi",
      name: "Srishti (still.winds)",
    },
  ];

  return (
    <>
      <Box w={"90%"} m={"auto"}>
        <Text
          textAlign={"left"}
          mt={"36px"}
          fontWeight={"700"}
          fontSize={"28px"}
          lineHeight={"31px"}
          color={"#333333"}
        >
          Plan You Next International Trip During December & January
        </Text>

        <SimpleGrid columns={[2, null, 4]} spacing="4">
          {content.map((el,index) => (
            <Card key={index} maxW="xs" variant={"unstyled"}>
              <CardBody p={"10px"} border={"none"}>
                <Image
                  src={el.src}
                  alt={el.alt}
                  borderRadius="lg"
                  h={"173px"}
                  w={"260px"}
                />
                <Stack mt="6" spacing="3">
                  <Text
                    align={"left"}
                    fontWeight={"700"}
                    fontSize={"18px"}
                    lineHeight={"26px"}
                    color={"#333333"}
                  >
                    {el.text}
                  </Text>

                  <Text align={"left"}>
                    By{" "}
                    <Link to="/">
                      <span style={{ color: "teal" }}>{el.name}</span>
                    </Link>
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
}

export default Card6;
