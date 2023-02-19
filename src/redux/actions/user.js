import axios from 'axios'

export const login=(email,password)=>async(dispatch)=>{
    try {
        dispatch({type:'loginRequest'})
        const{data}=await axios.post('http://localhost:4000/api/v1/login',{email,password},{
            headers:{
                'Content-type':"application/json"
            },
            withCredentials:true
        })
        console.log("get er data",data)
        dispatch({type:'loginSuccess',payload:data})
    } catch (error) {
        dispatch({type:'loginFail',payload:error.response.data.message})
        
    }
}

export const loaduser=()=>async(dispatch)=>{
    try {
        dispatch({type:'loaduserRequest'})
        const{data}=await axios.get('http://localhost:4000/api/v1/me',{
            withCredentials:true
        })
        console.log("get er data",data)
        dispatch({type:'loaduserSuccess',payload:data.user})
    } catch (error) {
        dispatch({type:'loaduserFail',payload:error.response.data.message})
        
    }
}

export const logout=()=>async(dispatch)=>{
    try {
        dispatch({type:'logoutRequest'})
        const{data}=await axios.get('http://localhost:4000/api/v1/logout',{
            withCredentials:true
        })
        console.log("get er data",data)
        dispatch({type:'logoutSuccess',payload:data.message})
    } catch (error) {
        dispatch({type:'logoutFail',payload:error.response.data.message})
        
    }
}