import {
  SimpleGrid,
  Box,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  CardFooter,
  Button,
  Text,
  Flex,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

import { FaMapMarkerAlt } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
function Card5() {
  const { getTripPackages } = useContext(AuthContext);
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const response = await axios.get(
        "https://pear-nice-crab.cyclic.app/TripPackages"
      );
      let data = response.data;
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Box w={"90%"} m={"auto"}>
        <Text
          textAlign={"left"}
          mt={"36px"}
          mb="16px"
          fontWeight={"700"}
          fontSize={"28px"}
          lineHeight={"31px"}
          color={"#333333"}
        >
          Exclusively Curated: Tripoto's Mindful Retreats
        </Text>

        <SimpleGrid columns={[2, 2, 3]} spacing="40px">
          {data.map((el) => (
            <Card w={"100%"} variant={"unstyled"} key={el.id}>
              <CardBody key={el.id}>
                <Image src={el.src} alt={el.alt} borderRadius="lg" />
                <Stack mt="6" spacing="3">
                  <Heading size="sm" align={"left"}>
                    {el.heading}
                  </Heading>
                  <Flex alignItems={"center"} justifyContent="space-between">
                    <Text
                      fontSize={"14px"}
                      fontWeight="700"
                      display={"flex"}
                      alignItems="center"
                    >
                      <FaMapMarkerAlt />{" "}
                      <span style={{ color: "#359391" }}>{el.place}</span>{" "}
                    </Text>
                    <Text
                      bg={"#359391"}
                      color={"white"}
                      borderRadius={"30px"}
                      pl="8px"
                      pr="8px"
                      pt="4px"
                      pb="4px"
                      fontSize={"12px"}
                      fontWeight="400"
                    >
                      {el.duration}
                    </Text>
                  </Flex>

                  <Box>
                    <Flex justifyContent={"space-between"} h="50px">
                      <Flex align={"center"}>
                        <Text
                          fontSize="18px"
                          fontWeight="700"
                          color="#333"
                          mr="8px"
                        >
                          ₹{el.amount}
                        </Text>{" "}
                        <Text
                          fontSize={"14px"}
                          fontWeight="400"
                          opacity={"0.5"}
                        >
                          /person
                        </Text>
                      </Flex>

                      <Button
                        onClick={() => {
                          navigate(`/PackagePage/${el.id}`);
                        }}
                        colorScheme="teal"
                        variant="outline"
                        fontSize={"0.875em"}
                        fontWeight="400"
                        pt="4px"
                        pr="8px"
                        pb="4px"
                        pl="8px"
                      >
                        Book Now
                      </Button>
                    </Flex>
                  </Box>
                </Stack>
              </CardBody>
              <CardFooter>
                <Flex>
                  <Image
                    borderRadius="full"
                    boxSize="30px"
                    src="https://cdn1.tripoto.com/media/filter/mss/img/2165009/UserPhoto/1628574904_tripoto_s_mindful_retreats.jpg"
                    alt="Icon"
                  />
                  <Flex align={"center"}>
                    <Text pl={"4px"} pr="4px">
                      Tripoto's Mindful Retreats
                    </Text>
                    <MdVerified color={"#2F9BDB"} />
                  </Flex>
                </Flex>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
}

export default Card5;
