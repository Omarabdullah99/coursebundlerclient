import axios from 'axios'

export const getAllcourses=(category="",keyword="")=>async dispatch=>{
    try {
        console.log(category,keyword)
        dispatch({type:"allCoursesRequest"})
        const {data}=await axios.get(`http://localhost:4000/api/v1/courses?keyword=${keyword}&category=${category}`)
        console.log("courseredux data",data)
        dispatch({type:"allCoursesSuccess",payload:data.courses})
    } catch (error) {
        dispatch({
            type:"allCoursesFail",
            payload:error.response.data.message
        })
        
    }
}