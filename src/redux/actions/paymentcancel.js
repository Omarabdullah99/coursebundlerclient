import axios from 'axios'

export const cancelSubscription = ()=>async dispatch =>{
    try {
        dispatch({
            type:"cancelSubscriptionRequest"
        })
        const {data} = await axios.delete(`http://localhost:4000/api/v1/canselsubscription`,{
           
            withCredentials:true,
        })
        dispatch({
            type:"cancelSubscriptionSuccess",
            payload:data.message
        })
    } catch (error) {
        dispatch({
            type:"cancelSubscriptionFail",
            payload:error.response.data.message
        })
    }
}