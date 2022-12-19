import { Link as NextPage, useNavigate } from "react-router-dom";
import {useState,useContext} from "react";
import { AuthContext } from "../Context/AuthContext";

import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  
import Signup from "./Signup"


function Login ()
{

  const navigate = useNavigate();

  const obj = {
    email:"",
    password:""
  }

  const {loginUser} = useContext(AuthContext);

const [formData,setFormData] = useState(obj)
const {email,password} = formData;

const handleChange = (e)=>{
  setFormData({...formData,[e.target.name]:e.target.value})
}

const handleSubmit = (event)=>{
  event.preventDefault();
  // loginUser(formData)
//   if(isAuth==true)
//   {
//     navigate("/")}
//   else
//   {
//     <Alert status='error'>
//   <AlertIcon />
//   <AlertTitle>Your browser is outdated!</AlertTitle>
//   <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>
// </Alert>
//   }

if(loginUser(formData)==true){
  setFormData(obj);
  navigate("/");
  
}
else if(loginUser(formData)==false){
  alert("wrong credentials");
  setFormData(obj);
}

}

    return (
      <>

<Box>

{/* <Box
  backgroundImage="url('https://cdn1.tripoto.com/media/transfer/img/1789711/Image/1656336375_offbeat_places_2_1.gif')"
/> */}

<Box
    
    backgroundRepeat="no-repeat"
    h="656px"
    objectFit={"cover"}
    >
      <Flex
          minH={'100vh'}
          align={'center'}
          justify={'center'}
          bg={useColorModeValue('gray.50', 'gray.800')}>
          <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
              <Heading fontSize={'4xl'}>Sign in to your account</Heading>
              <Text fontSize={'lg'} color={'gray.600'}>
                to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
              </Text>
            </Stack>

            <Box
              rounded={'lg'}
              bg={useColorModeValue('white', 'gray.700')}
              boxShadow={'lg'}
              p={8}>
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" name="email" value={email} onChange={handleChange}/>
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input type="password" name="password" value={password} onChange={handleChange} />
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    align={'start'}
                    justify={'space-between'}>
                    <Checkbox>Remember me</Checkbox>
                    <Link color={'blue.400'}>Forgot password?</Link>
                  </Stack>
                  <Button
                    bg={'blue.400'}
                    color={'white'}
                    _hover={{
                      bg: 'blue.500', 
                    }}
                    onClick={handleSubmit}>
                    Sign in
                  </Button>
                  
                  <Text>Don't have an account? <Link color={'blue.400'}><NextPage to="/Signup">Sign Up</NextPage></Link></Text>
        
                </Stack>
              </Stack>
            </Box>
          </Stack>
</Flex>
</Box>


</Box>

      
      
      </>
        
      );
}

export default Login;

    
