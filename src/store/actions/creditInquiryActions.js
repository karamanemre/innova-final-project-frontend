export const SHOW_CREDIT_INQUIRY = "SHOW_CREDIT_INQUIRY"
export const GET_ALL = "GET_ALL"

export function showCreditInquiry(identityNumber){
    return{
        type:SHOW_CREDIT_INQUIRY,
        payload:identityNumber
    }
}


