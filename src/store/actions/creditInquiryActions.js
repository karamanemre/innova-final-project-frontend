export const SHOW_CREDIT_INQUIRY = "SHOW_CREDIT_INQUIRY"

export function showCreditInquiry(identityNumber){
    return{
        type:SHOW_CREDIT_INQUIRY,
        payload:identityNumber
    }
}
