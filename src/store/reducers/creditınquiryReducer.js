import { creditInquiryItems } from "../initialValues/CreditInquiryItems";
import {GET_ALL, SHOW_CREDIT_INQUIRY} from "../actions/creditInquiryActions"
import LoaneeService from "../../services/loaneeService";

let loaneeService = new LoaneeService();

const initialState = {
    creditInquiryItems:creditInquiryItems
}

export default function cartReducer(state=initialState,{type,payload}) {
    switch (type) {
        case SHOW_CREDIT_INQUIRY:
            loaneeService.getByIdentityNumber(payload).then((result) => state.creditInquiryItems[0]=(result.data.data));
            return {
                ...state,
                creditInquiryItems: state.creditInquiryItems,
              };
            
        default:
            return state;
    }
  
}