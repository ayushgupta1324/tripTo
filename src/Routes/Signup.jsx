import { Link as NextPage } from "react-router-dom";


import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';

  import { useState,useContext } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import { AuthContext } from "../Context/AuthContext";
  import { useNavigate } from "react-router-dom";

function Signup()
{
    const [showPassword, setShowPassword] = useState(false);
    
    const {SignUpData} = useContext(AuthContext);
    const navigate = useNavigate();

    const obj={
      firstname:"",
      lastname:"",
      email:"",
      password:""
     }
  const [formData,setFormData] = useState(obj)
  const {firstname,lastname,email,password} = formData;

  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
      }

    function handleSubmit(event) {
        event.preventDefault();
        if(formData.email=="" && formData.password=="" && formData.firstname=="" && formData.lastname==""){
          alert("Fill in all the Details");
          return;
      }
      else if(password.length<8){
          alert("Password is too short");
          setFormData(obj);
          return;
      }
        
        setFormData(obj);
        SignUpData(formData)
        navigate("/Login");
  
      }

    return (
        <>
        <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" name="firstname" value={firstname} onChange={handleChange}/>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" name="lastname" value={lastname} onChange={handleChange} />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" name="email" value={email} onChange={handleChange}/>
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'}  name="password" value={password} onChange={handleChange} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  onClick={handleSubmit}
                  >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link color={'blue.400'}><NextPage to="/Login">Login</NextPage> </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
        </>
      
    );
}

export default Signup;