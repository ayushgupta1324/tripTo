import {SimpleGrid, Box,
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    CardFooter,
    ButtonGroup,
    Button,
    Text,
    Divider,
Flex} from "@chakra-ui/react"

    import {FaMapMarkerAlt} from "react-icons/fa"
    import { MdVerified } from "react-icons/md";
function Card4()
{

let content = [

    {
        src:`https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1654504108_ce_c1.jpg`,
        alt:"Photo of Visit These 7 C",
        heading:"Trek to Triund & Experience Royalty as You Stay at a Maharaja’s Home | Clouds End Villa, Dharamshala",
        place:"Dharamshala",
        duration:"4D · 3N",
        amount:"13,750",

    },
    {
        src:"https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1657734830_image_cover_a.jpg",
        alt:"Photo of Go on a Thrilling Night-walk to Lambi Dehar as You Stay in a Cabin in the Woods | Seegreen Lodges ",
        heading:"Go on a Thrilling Night-walk to Lambi Dehar as You Stay in a Cabin in the Woods | Seegreen Lodges ",
        place:"Mussoorie",
        duration:"3D · 2N",
        amount:"7,500",
    },
    {
        src:"https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1657204838_omya_img_cover_b.jpg",       alt:"Photo of Paraglide Over The Dhauladar Mountains on this  Luxury Glamping Retreat | Omya Forest Camps, Bir ",
        heading:"Paraglide Over The Dhauladar Mountains on this  Luxury Glamping Retreat | Omya Forest Camps, Bir ",
        place:"Bir",
        duration:"3D · 2N",
        amount:"10,770",
    },

]

    return (
        <>




    <SimpleGrid columns={[2, null, 3]} spacing='40px'>
{
content.map((el)=>(
    <Card maxW='sm'>
  <CardBody>
    <Image
      src={el.src}
      alt={el.alt}
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='sm' align={"left"} >{el.heading}</Heading>
      <Flex alignItems={"center"} justifyContent="space-between">
      <Text display={"flex"} alignItems="center" ><FaMapMarkerAlt/> <span style={{color:"teal"}} >{el.place}</span> </Text>
        <Text bg={"#359391"} color={"white"} borderRadius={"30px"} pl="8px" pr="8px" pt="4px" pb="4px" >{el.duration}</Text>
      </Flex>

      <Box>
<Flex>
<Text color='blue.600' fontSize='2xl'>
      ₹{el.amount}/person
      </Text>
      <Button colorScheme='teal' variant='outline'>
    Button
  </Button>
</Flex>

      </Box>

      
    </Stack>
  </CardBody>
  <CardFooter>
  <Flex>
      <Image
  borderRadius='full'
  boxSize='30px'
  src='https://cdn1.tripoto.com/media/filter/mss/img/2165009/UserPhoto/1628574904_tripoto_s_mindful_retreats.jpg'
  alt='Icon'
/>
<Flex align={"center"}><Text pl={"4px"} pr="4px">Tripoto's Mindful Retreats</Text><MdVerified color={"#2F9BDB"}/></Flex>

      </Flex>
  </CardFooter>
    </Card>
))
}



            </SimpleGrid>
        </>
    )
}

export default Card4;
