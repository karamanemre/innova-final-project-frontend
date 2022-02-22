import axios from "axios";

export default class CreditService{
    add(creditForm){
        return axios.post(`http://localhost:5555/api/loaneecontroller/add`,creditForm);
    }

    getByIdentityNumber(identityNumber){
        return axios.get(`http://localhost:5555/api/loaneecontroller/findByIdentityNumber?identityNumber=${identityNumber}`);
    }

    getAll(){
        return axios.get(`http://localhost:5555/api/loaneecontroller/findAll`);
    }

}