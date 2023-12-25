import { configureStore } from "@reduxjs/toolkit";

import { Authslicereducer} from './Slices/Authslices.js'

const sotre= configureStore({
     reducer:{Authslicereducer},
     devTools:true
})




export default sotre;

