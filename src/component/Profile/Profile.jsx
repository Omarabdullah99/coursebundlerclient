import { Avatar, Button, Container, Heading, HStack, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, Stack, Text, useDisclosure, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {RiDeleteBin7Fill} from 'react-icons/ri'
import { fileUploadCss } from '../Auth/Register'

const Profile = ({user}) => {

    const removeFromPlaylistHandler=(id)=>{
        console.log("profile course delete id", id)
    }

    const users={
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
    const {isOpen,onClose,onOpen}=useDisclosure()
    const changeImageSubmitHandler=(e,image)=>{
       e.preventDefault()
       console.log("profile image", image)
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
    <Avatar boxSize={'48'} src={user.avatar.url} />
    <Button onClick={onOpen} colorScheme={'yellow'} variant={'ghost'}>Change phot</Button>
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
       user.subscription && user.subscription.status ==='active'?(
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
        user.playlist.length >= 0 && (
            <Stack
            direction={['column','row']}
            alignItems={'center'}
            flexWrap='wrap'
            p={'4'}
            >

            {user.playlist.map((element,index)=>(
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

    <ChangePhotoBox changeImageSubmitHandler={changeImageSubmitHandler} isOpen={isOpen} onClose={onClose} />
    </Container>
  )
}

export default Profile

function ChangePhotoBox({isOpen,onClose,changeImageSubmitHandler}){
    const [image,setImage]=useState("")
    const [imageprev,setImagePrev]=useState("")


    const changeImage=(e)=>{
        const file=e.target.files[0]
        const reader= new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend=()=>{
            setImagePrev(reader.result)
            setImage(file)
        }
      }
    const closeHandler=()=>{
        onClose()
        setImagePrev("")
        setImage("")
    }

    return (
        <Modal isOpen={isOpen} onClose={closeHandler} >
        <ModalOverlay backdropFilter={'blur(10px)'} />
        <ModalContent>
        <ModalCloseButton />

        <ModalBody>
        <Container>
        <form onSubmit={(e)=>changeImageSubmitHandler(e,image)}>
        <VStack spacing={'8'}>
       {imageprev &&  <Avatar src={imageprev} boxSize={'48'} />}
        <Input 
        type={'file'}
        css={{'&::file-selector-button':fileUploadCss}}
        onChange={changeImage}
        />
        <Button w={'full'} colorScheme={'yellow'} type="submit">
        Change Photo
        </Button>
        </VStack>
        </form>
        
        </Container>
        
        </ModalBody>

        <ModalFooter>
        <Button mr={'3'} onClick={closeHandler}>Cancel</Button>
        </ModalFooter>
        
        </ModalContent>
        </Modal>
    )
}