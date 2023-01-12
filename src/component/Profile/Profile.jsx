import { Avatar, Button, Container, Heading, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import {RiDeleteBin7Fill} from 'react-icons/ri'

const Profile = () => {

    const removeFromPlaylistHandler=(id)=>{
        console.log("profile course delete id", id)
    }

    const user={
        name:"Omar Abdullah",
        email:'omarabdullah917303@gmail.com',
        createdAt:String(new Date().toISOString()),
        role:'user',
        subscription:{
            status:'active'
        },
        playllist:[
            {
                course:'sadasd',
                poster:'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y291cnNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
            }
        ]
    }
  return (
    <Container minH={'95vh'} maxW='container.lg' py={'8'}>
    <Heading children="Profile" m={'8'} textTransform={'uppercase'} />
    
    <Stack
    justifyContent={'flex-start'}
    direction={['column','row']}
    alignItems={'center'}
    padding='8'    
    >
    <VStack>
    <Avatar boxSize={'48'} />
    <Button colorScheme={'yellow'} variant={'ghost'}>Change phot</Button>
    </VStack>

    <VStack spacing={'4'} alignItems={['center','flex-start']}>
    <HStack>
    <Text children="Name" fontWeight={'bold'} />
    <Text children={user.name} />
    </HStack>

    <HStack>
    <Text children="email" fontWeight={'bold'} />
    <Text children={user.email} />
    </HStack>

    <HStack>
    <Text children="CreatedAt" fontWeight={'bold'} />
    <Text children={user.createdAt.split("T")[0]} />
    </HStack>

    {user.role !=='admin' &&(  <HStack>
    <Text children="Subscription" fontWeight={'bold'} />

    {
        user.subscription.status ==='active'?(
          <Button color={'yellow.500'} variant={'unstyled'}>Cancel Subscription</Button>
        ):(
          <Link to='/subscribe'><Button colorScheme={'yellow'}>Subscribe</Button> </Link>
        )
      }
    </HStack>
    )}

    <Stack direction={['column','row']} alignItems={'center'}>
    <Link to='/updateprofile'>
    <Button>Update Profile</Button>
    </Link>
    <Link to='/changepassword'>
    <Button>Change Password</Button>
    </Link>  
    </Stack>

    </VStack> 
    </Stack>

    <Heading children='Playlist' size={'md'} my='8' />
    {
        user.playllist.length > 0 && (
            <Stack
            direction={['column','row']}
            alignItems={'center'}
            flexWrap='wrap'
            p={'4'}
            >

            {user.playllist.map((element,index)=>(
                <VStack w={'48'} m='2' key={element.course}>
                <Image 
                boxSize={'full'}
                objectFit='contain'
                src={element.poster}
                />

                <HStack>
                <Link to={`/course/${element.course}`}>
                <Button variant={'ghost'} colorScheme={'yellow'}>Watch Now</Button>
                </Link>

                <Button onClick={()=>removeFromPlaylistHandler(element.course)}>
                <RiDeleteBin7Fill /> 
                </Button>

                </HStack>

                </VStack>
            ))}
            
            </Stack>
        )
    }
    </Container>
  )
}

export default Profile