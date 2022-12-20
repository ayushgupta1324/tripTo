import {Divider,SimpleGrid,Box,Text,Stack,Image,Flex,Grid, GridItem} from "@chakra-ui/react"
import tripTo from  "../TripTo.png"
import {ImFacebook2} from "react-icons/im"
import {FaTwitterSquare} from "react-icons/fa"
import {BsInstagram,BsYoutube,BsPinterest,BsRssFill } from "react-icons/bs"



function Footer()
{
return(
    



    <>
   
    <Divider/>


<SimpleGrid columns={[2, null, 5]} spacing='40px' w="90%" m="auto"  mt="30px">

<Box height='auto'>
<Stack direction={'row'} spacing={2}>
        <Image width={10} src={tripTo} alt="logo"/>
        <Text fontSize='lg' fontWeight={500}>tripTo</Text>
    </Stack>
    <Text fontSize="12px" color="#333" fontFamily={"helvetica"} fontWeight={"300"} lineHeight="20px">India's Largest Travel Community</Text>
    <Divider/>
    <Flex justifyContent={"space-around"} mb="8px" pt="8px" lineHeight={"20px"} fontSize="18px"><ImFacebook2/> <FaTwitterSquare/> <BsInstagram/> <BsYoutube/> <BsPinterest/> <BsRssFill/> </Flex>
    <Image m="auto" mt="8px" mb="8px" src="https://cdn1.tripoto.com/assets/2.9/img/logo/download-android-app.svg"/>
</Box>

  <Box height='auto' textAlign={"left"} fontSize="12px" color="#333" fontFamily={"helvetica"} fontWeight={"300"} lineHeight="18px">

<Text fontSize="16px" color="#333" fontWeight={"500"} pb="4px" fontFamily={"helvetica"}>About Tripoto
</Text>
<Text mt="8px" mb="8px">How It Works
</Text>
<Text mt="8px" mb="8px">
FAQ’s
</Text>
<Text mt="8px" mb="8px">
Privacy Policy
</Text >
<Text mt="8px" mb="8px">
    Terms & Conditions
</Text>
<Text mt="8px" mb="8px">
Careers
</Text>
<Text mt="8px" mb="8px">Contact Us
</Text>

  </Box>
  <Box height='auto' textAlign={"left"} fontSize="12px" color="#333" fontFamily={"helvetica"} fontWeight={"300"} lineHeight="18px">

<Text fontSize="16px" color="#333" fontWeight={"500"} pb="4px" fontFamily={"helvetica"}>
Products

</Text>
<Text mt="8px" mb="8px"> 
Tour Packages

</Text>
<Text mt="8px" mb="8px">
Travel Guides
</Text>
<Text mt="8px" mb="8px">
Trips & Itineraries
</Text>
<Text mt="8px" mb="8px">
Weekend Getaways
</Text>
<Text mt="8px" mb="8px">
Places to Visit
</Text>
<Text mt="8px" mb="8px">
Other Travel Categories
</Text>
<Text mt="8px" mb="8px">
Tripoto Forum
</Text>
<Text mt="8px" mb="8px">
Honeymoon Packages

</Text>
    
  </Box>

  <Box height='auto' textAlign={"left"} fontSize="12px" color="#333" fontFamily={"helvetica"} fontWeight={"300"} lineHeight="18px">

<Text fontSize="16px" color="#333" fontWeight={"500"} pb="4px" fontFamily={"helvetica"}>Important Travel Links
</Text>
<Text mt="8px" mb="8px">
Goa Tourism
</Text>
<Text mt="8px" mb="8px">
Dubai Tourism
</Text>
<Text mt="8px" mb="8px">
Singapore Tourism
</Text>
<Text mt="8px" mb="8px">
Kerala Tourism
</Text>
<Text mt="8px" mb="8px">
Manali Tourism
</Text>
<Text mt="8px" mb="8px">
Bali Tourism
</Text>
<Text mt="8px" mb="8px">
Sri Lanka Tourism
</Text>
<Text mt="8px" mb="8px">
Honeymoon Destinations In India
</Text>

  </Box>

  <Box height='auto' textAlign={"left"} fontSize="12px" color="#333" fontFamily={"helvetica"} fontWeight={"300"} lineHeight="18px">
<Text fontSize="16px" color="#333" fontWeight={"500"} pb="4px" fontFamily={"helvetica"}>
Partner Programs

</Text>
<Text mt="8px" mb="8px">Buy Travel Leads</Text>
<Text mt="8px" mb="8px">Partner With Us
</Text>
<Text mt="8px" mb="8px">
Earn Credits

</Text>
<Text mt="8px" mb="8px">
Get Paid To Travel

</Text>
<Text mt="8px" mb="8px">
Import Blog To Itinerar
</Text>

  </Box>
</SimpleGrid>

    </>

)

}

export default Footer