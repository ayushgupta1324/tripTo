import {Box,Flex,Text,Image} from "@chakra-ui/react"
import Navbar2 from "./Navbar2";
import { useParams } from "react-router-dom";

const PaymentPage = ()=>
{

    // const getDetails = () =>
    // {

    // }

return(
    <>

    <Navbar2/>

    {/* <Box w="90%" m="auto" mt="56px">
    <Flex direction="row">

<Box>

<Box>

<Box>
    <Text>Full Name</Text>
    <Text></Text>
</Box>
<Box>
    <Text>Contact</Text>
    <Text></Text>
</Box>
<Box>
    <Text>Departure City</Text>
    <Text></Text>
</Box>
<Box>
    <Text>Check-Out Date</Text>
    <Text></Text>
</Box>
<Box>
    <Text>Room Type</Text>
    <Text></Text>
</Box>
</Box>
<Box></Box>

</Box>
<Box>

<Box>

<Box>
    <Text>Email</Text>
    <Text></Text>
</Box>
<Box>
    <Text>Destination</Text>
    <Text></Text>
</Box>
<Box>
    <Text>Check-In Date
</Text>
    <Text></Text>
</Box>
<Box>
    <Text>Duration</Text>
    <Text></Text>
</Box>
<Box>
    <Text>Number of People
</Text>
    <Text></Text>
</Box>
</Box>
<Box></Box>

</Box>
</Flex>

<Box>
    <Text>
        Price Details
    </Text>
</Box>


    </Box>
     */}
     <Box display={"flex"} alignItems="center" w="90%" m="auto" h="500px">
     <Image  src="https://crfitnessdotnet.files.wordpress.com/2015/09/work-in-progress.png" alt="WIP"/>

     </Box>

    </>
)

}

export default PaymentPage;