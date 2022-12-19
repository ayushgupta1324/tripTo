import Navbar2 from "./Navbar2"
import { useContext,useEffect,useState,useRef } from "react";
import { useParams,useNavigate } from "react-router-dom";
// import { AuthContext } from "../Context/AuthContext";
import {Flex,Box, Card, CardBody,Image,Stack, Heading, CardFooter, Button,Text,Divider,FormControl,Input,
    Link,useColorModeValue,Select, useDisclosure,
} from "@chakra-ui/react"
import axios from "axios"

import {FaMapMarkerAlt} from "react-icons/fa"
import { MdVerified } from "react-icons/md";
import {BsFillTelephoneFill} from "react-icons/bs"

const PackagePage = () => 
{

    const [trip,setTrip] = useState({});
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = useRef(null)
    const {id} = useParams();

    const navigate = useNavigate();


    // const PaymentPageData=(form)=>{
    //     axios.post('https://zany-cyan-angelfish-tutu.cyclic.app/users', {
    //         ...form
    //        })
    //        .then(function (response) {
    //          console.log(response);
             
    //        })
    //        .catch(function (error) {
    //          console.log(error);
    //        });
       
    // }

const PaymentDetails={
    name:"",
    contact:"",
    departure:"",
    destination:"",
    roomType:"",
    email:"",
    people:""
}

const handleChage=()=>{

}

    useEffect(()=>{
        fetch(`https://zany-cyan-angelfish-tutu.cyclic.app/TripPackages/${id}`).then((res)=> res.json())
        .then((res)=> setTrip(res))
        .catch((err)=> console.log(err))
    },[id])

    console.log(id);
    console.log(trip)

    const {
        img2,
    alt,
    heading,
    place,
    duration,
    amount} = trip;

    return(
        <>
            <Navbar2/>
<Flex w="90%" m="auto">
<Box w="60%">
<Card w={"100%"} variant={"unstyled"} key={id} >
  <CardBody key={id}>
    <Image
      src={img2}
      alt={alt}
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading fontSize={"24px"} align={"left"} >{heading}</Heading>

      <Flex justifyContent={"space-between"}>
        <Box display={"flex"}>
        <Image
  borderRadius='full'
  boxSize='30px'
  src='https://cdn1.tripoto.com/media/filter/mss/img/2165009/UserPhoto/1628574904_tripoto_s_mindful_retreats.jpg'
  alt='Icon'
/>
<Flex align={"center"}><Text pl={"4px"} pr="4px">Tripoto's Mindful Retreats</Text><MdVerified color={"#2F9BDB"} fontSize="14px"/></Flex>
        </Box>
        <Box display={"flex"} alignItems="center" color="#f63">
        <BsFillTelephoneFill/>
<Text  pl="5px"  fontSize={"18px"} fontWeight="700">  08046162990</Text>
        </Box>
        

      </Flex>
      <Divider/>


      <Flex alignItems={"center"} justifyContent="space-between">
      <Text bg={"#359391"} color={"white"} w="110px" h="20px" pl="8px" pr="8px" pt="4px" pb="4px" fontSize={"12px"} fontWeight="400" alignItems={"center"}>{duration}</Text>
      <Box display={"flex"}>
      <Text fontSize="18px" fontWeight="700" color="#333" mr="8px">₹{amount}</Text> <Text fontSize={"14px"} fontWeight="400" opacity={"0.5"}>/person</Text> 
      </Box>
      
      
        
      </Flex>

      <Box>
<Flex justifyContent={"space-between"} h="50px">
<Flex align={"center"}>
      
</Flex>
<Box >
<Text align={"left"} fontSize={"16px"} fontWeight="700" opacity={"0.5"}>Location</Text>
<Text fontSize={"14px"} fontWeight="700" display={"flex"} alignItems="center" ><FaMapMarkerAlt/> <span style={{color:"#359391"}} >{place}</span> </Text>
</Box>

</Flex>

      </Box>

      
    </Stack>
  </CardBody>
  <CardFooter>
  
  </CardFooter>
    </Card>
</Box>
<Box w="40%">

<Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'16px'}>Enter your details and proceed to Book</Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                
                <Input type="email" placeholder="Email Address" onChange={handleChage}/>
              </FormControl>
              <FormControl id="Name">
                
                <Input type="text" placeholder="Full Name" onChange={handleChage}/>
              </FormControl>
              <FormControl id="Phone">
                <Input type="text" placeholder="Contact Number" onChange={handleChage}/>
              </FormControl>
              <Stack spacing={3}>
  <Select variant='filled' placeholder='Number of People' onChange={handleChage}>
  <option value='option1'>1</option>
  <option value='option2'>2</option>
  <option value='option3'>3</option>
  </Select>
</Stack>
<Stack spacing={3}>
  <Select variant='filled' placeholder='Children (6-9) year' onChange={handleChage}>
  <option value='option1'>1</option>
  <option value='option2'>2</option>
  <option value='option3'>3</option>
  </Select>
</Stack>
<Stack spacing={3}>
  <Select variant='filled' placeholder='Type of Room' onChange={handleChage}>
  <option value='Suite'>Suite</option>
  <option value='Standard Deluxe Room'>Standard Deluxe Room</option>
  </Select>
</Stack>
<FormControl id="date">
                <Input type="date" placeholder="Contact Number"/>
              </FormControl>
              
              <Stack spacing={10}>
  

 
      {/* <Box ref={finalRef} tabIndex={-1} aria-label='Focus moved to this box'>
      </Box>

      <Button mt={4} onClick={onOpen}>
        Proceed to Pay
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Pay
            </Button>
            
          </ModalFooter>
        </ModalContent>
      </Modal> */}
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',

                  }}
                  onClick={()=>{navigate("/PaymentPage")}}>
                  Proceed to Pay
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>

</Box>
</Flex>

        </>
    )
}

export default PackagePage;
  
      