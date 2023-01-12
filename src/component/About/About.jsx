import React from 'react'
import { Avatar, Box, Button, Container, FormLabel, Heading, Input, Stack, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import introVideo from '../../assets/videos/intro.mp4'


const Founder =()=>(
    <Stack direction={['column','row']} spacing={['4','16']} padding={'8'}>
    <VStack>
    <Avatar 
    src='https://cdn-icons-png.flaticon.com/512/53/53104.png'
    boxSize={['40','48']}/>
    <Text children="Co-Founder" opacity={0.7} />
    </VStack>

    <VStack justifyContent={'center'} alignItems={['center','flex-start']}>
    <Heading children="Omar Abdullah" size={['md','xl']}/>
    <Text
    textAlign={['center','left']}
    children={`Hi, I am full-stack web developer and a teacher. 
    Our mission is to provide quality content as reasonable price`}
     />
    </VStack>
    
    </Stack>
)
const About = () => {
  return ( 
    <Container maxW={'container.lg'} padding='16' boxShadow={'lg'}>
    <Heading children='About us' textAlign={['center','left']} />
    <Founder />

    <Stack m='8' direction={['column','row']} alignItems="center">
    <Text fontFamily={'cursive'} m='8' textAlign={['center','left']}>
    we are a video streaming platform with some premium courses available
    only for premium users
    </Text>
    <Link to='/subscribe'>
    <Button variant={'ghost'} colorScheme="yellow">Checkout Our Plan</Button>
    </Link>
    </Stack>

    <div className="container2">
        <video
        autoPlay
          controls
          loop
          muted
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={introVideo}
        ></video>
      </div>
    </Container>
  )
}

export default About