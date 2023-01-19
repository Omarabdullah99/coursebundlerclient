import React from 'react'
import { Box, Button, Grid, Heading, HStack, Image, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import cursor from '../../../assets/images/cursor.png'
import Sidebar from '../Sidebar'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import CourseModal from './CourseModal'


const AdminCourse = () => {
  const courses=[{
    _id:'jdkdkjdfkf',
    title:'React Course',
    category:'Web development',
    poster:{
      url:'https://ih1.redbubble.net/image.398277222.9746/fposter,small,wall_texture,product,750x1000.u4.jpg'
    },
    createdBy:'Omar Abdullah',
    views:123,
    numOfVideos:12,

  }]

  const {isOpen,onClose,onOpen}=useDisclosure()
  const courseDetailsHandler=userId=>{
    
    onOpen()
  }

  const deleteHandler=userId=>{
    console.log(userId)
  }

  const deleteButtonHandler=(courseId,lectureId)=>{
    console.log(courseId)
    console.log(lectureId)
  }
  const addLectureHandler=(e,courseId,title,description,video)=>{
    e.preventDefault()
  }
  return (
    <Grid 
    css={{
        cursor:`url(${cursor}), default`
    }}
    minH={'100vh'}
    templateColumns={['1fr', '5fr 1fr']}
    >
    <Box p={['0','8']} overflow="auto">

    <Heading  
    children="All Users"
    textTransform={'uppercase'}
    my="16"
    textAlign={['center', 'left']} />

    <TableContainer w={['100vw','full']}>
    <Table variant={'simple'} size="lg">
    <TableCaption>All available course in the database</TableCaption>
    <Thead>
    <Tr>
    <Th>Id</Th>
    <Th>Poster</Th>
    <Th>Title</Th>
    <Th>Category</Th>
    <Th>Creator</Th>
    <Th isNumeric>Views</Th>
    <Th isNumeric>Lecuters</Th>
    <Th isNumeric>Action</Th>
    </Tr>
    </Thead>

    <Tbody>
    {courses.map(item=>(
      <Row courseDetailsHandler={courseDetailsHandler} deleteHandler={deleteHandler} key={item._id}  item={item} />

    ))}
    </Tbody>
    </Table>
    </TableContainer>

    <CourseModal isOpen={isOpen} onClose={onClose} 
    id={"asadfkjfkdj"}
    courseTitle="React Course"
    deleteButtonHandler={deleteButtonHandler}
    addLectureHandler={addLectureHandler}
  

    />
    
    </Box>
    <Sidebar />

    </Grid>
    
  )
}

export default AdminCourse
function Row({item,courseDetailsHandler,deleteHandler}){
  return(
    <Tr>
    <Td>#{item._id}</Td>
    <Td>
    <Image src={item.poster.url} />
    </Td>
    <Td>{item.title}</Td>
    <Td textTransform={'uppercase'}>{item.category}</Td>
    <Td>{item.createdBy}</Td>
    <Td isNumeric>{item.views}</Td>
    <Td isNumeric>{item.numOfVideos}</Td>
    <Td>
    <HStack justifyContent={'flex-end'}>
    <Button onClick={()=>courseDetailsHandler(item._id)} variant={'outline'} color="purple.500">
    View Lectures
    </Button>

    <Button onClick={()=>deleteHandler(item._id)} color={'purple.600'}>
    <RiDeleteBin7Fill />
    </Button>
    </HStack>
    </Td>
    </Tr>


  )

}