import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import vg from '../../assets/images/bg.png';
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import { DiAws } from 'react-icons/di';
import introvideo from '../../assets/videos/intro.mp4';
const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height="100vh"
          justifyContent={['center', 'space-between']}
          alignItems="center"
          spacing={['16', '56']}
        >
          <VStack width={'full'} alignItems={['center', 'flex-end']} spacing={'8'}>
            <Heading children="LEARN FROM THE EXPRESS" />
            <Text textAlign={['center','left']} children={'Find Valueable Content At Resonable Price'} />
            <Link>
              <Button size={'lg'} colorScheme="yellow">
                Explore Now
              </Button>
            </Link>
          </VStack>

          <Image
            className="vector-graphics"
            boxSize={'md'}
            src={vg}
            objectFit={'contain'}
          />
        </Stack>
      </div>

      <Box padding={'8'} bg="blackAlpha.800">
        <Heading
          textAlign={'center'}
          color={'yellow.400'}
          fontFamily={'body'}
          children="OUR BRANDS"
        />
        <HStack
          className="brandsBanner"
          justifyContent={'space-evenly'}
          marginTop="4"
        >
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdemy />
          <DiAws />
        </HStack>
      </Box>

      <div className="container2">
        <video
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={introvideo}
        ></video>
      </div>
    </section>
  );
};

export default Home;
