import tripTo from  "../TripTo.png"
import { useNavigate } from 'react-router-dom';
// import { useState } from "react";
// import SignIn from "./LandingPage/Signin";
import Login from "../Routes/Login"
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";

import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Image,
  } from '@chakra-ui/react';
  
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  
  export default function Navbar() {
    const { isOpen, onToggle,onOpen, onClose  } = useDisclosure();

    const {isAuth,username,logoutUser} = useContext(AuthContext);
    console.log(isAuth, username)
const navigate = useNavigate();
    
    return (
      <Box>
        <Flex
          bg={useColorModeValue('transparent', 'gray.800')}
          color={useColorModeValue('white', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          // borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>


          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopLogoNav />
            </Flex>
          </Flex>

          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'end' }}>
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
  
                          {/*  ****************    SignIn Btn  ****************       */}

<Stack
    flex={{ base: 1, md: 0 }}
    justify={'flex-end'}
    direction={'row'}
    spacing={6}>

{
isAuth==true?
<Text mt="8px" fw="500" fontSize={"14px"}>{username}</Text>:( <Button
          as={'a'}
          size="sm"
          fontSize={'md'}
          fontWeight={400}
          variant={'outline'}
          _hover={{bgColor:"transparent"}}
          cursor="pointer"
          // href={'#'}
          color={"white"}
          onClick={
            ()=>{
              navigate("/login");
            }
          }
          >
          Sign In
  </Button>)    
}

{
  isAuth==true?
   <Button
    as={'a'}
    size="sm"
    fontSize={'md'}
    fontWeight={400}
    variant={'outline'}
    // href={'#'}
    color={"white"}
    _hover={{bgColor:"transparent"}}
    cursor="pointer"
    onClick={
      ()=>{
        logoutUser();
      }
    }
    >
    Logout
</Button>:""
}

</Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
const DesktopLogoNav = () => {
  const navigate = useNavigate()
  return (
    <Stack direction={'row'} spacing={2}>
        <Image width={10} src={tripTo} alt="logo" cursor={"pointer"} onClick={
            ()=>{
              navigate("/");
            }
          }/>
        <Text fontSize='lg' fontWeight={500}>tripTo</Text>
    </Stack>

  )
}

  const DesktopNav = () => {
    const linkColor = useColorModeValue('white', 'gray.200');
    const linkHoverColor = useColorModeValue('white', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4}>
        
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  w={"200px"}
                  fontSize={"14px"}
                  lineHeight="20px"
                  color={"black"}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('blue.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'green.500' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={5} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };

  
  const NAV_ITEMS = [
    {
      label: 'Inspirations',
      children: [
        {
          label: 'Visit Singapore',
          href: '#',
        },
        {
          label: 'Beaches',
          href: '#',
        },
        {
            label: 'Mountains',
            href: '#',
          },
          {
            label: 'Heritage',
            href: '#',
          },
          {
            label: 'Weekend Guide',
            href: '#',
          },
          {
            label: 'Upcoming Festivals',
            href: '#',
          },
          {
            label: 'Honeymoon Packages',
            href: '#',
          },
          {
            label: 'Wildlife Tourism',
            href: '#',
          },
          {
            label: 'Road Trips',
            href: '#',
          },
          {
            label: 'Getaways Guide',
            href: '#',
          },
          {
            label: 'Luxury Travel',
            href: '#',
          },
          {
            label: 'Explore More',
            href: '#',
          },
      ],
    },
    {
      label: 'Forum',
      
    },
    {
      label: 'Packages',
      href: '#',
    },
    {
      label: 'Publish Trip',
      href: '#',
      children: [
        {
          label: 'Create New',
          href: '#',
        },
        {
          label: 'Upload Photos/Videos',
          href: '#',
        },
        {
            label: 'Import Blog',
            href: '#',
          },
      ],
    },
  ];


