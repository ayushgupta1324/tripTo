import { 
    Flex,
    Image,
    Stack,
    Card, 
    CardBody,
     Grid,
     Text,
     Box,
     Spacer,
     HStack,
     column,
     TableCaption
} from "@chakra-ui/react"
  // export default function ProductSimple() {
    import ProductSimple from "./card";

const FirstCard = () => {
let content=[
  {
  
   src:'https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192329_aa.png',
        alt:'Green double couch with wooden legs'},
  {
  src:'https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192307_cc.png',
        alt:'Green double couch with wooden legs'},
  
  
  {
  src:'https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192273_bb.png',
        alt:'Green double couch with wooden legs'},{
  src:'https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192344_dd.png',
        alt:'Green double couch with wooden legs'
  }
  
  ]
return (
    <>

    
{/*<Stack direction='row'>*/}

{/* <Card maxW='sm'>
  <CardBody>
    <Image
      src='https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192329_aa.png'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
  </CardBody>

  <CardBody>
    <Image
      src='https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192307_cc.png'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
  </CardBody>

  <CardBody>
    <Image
      src='https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192273_bb.png'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
  </CardBody>

  <CardBody>
    <Image
      src='https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192344_dd.png'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
  </CardBody>
</Card> */}

{/*</Stack>*/}
<Flex w="90%" flexDirection='row' m="auto" alignItems="center" justifyContent="space-around" mt="24px">
  
  {content.map((el)=>(<ProductSimple X={el.src} />))}
</Flex>

    </>
)
}

export default FirstCard;
