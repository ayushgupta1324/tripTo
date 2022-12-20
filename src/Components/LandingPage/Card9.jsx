import {Text,Card, CardBody, Image, Stack,SimpleGrid,Box,Divider} from "@chakra-ui/react"
import { Link } from "react-router-dom";


function Card9()
{



    let content1 = [


        {
            src:`https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1670220316_1st_cards_1.jpg`,
            alt:"Photo of These Thrilling",
        },
        {
            src:`https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1670220256_19.jpg`,
            alt:"Photo of Visit These 7 C",
        },
        {
            src:"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1670220280_18.jpg",
            alt:"Photo of A Curated Guide",
        },
        {
            src:"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1670220306_17.jpg",
            alt:"Photo of Just 3 Hours Aw",
        },
        {
            src:`https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1667311974_2nd_card.jpg`,
            alt:"Photo of These Thrilling",
        },
    ]

    let content2 = [


        {
            src:`https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669205399_germany.jpeg`,
            alt:"Photo of These Thrilling",
        },
        {
            src:`https://cdn1.tripoto.com/media/filter/tst/img/1339961/Image/1613732480_4_4.jpg`,
            alt:"Photo of Visit These 7 C",
        },
        {
            src:"https://cdn1.tripoto.com/media/filter/tst/img/1756031/Image/1599216481_rajasthan.jpg",
            alt:"Photo of A Curated Guide",
        },
        {
            src:"https://cdn1.tripoto.com/media/filter/tst/img/1756031/Image/1599216560_kerala.jpg",
            alt:"Photo of Just 3 Hours Aw",
        },
    ]

    let content3=[


        {
            src:`https://image.mux.com/65Mxwlku9ue7VTvDW8F72z1U5VIOiEaz/thumbnail.jpg?width=600&height=600&time=2.0`,
            alt:"Photo of These Thrilling",
            heading:"Resorts World Sentosa",
            text:"10 Best Places To Experience the Chills This Winter",
            name:"Kadambari Bhatte (curlytravelmess)"
        },
        {
            src:`https://cdn1.tripoto.com/media/filter/tst/gen/1789711/Image/1634027797_thumbnail.jpg`,
            alt:"Photo of Visit These 7 C",
            heading:"singapore tourism Board",
            text:"15 Winter Destinations, That are Not Shimla or Manali",
            name:"Karishma Shaikh"
        },
        {
            src:"https://image.mux.com/iFVXAVPcgtz02Zcmt2ExiBVFZbYw7iMhN/thumbnail.jpg?width=600&height=600&time=3.01",
            alt:"Photo of A Curated Guide",
            heading:"Resorts World Sentosa",
            text:"12 Hot Springs in India That Will Warm You Up This Winter",
            name:"Disha Kapkoti"
        },
        {
            src:"https://image.mux.com/VZNhkabs2mLwRfjO6j600Q7OmfLxm5VmV/thumbnail.jpg?width=600&height=600&time=2.0",
            alt:"Photo of Just 3 Hours Aw",
            heading:"Oman Tourism",
            text:"Trips to Take with Your Bae This Winter in India",
            name:"Mouna Nanaiah"
        },
    ]

    // let content4 = [


    //   {
    //       src:`https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669368370_1650865492_nature_photographer_29ezcwtmtnm_unsplash.jpg`,
    //       alt:"Photo of These Thrilling",
    //       heading:"Resorts World Sentosa",
    //       text:"Best Places To Visit In Kerala During Your Next Trip",
        
    //   },
    //   {
    //       src:`https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669368402_1656747258_dream_holidays_c8mz8fp_zvc_unsplash.jpg`,
    //       alt:"Photo of Visit These 7 C",
    //       heading:"singapore tourism Board",
    //       text:"Complete Guide To Kovalam Beach In Kerala",
          
    //   },
    //   {
    //       src:"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669368422_1650645286.jpeg",
    //       alt:"Photo of A Curated Guide",
    //       heading:"Resorts World Sentosa",
    //       text:"Top 10 Resorts in Munnar for Your Next Holiday",
        
    //   },
    //   {
    //       src:"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1669368429_1669359075_screenshot_2022_11_25_at_12_18_09_pm.png",
    //       alt:"Photo of Just 3 Hours Aw",
    //       heading:"Oman Tourism",
    //       text:"Save the Date: 5th Edition of Kochi Muziris-Biennale",
          
    //   },]

    return (
        <>
  <Box w={"90%"} m={"auto"}>

      <Box w={"100%"}> 
            <Image w="98%" src="https://cdn1.tripoto.com/media/transfer/img/1789711/Image/1656336375_offbeat_places_2_1.gif" borderRadius="md" mt={"24px"}/>

      </Box>

        <Text textAlign={"left"} mt={"36px"} fontWeight={"700"} fontSize={"28px"} lineHeight={"31px"} color={"#333333"}>
        In the Spotlight: Tripoto Creators of the Month - November 2022
        </Text>

        <Text align="left" fontSize={"16px"} fontWeight="400" lineHeight={"29px"}>
        Tripoto Family is a community of travel content creators who create stunning photo blogs, engaging reels and videos as well as informative articles. Here are the most promising creators of the month who shared their favorite Winter Experiences with us. Kudos to Tripoto's best creators for Nov 2022!
        </Text>

        <SimpleGrid columns={[2, null, 5]} spacing="4">
        {
            content1.map((el)=>
            (
            <Card maxW='xs' variant={"unstyled"}>
            <CardBody p={"10px"} border={"none"}>
              <Image
                src={el.src}
                alt={el.alt}
                borderRadius='lg'
                h={"255px"}
                w={"201px"}
              />
            </CardBody>
          </Card>
          )
          )
        }
        </SimpleGrid>

  </Box>
        
  <Box w={"90%"} m={"auto"}>

        <Text textAlign={"left"} mt={"36px"} fontWeight={"700"} fontSize={"28px"} lineHeight={"31px"} color={"#333333"}>
        Plan Your Next Trip Using Tripoto's Complete Destination Guides
        </Text>
      <SimpleGrid columns={[2, null, 4]} spacing="4">
      {
          content2.map((el)=>
          (
          <Card maxW='xs' variant={"unstyled"}>
          <CardBody p={"10px"} border={"none"}>
            <Image
              src={el.src}
              alt={el.alt}
              borderRadius='lg'
              h={"320px"}
              w={"259px"}
            />
          </CardBody>
        </Card>
        )
        )
      }



      </SimpleGrid>

  </Box>

<Box w={"90%"} m={"auto"} >

        <Text textAlign={"left"} mt={"36px"} fontWeight={"700"} fontSize={"28px"} lineHeight={"31px"} color={"#333333"}>
        Watch Tripoto's Top Travel Vlogs of the Week
        </Text>

      <SimpleGrid columns={[2, null, 4]} spacing="4">
      {
          content3.map((el)=>
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

export default Card9;

