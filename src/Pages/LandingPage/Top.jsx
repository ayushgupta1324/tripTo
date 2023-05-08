import styles from "./Top.css";
// import Navbar from "../Navbar";

import {
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";

import { Search2Icon } from "@chakra-ui/icons";
import Navbar from "../../Components/Navbar";

function Top() {
  const headingStyle = {
    color: "white",
    fontSize: "36px",
    fontWeight: "400",
    fontWeight: "bold",
    marginTop: "56px",
    paddingBottom: "8px",
  };

  return (
    <div>
      <div className="TopDiv">
        <Navbar/>
        <div className="TopSection">
          <h1 style={headingStyle}>India's Largest Community of Travellers</h1>

          {/* <Stack border="1px solid blue" spacing={4}> */}
            <InputGroup w="48%" m="auto">
              <Input
                placeholder="Search for itineraries, destinations, hotels or activities"
                backgroundColor="white"
                focusBorderColor="white"
                _focus={{ background: "white", color: "black", border: "none" }}
                w={"100%"}
                pt="12px"
                pr="33px"
                pb="12px"
                pl="20px"
                h="52px"
              />
              <InputRightElement
                mt="6px"
                children={<Search2Icon color="grey.200" />}
              />
            </InputGroup>
          {/* </Stack> */}
        </div>
      </div>
    </div>
  );
}

export default Top;
