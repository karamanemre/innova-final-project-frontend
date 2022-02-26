import axios from "axios";

export default class LoaneeService{
    add(creditForm){
        return axios.post(`/api/loaneecontroller/add`,creditForm);
    }

    getByIdentityNumber(identityNumber){
        return axios.get(`/api/loaneecontroller/findByIdentityNumber?identityNumber=${identityNumber}`);
    }

    getAll(){
        return axios.get(`/api/loaneecontroller/findAll`);
    }

    update(loanees){
        return axios.put(`api//loaneecontroller/update`,loanees)
    }

    delete(identityNumber){
        return axios.delete(`/api/loaneecontroller/delete?identityNumber=${identityNumber}`)
    }

}