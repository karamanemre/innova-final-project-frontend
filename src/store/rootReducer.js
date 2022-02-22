import { combineReducers } from "redux";
import creditInquiryReducer from "./reducers/creditınquiryReducer";

const rootReducer = combineReducers({
    creditInquiry: creditInquiryReducer,
    
})

export default rootReducer;