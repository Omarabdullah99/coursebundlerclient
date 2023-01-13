
import React from 'react'
import { useState } from 'react'
import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'


const UpdateProfile = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
  return (
    <Container py='16' minH={'90vh'}>
    <form>
    <Heading 
    children="Update Profile" 
    textTransform={'uppercase'}  
    textAlign={['center', 'left']}
    my="16"
    />

    <VStack spacing={'8'}>
    <Input 
    required
    value={name}
    onChange={e=>setName(e.target.value)}
    placeholder="Name"
    type={'text'}
    focusBorderColor='yellow.500'
    />

    <Input 
    required
    value={email}
    onChange={e=>setEmail(e.target.value)}
    placeholder="Email"
    type={'email'}
    focusBorderColor='yellow.500'
    />

    <Button w="full" colorScheme={'yellow'} type="submit"> Update Profile</Button>
    </VStack>
    </form>
    </Container>
  )
}

export default UpdateProfile