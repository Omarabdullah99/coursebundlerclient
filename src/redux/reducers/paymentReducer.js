import { createReducer } from "@reduxjs/toolkit";

export const paymentReducer = createReducer({},{
    buySubscriptionRequest:state=>{
        state.loading = true;
    },
    buySubscriptionSuccess:(state,action)=>{
        state.loading =false;
        state.success = action.payload.success;
        state.message = action.payload.message;
        state.subscriptionId = action.payload.subscriptionId;
    },
    buySubscriptionFail:(state,action)=>{
        state.loading = false;
        state.success = action.payload.success;
        state.error = action.payload.message;
    },
    cancelSubscriptionRequest:state=>{
        state.loading = true;
    },
    cancelSubscriptionSuccess:(state,action)=>{
        state.loading =false;
        state.message = action.payload;
    },
    cancelSubscriptionFail:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    },
    clearError:state=>{
        state.error = null;
    },
    clearMessage:state=>{
        state.message = null;
    }
})