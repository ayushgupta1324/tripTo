// import {
//     Box,
//     Center,
//     useColorModeValue,
//     Heading,
//     Text,
//     Stack,
//     Image,
//   } from '@chakra-ui/react';
  
 
  
  export default function ProductSimple({X}) {
   
    return (
    //   <Center py={12}>
    //     <Box
    //       role={'group'}
    //       p={6}
    //       maxW={'330px'}
    //       w={'full'}
    //       bg={useColorModeValue('white', 'gray.800')}
    //       boxShadow={'2xl'}
    //       rounded={'lg'}
    //       pos={'relative'}
    //       zIndex={1}>
    //       <Box
    //         rounded={'lg'}
    //         mt={-12}
    //         pos={'relative'}
    //         height={'230px'}
    //         _after={{
    //           transition: 'all .3s ease',
    //           content: '""',
    //           w: 'full',
    //           h: 'full',
    //           pos: 'absolute',
    //           top: 5,
    //           left: 0,
            
           
    //           zIndex: -1,
    //         }}
    //         _groupHover={{
    //           _after: {
    //             filter: 'blur(20px)',
    //           },
    //         }}>
    //         <Image
    //           rounded={'lg'}
    //           height={'100px'}
    //           width={"100%"}
    //           objectFit={'cover'}
    //           src={X}
    //         />
    //       </Box>
         
    //     </Box>
    //   </Center>

  <div style={{ height:"76.52px", width:"348.75px"}}>
    <img src={X} alt={"img"} style={{ height:"66.52px", width:"278.75px"}}/>
  </div>

    )
  }
 
