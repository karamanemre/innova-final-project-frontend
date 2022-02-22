import { creditInquiryItems } from "../initialValues/CreditInquiryItems";
import {SHOW_CREDIT_INQUIRY} from "../actions/creditInquiryActions"
import CreditService from "../../services/creditService";

let creditService = new CreditService();

const initialState = {
    creditInquiryItems:creditInquiryItems
}

export default function cartReducer(state=initialState,{type,payload}) {
    switch (type) {
        case SHOW_CREDIT_INQUIRY:
            creditService.getByIdentityNumber(payload).then((result) => state.creditInquiryItems[0]=(result.data));
            return {
                ...state,
                creditInquiryItems: state.creditInquiryItems,
              };
            
        default:
            return state;
    }
}