import axios from "axios";

export default class CreditService{
    add(creditForm){
        return axios.post(`/api/loaneecontroller/add`,creditForm);
    }

    getByIdentityNumber(identityNumber){
        return axios.get(`/api/loaneecontroller/findByIdentityNumber?identityNumber=${identityNumber}`);
    }

    getAll(){
        return axios.get(`/api/loaneecontroller/findAll`);
    }

}