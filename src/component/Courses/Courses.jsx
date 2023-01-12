import { Button, Container, Heading, HStack, Image, Input, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Course=({views,title,imageSrc,id, addToPlaylistHandler,creator, description, lectureCount})=>{
    return(
        <VStack className='course' alignItems={['center','flex-start']}>
        <Image src={'https://img.freepik.com/free-vector/cute-astronaut-dance-cartoon-vector-icon-illustration-technology-science-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3851.jpg?w=2000'} boxSize='60' objectFit={'contain'} />
        <Heading textAlign={['center','left']} 
        maxW='200px'
        size={'sm'}
        fontFamily={'sans-serif'}
        noOfLines={3}
        children={title}
        />
        <Text noOfLines={2} children={description} />

        <HStack>
        <Text 
        fontWeight={'bold'}
        textTransform='uppercase'
        children={'Creator'}
        />
        <Text 
        fontFamily={'body'}
        textTransform='uppercase'
        children={creator}
        />
        </HStack>

        <Heading
        textAlign={'center'}
        size='xs'
        children={`Leactures - ${lectureCount}`}
        textTransform="uppercase"
        />

        <Heading
        size='xs'
        children={`Views - ${views}`}
        textTransform="uppercase"
        />

        <Stack direction={['column','row']} alignItems="center">
        <Link to={`/course/${id}`}>
        <Button colorScheme={'yellow'}>Watch Now</Button>
        </Link>

        <Button variant={'ghost'}
        colorScheme="yellow"
        onClick={()=>addToPlaylistHandler(id)}
        >
        Add to playlist
        </Button>
        </Stack>

        
        </VStack>

    )


}

const Courses = () => {
  const [keyword, setKeyword] = useState('');
  const [categoy, setCategory] = useState('');

  const addToPlaylistHandler=()=>{
    console.log("add to playlist")

  }
  const categories = [
    'Web development',
    'Artificial Intellegence',
    'Data Structure & Algorithm',
    'App Development',
    'Data Science',
    'Game Developnemt',
  ];
  return (
    <Container minH={'95vh'} maxW="container.lg" paddingY={'8'}>
      <Heading children="All Courses" m={'8'} />

      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Search a course..."
        type={'text'}
        focusBorderColor="yellow.500"
      />

      <HStack overflowX={'auto'} paddingY="8"  >
      
      {
        categories.map((item,index)=>(
            <Button key={index} onClick={()=>setCategory(item)} minW={'60'}>
            <Text children={item} />
            </Button>
        ))
      }
      </HStack>

      <Stack
       direction={['column','row']}
       flexWrap="wrap"
       justifyContent={['flex-start', 'space-evenly']}
       alignItems={['center','flex-start']}
       >
       <Course
       title={"Sampel"}
       description={'sample'}
       views={23}
       imageSrc={'sample'}
       id={'sampel'}
       creator={'sample boy'}
       lectureCount={2}
       addToPlaylistHandler={addToPlaylistHandler}

       
       />
      
      </Stack>

    </Container>
  );
};

export default Courses;
