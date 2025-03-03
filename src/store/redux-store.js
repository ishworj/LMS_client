import {configureStore} from "@reduxjs/toolkit"
import bookreducer from '../slice/bookSlice.js'
export default configureStore({
    reducer :{
        books : bookreducer
    }
})