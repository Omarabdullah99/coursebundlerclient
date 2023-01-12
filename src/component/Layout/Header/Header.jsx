import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import { RiDashboardFill, RiLogoutBoxFill, RiMenu5Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isAuthenticated=false;
  const user={

    role:'admin'
  }

  const logoutHandler=()=>{
    console.log('logout')
    onClose()
  }
  return (
    <>
      <ColorModeSwitcher />

      <Button
        onClick={onOpen}
        colorScheme={'yellow'}
        width="12"
        height={'12'}
        rounded="full"
        position={'fixed'}
        top={'6'}
        left={'6'}
      >
        <RiMenu5Fill />
      </Button>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay backdropFilter={'blur(5px)'} />
        <DrawerContent>
          <DrawerHeader borderBottom={'1px'}>COURSE BUNDLER</DrawerHeader>
          <DrawerBody>
            <VStack spacing={'2'} alignItems='flex-start'>
            <Link onClick={onClose } to="/"><Button variant={'ghost'}>Home</Button></Link>
            <Link onClick={onClose } to="/courses"><Button variant={'ghost'}>Browse All Courses</Button></Link>
            <Link onClick={onClose } to="/request"><Button variant={'ghost'}>Request a Course</Button></Link>
            <Link onClick={onClose } to="/contact"><Button variant={'ghost'}>Contact</Button></Link>
            <Link onClick={onClose } to="/about"><Button variant={'ghost'}>About</Button></Link>

            <HStack justifyContent={'space-evenly'}
            position={'absolute'}
            bottom={'2rem'}
            width="80%"
            >
            {isAuthenticated ? (<>
             <VStack>
             <HStack>
             <Link onClick={onClose } to="/profile"> <Button colorScheme={"yellow"}>profile</Button></Link>
             <Button onClick={logoutHandler}><RiLogoutBoxFill/> Logout</Button>
             </HStack>
             {user && user.role === 'admin' && (
               <Link onClick={onClose } to="/admin/dashboard">
               <Button colorScheme={"purple"} variant="ghost"><RiDashboardFill />Dashboard</Button>
               </Link>
             )}
             
             </VStack>
              
              
              </>) :(<>
              
              <Link onClick={onClose } to="/login"> <Button colorScheme={"yellow"}>Login</Button></Link>
              <p>or</p>
              <Link onClick={onClose } to="/register"> <Button colorScheme={"yellow"}>Signup</Button></Link>
              </>)}
            
            </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
