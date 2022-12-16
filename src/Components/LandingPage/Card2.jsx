import {Text,Card, CardBody, Image, Stack,Heading,SimpleGrid,Box} from "@chakra-ui/react"


function Card2()
{

let content = [


    {
        src:`https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1670839402_2020_rws_acw_kv3_sharktank_4355_lr.jpg`,
        alt:"Photo of These Thrilling",
        heading:"Resorts World Sentosa",
        text:"These Thrilling Experiences in Resorts World™ Sentosa Will Have You Booking a Trip to Singapore"
    },
    {
        src:`https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1653562686_275721311_336154091889496_2451172917242741439_n.jpg`,
        alt:"Photo of Visit These 7 C",
        heading:"singapore tourism Board",
        text:"Visit These 7 Chic Bars in Singapore if You’re in the Mood to Live up the Night!"
    },
    {
        src:"https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1670586190_image_20221209_165038_253_1.jpg",
        alt:"Photo of A Curated Guide",
        heading:"Resorts World Sentosa",
        text:"A Curated Guide to the Incredible Attractions of Resorts World Sentosa, Singapore"
    },
    {
        src:"https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1671021501_activity_scuba_diving_in_oman_1.jpg",
        alt:"Photo of Just 3 Hours Aw",
        heading:"Oman Tourism",
        text:"Just 3 Hours Away, Oman Is the Trending International Destination Every Indian Must Visit!"
    },
    
]



    return (
        <>
        <Box w={"90%"} m={"auto"}>
        <Text textAlign={"left"} mt={"36px"} fontWeight={"700"} fontSize={"28px"}
lineHeight={"31px"} color={"#333333"}>
        In the Spotlight: Partnerships
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
        <Heading align={'left'} size='md' textTransform={"uppercase"} fontSize={"sm"} color={"#FF6633"}>{el.heading} </Heading>
        <Text align={'left'} fontWeight={"700"} fontSize={"18px"}
lineHeight={"26px"} color={"#333333"}  >
          {el.text}
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

export default Card2;