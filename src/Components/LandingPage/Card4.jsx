import {Text,Card, CardBody, Image, Stack,Heading,SimpleGrid,Box} from "@chakra-ui/react"
import { Link } from "react-router-dom";


function Card4()
{

let content = [


    {
        src:`https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669368370_1650865492_nature_photographer_29ezcwtmtnm_unsplash.jpg`,
        alt:"Photo of These Thrilling",
        heading:"Resorts World Sentosa",
        text:"Best Places To Visit In Kerala During Your Next Trip",
       
    },
    {
        src:`https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669368402_1656747258_dream_holidays_c8mz8fp_zvc_unsplash.jpg`,
        alt:"Photo of Visit These 7 C",
        heading:"singapore tourism Board",
        text:"Complete Guide To Kovalam Beach In Kerala",
        
    },
    {
        src:"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669368422_1650645286.jpeg",
        alt:"Photo of A Curated Guide",
        heading:"Resorts World Sentosa",
        text:"Top 10 Resorts in Munnar for Your Next Holiday",
       
    },
    {
        src:"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669368429_1669359075_screenshot_2022_11_25_at_12_18_09_pm.png",
        alt:"Photo of Just 3 Hours Aw",
        heading:"Oman Tourism",
        text:"Save the Date: 5th Edition of Kochi Muziris-Biennale",
        
    },
    {
        src:`https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669368461_1651231875_screenshot_2022_04_29_at_5_01_06_pm.png`,
        alt:"Photo of These Thrilling",
        heading:"Resorts World Sentosa",
        text:"Around Kerala in 15 Dishes! Must Eat Food When in Kerala.",
       
    },
    {
        src:`https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669368469_1562007949_suna_hai_uske_labon_se_gulab_jalte_hai5_62.png`,
        alt:"Photo of Visit These 7 C",
        heading:"singapore tourism Board",
        text:"7 Temple Festivals in Kerala That You Must Attend",
       
    },
    {
        src:"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669368483_1510408558_cruise1.jpg",
        alt:"Photo of A Curated Guide",
        heading:"Resorts World Sentosa",
        text:"This Luxury Cruise In Kerala For Your Next Family Vacay",
       
    },
    {
        src:"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669369517_1592307582_1592307581400.jpg",
        alt:"Photo of Just 3 Hours Aw",
        heading:"Oman Tourism",
        text:"Scenes of a Kathakali performance I witnessed ",
       
    },
    {
        src:`https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669369530_1487525352_backwater_2032737_1280.jpg`,
        alt:"Photo of These Thrilling",
        heading:"Resorts World Sentosa",
        text:"Planning A 6-Day Budget Trip To Kerala ",
        
    },
    {
        src:`https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669369542_1639536937_adobestock_198014696_scaled.jpeg`,
        alt:"Photo of Visit These 7 C",
        heading:"singapore tourism Board",
        text:"Spend A Night At India's Greenest Tree Hotel In Kerala",
       
    },
    {
        src:"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669369572_1656771413_arnold_antoo_yp6fohzfdvs_unsplash.jpg",
        alt:"Photo of A Curated Guide",
        heading:"Resorts World Sentosa",
        text:"25 Places In Wayanad For Your Hilly Vacation",
        
    },
    {
        src:"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669369584_1668695824_abhishek_prasad_n3vzlebhovk_unsplash.jpg",
        alt:"Photo of Just 3 Hours Aw",
        heading:"Oman Tourism",
        text:"These Luxury Properties in Kerala For Your Honeymoon",
       
    },
]



    return (
        <>
        <Box w={"90%"} m={"auto"}>
            <Box w={"100%"}> 
            <Image w="98%" src="https://cdn1.tripoto.com/media/filter/nxxl/img/2215463/Image/1669366871_kerala.jpg" borderRadius="md" mt={"24px"}/>

            </Box>

<SimpleGrid columns={[2, null, 4]} spacing="4" mt={"24px"}>
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

export default Card4;