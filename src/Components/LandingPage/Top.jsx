import styles from "./Top.css"
import Navbar from '../Navbar';

import {Stack,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement} from '@chakra-ui/react'

    import {
        Search2Icon
      } from '@chakra-ui/icons';

function Top ()
{

    const headingStyle={
        color:"white",
        fontSize:"40px",
        fontWeight:"400"
    }

    const inputBox={
        display:"block",
        width:"630px",
        height:"52px",
        borderRadius:"6px",
        padding:"12px 33px 12px 20px"
    }


    
    return(
        <div>
            <Navbar/>
            <div className="TopSection">
            <h1 style={headingStyle}>India's Largest Community of Travellers</h1>

            <Stack spacing={4}>
  <InputGroup >
    <Input placeholder='Search for itineraries, destinations, hotels or activities' color="white" variant="filled" focusBorderColor="white"  _focus={{
    background: "white",
    color: "black",
  }} w={630} pt="12px" pr="33px" pb="12px" pl="20px" h="52px" />
    <InputRightElement  mt="6px" children={<Search2Icon color='grey.200' />} />
  </InputGroup>
</Stack>


            </div>
        </div>
    )
}

export default Top;