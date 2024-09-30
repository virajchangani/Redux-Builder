import { createSlice } from "@reduxjs/toolkit";


export const Counter = createSlice({
    name:"Counter",
    initialState:{ data:[] },
    reducers:{
        addData:(state,action)=>{
            state.data.push(action.payload);
        },
        deleteData:(state,action)=>{
            let deleteitem = state.data.filter((item)=> item.id != action.payload);
            state.data = deleteitem
        },
        updateData:(state,action) =>{
            let singleData = state.data.find((item)=> item.id == action.payload.id);
            singleData.id = action.payload.id
            singleData.name = action.payload.name
            singleData.studentField = action.payload.studentField
            singleData.bookName = action.payload.bookName
            singleData.bookAuthor = action.payload.bookAuthor
            singleData.purchaseDate = action.payload.purchaseDate
            singleData.returnDate = action.payload.returnDate
            

        }
    }
})

export const{addData,deleteData,updateData} = Counter.actions;
export default Counter.reducer;