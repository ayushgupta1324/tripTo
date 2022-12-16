import {Text,Card, CardBody, Image, Stack,Heading,SimpleGrid,Box} from "@chakra-ui/react"
import { Link } from "react-router-dom";


function Card3()
{

let content = [


    {
        src:`https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1666949651_1636600759_110.png`,
        alt:"Photo of These Thrilling",
        heading:"Resorts World Sentosa",
        text:"10 Best Places To Experience the Chills This Winter",
        name:"Kadambari Bhatte (curlytravelmess)"
    },
    {
        src:`https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1666949736_1635179153_pahalgam_gulmarg.jpeg`,
        alt:"Photo of Visit These 7 C",
        heading:"singapore tourism Board",
        text:"15 Winter Destinations, That are Not Shimla or Manali",
        name:"Karishma Shaikh"
    },
    {
        src:"https://static2.tripoto.com/media/filter/tst/img/1/SpotDocument/1478950878_1453102404_panamik_hot_geyser_springs_in_nubra_valley_ladakh.jpg",
        alt:"Photo of A Curated Guide",
        heading:"Resorts World Sentosa",
        text:"12 Hot Springs in India That Will Warm You Up This Winter",
        name:"Disha Kapkoti"
    },
    {
        src:"https://static2.tripoto.com/media/filter/tst/img/192200/TripDocument/1571216585_adrithcollage.jpg",
        alt:"Photo of Just 3 Hours Aw",
        heading:"Oman Tourism",
        text:"Trips to Take with Your Bae This Winter in India",
        name:"Mouna Nanaiah"
    },
    {
        src:`https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1666950604_1666207073_hornbill_festival_pix_by_vikramjit_kakati.jpg`,
        alt:"Photo of These Thrilling",
        heading:"Resorts World Sentosa",
        text:"Nagaland's Hornbill Festival is Happening this December",
        name:"Shruti Singh"
    },
    {
        src:`https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669621772_1479799117_19594481674_73bfdd5e4a_z.jpg`,
        alt:"Photo of Visit These 7 C",
        heading:"singapore tourism Board",
        text:"26 Best Places In India To Visit This December",
        name:"Pritha Puri"
    },
    {
        src:"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669615182_1669300591_snip20220609_1_1024x573.png",
        alt:"Photo of A Curated Guide",
        heading:"Resorts World Sentosa",
        text:"10 Events You Can't Miss This Winter in Delhi",
        name:"Tanisha Mundra"
    },
    {
        src:"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669632229_1635615472_picsart_10_30_11_07_24.jpg",
        alt:"Photo of Just 3 Hours Aw",
        heading:"Oman Tourism",
        text:"10 Events You Can't Miss This Winter in Delhi",
        name:"Srishti (still.winds)"
    },
]



    return (
        <>
        <Box w={"90%"} m={"auto"}>
        <Text textAlign={"left"} mt={"36px"} fontWeight={"700"} fontSize={"28px"} lineHeight={"31px"} color={"#333333"}>
        Find Best Places to Visit in India in December & January
        </Text>

<SimpleGrid columns={[2, null, 4]} spacing="4">
{
    content.map((el)=>
    (
    <Card maxW='xs' variant={"unstyled"}>
    <CardBody p={"10px"} border={"none"}>
      <Image
        src={el.src}
        alt={el.alt}
        borderRadius='lg'
        h={"173px"}
        w={"260px"}
      />
      <Stack mt='6' spacing='3'>
        <Text align={'left'} fontWeight={"700"} fontSize={"18px"}
lineHeight={"26px"} color={"#333333"}  >
          {el.text}
        </Text>

        <Text align={'left'}>By <Link to="/"><span style={{color:"teal"}}>{el.name}</span></Link> 
        </Text>
      </Stack>
    </CardBody>
  </Card>
  )
  )
}



</SimpleGrid>


        </Box>
        


        </>
    )

}

export default Card3;