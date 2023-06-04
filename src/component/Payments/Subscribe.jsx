import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Subscribe = () => {
  return (
   <Container h='90vh' p='16'>
   <Heading children="Welcome" my='8' textAlign='center' />

   <VStack
   boxShadow={'lg'}
   alignItems='stretch'
   borderRadius={'lg'}
   spacing="0"
   >
   <Box bg='yellow.400' p={'4'} css={{borderRadius:'8px 8px 0 0'}}>
   <Text children={`Pro Pack -299.00`} />
   </Box>

   <Box p={'4'}>
   <VStack textAlign={'center'} px={'8'} mt={'4'} spacing={'8'}>
   <Text
   children={`join pro pack and get access to all content `}
   />
   <Heading size='md' children={'299 only'} />
   </VStack>
   <Link to="/checkout"><Button  mt={'8'} width="full" colorScheme={'yellow'}>Buy Now</Button></Link>
  </Box>

  <Box bg={'blackAlpha.600'} p="4" css={{borderRadius:'0 0 8px 8px'}} >
  <Heading
  color={'white'}
  textTransform='uppercase'
  size='sm'
  children={'100% refund at cancellation'}
  />
  <Text fontSize={'xs'} color="white" children={"*Terms & condition"}  />
  </Box>
   
   </VStack>
   

   
   </Container>
  )
}

export default Subscribe