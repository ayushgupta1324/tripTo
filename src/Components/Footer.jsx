import {Divider,SimpleGrid,Box,Text,Stack,Image,Flex} from "@chakra-ui/react"
import tripTo from  "../TripTo.png"
import {ImFacebook2} from "react-icons/im"
import {FaTwitterSquare} from "react-icons/fa"
import {BsInstagram,BsYoutube,BsPinterest,BsRssFill } from "react-icons/bs"



function Footer()
{

//     footerText=[

// {},{},{},{}

return(
    



    <>
   
    <Divider/>
    

<SimpleGrid columns={[2, null, 5]} spacing='40px' w="90%" m="auto"  mt="30px">

<Box height='80px'>
<Stack direction={'row'} spacing={2}>
        <Image width={10} src={tripTo} alt="logo"/>
        <Text fontSize='lg' fontWeight={500}>tripTo</Text>
    </Stack>
    <Text>India's Largest Travel Community</Text>
    <Flex justifyContent={"space-around"}><ImFacebook2/> <FaTwitterSquare/> <BsInstagram/> <BsYoutube/> <BsPinterest/> <BsRssFill/> </Flex>
    <Image src="https://cdn1.tripoto.com/assets/2.9/img/logo/download-android-app.svg"/>
</Box>

  <Box height='80px'>

<Text>About Tripoto
</Text>
<Text>How It Works
</Text>
<Text>
FAQ’s
</Text>
<Text>
Privacy Policy
</Text>
<Text>
    Terms & Conditions
</Text>
<Text>
Careers
</Text>
<Text>Contact Us
</Text>

  </Box>
  <Box height='80px'>

<Text>
Products

</Text>
<Text>
Tour Packages

</Text>
<Text>
Travel Guides
</Text>
<Text>
Trips & Itineraries
</Text>
<Text>
Weekend Getaways
</Text>
<Text>
Places to Visit
</Text>
<Text>
Other Travel Categories
</Text>
<Text>
Tripoto Forum
</Text>
<Text>
Honeymoon Packages

</Text>
    
  </Box>
  <Box height='80px'>

<Text>Important Travel Links
</Text>
<Text>
Goa Tourism
</Text>
<Text>
Dubai Tourism
</Text>
<Text>
Singapore Tourism
</Text>
<Text>
Kerala Tourism
</Text>
<Text>
Manali Tourism
</Text>
<Text>
Bali Tourism
</Text>
<Text>
Sri Lanka Tourism
</Text>
<Text>
Honeymoon Destinations In India
</Text>

  </Box>
  <Box height='80px'>
<Text>
Partner Programs

</Text>
<Text>Buy Travel Leads
y</Text>
<Text>Partner With Us
</Text>
<Text>
Earn Credits

</Text>
<Text>
Get Paid To Travel

</Text>
<Text>
Import Blog To Itinerar
</Text>

  </Box>
</SimpleGrid>

    </>

)

}

export default Footer