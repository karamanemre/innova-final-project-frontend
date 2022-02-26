import React, { useEffect, useState } from "react";
import { useFormik, Form, Formik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAll } from "../store/actions/creditInquiryActions";
import LoaneeService from "../services/loaneeService";
import { toast } from "react-toastify";
import { Checkbox } from "semantic-ui-react";

export default function AdminPanel() {
  
  const [getAll, setGetAll] = useState([]);
  
  useEffect(() => {
    let loaneeService = new LoaneeService();
    loaneeService
      .getAll()
      .then((result) => setGetAll(result.data.data));
  });


  function handleUpdatedByIdentityNumber(loanee){
    let loaneeService = new LoaneeService();
    loaneeService.update(loanee)
  }

  function handleDeleteByIdentityNumber(identityNumber){
    let loaneeService = new LoaneeService();
    loaneeService.delete(identityNumber)
  }

  let initialValues = {
    identityNumber: "",
    name: "",
    surname: "",
    monthlySalary: 0,
    phoneNumber: "",
    creditLimit: "",
    creditStatus: true,
  };

  const rx_live = /^[+-]?\d*(?:[.,]\d*)?$/;
  const validationSchema = Yup.object({
    identityNumber: Yup.string().required("Kimlik numarası zorunlu alan").length(11,"Kimlik numarası 11 haneli olmalı").matches(rx_live,"Dorğ bir kimlik numrası giriniz"),
    name: Yup.string().required("İsim zorunlu alan"),
    surname: Yup.string().required("Soyisim zorunlu alan"),
    monthlySalary: Yup.number().required("Aylık gelir zorunlu alan").min(0,"Aylık maaş 0'dan küçük olamaz"),
    phoneNumber: Yup.string().required("Telefon numarası zorunlu alan").matches(rx_live,"Lütfen doğru bir telefon numarası giriniz").length(11,"Telefon numarası 11 haneli olmalı")
  });

  const { handleSubmit, handleChange, values, errors,resetForm } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      handleUpdatedByIdentityNumber(values)
    },
  });

  function changedInitialValues(get){
    values.creditLimit=get.creditLimit
    values.creditStatus=get.creditStatus
    values.identityNumber=get.identityNumber
    values.monthlySalary=get.monthlySalary
    values.name=get.name
    values.phoneNumber=get.phoneNumber
    values.surname=get.surname
  }

  return (
    <div className="admin-panel-div">
     <div style={{marginBottom:"2rem",marginLeft:"1rem"}}><span style={{padding:"10px",backgroundColor:"#1B96B7",color:"white",borderRadius:"15px"}}>{getAll.length} adet kişi listelendi</span> </div>
        {getAll.map((get)=>(
        
          <div className="admin-main" key={get.id}>
           <div className="card" style={{ marginLeft: "1rem" }}>
           <div className="card-body">
             <div>Kimlik numarası: {get.identityNumber} </div>
             <div>İsim: {get.name} </div>
             <div>Soyisim: {get.surname} </div>
             <div>Kredi Limit: {get.creditLimit} </div>
             <div>Kredi Durumu: {get.creditStatus ? <span style={{color:"green",fontWeight:"bold"}}>Onaylandı</span> : <span style={{color:"red",fontWeight:"bold"}}>Onaylanmadı</span> } </div>
           </div>

           <div className="card-button">
             <button className="btn btn-danger"  onClick={()=>handleDeleteByIdentityNumber(get.identityNumber)}>Sil</button>
             <div class="container">
               <div class="interior">
                 <a class="btn btn-primary" href="#open-modal" onClick={()=>changedInitialValues(get)}>
                   Güncelle
                 </a>
               </div>

               <div id="open-modal" class="modal-window">
                 <div>
                   <a href="#" title="Close" class="modal-close">
                     Close
                   </a>
                   <h1>Güncelle!</h1>
                   <div>
                   <Formik>
       <Form onSubmit={handleSubmit} className="df-jc">
       
         <div className="form-div">

           <div class="form-group mb-4">
             <label for="identityNumber">Kimlik Numarası</label>
             <input
               id="identityNumber"
               type="text"
               className="form-control"
               name="identityNumber"
               placeholder="Kimlik Numarası"
               onChange={handleChange}
               value={values.identityNumber}
             />
             <div style={{color:"red"}}>
             {errors.identityNumber && errors.identityNumber}</div>
           </div>

           <div className="line-2 mb-4">
             <div class="form-group" style={{width:"48%"}} >
               <label for="name">İsim</label>
               <input
                 id="name"
                 type="text"
                 className="form-control"
                 name="name"
                 placeholder="İsim"
                 onChange={handleChange}
                 value={values.name}
               />
               <div style={{color:"red"}}>
              {errors.name && errors.name}</div>
             </div>

             <div class="form-group" style={{width:"50%"}} >
               <label for="exampleInputEmail1">Soyisim</label>
               <input
                 id="surname"
                 type="text"
                 className="form-control"
                 name="surname"
                 placeholder="Soyisim"
                 onChange={handleChange}
                 value={values.surname}
               />
               <div style={{color:"red"}}>
               {errors.surname && errors.surname}</div>
             </div>
           </div>

           <div class="form-group mb-4">
             <label for="exampleInputEmail1">Aylık Maaş Bilgisi</label>
             <input
               id="monthlySalary"
               type="number"
               className="form-control"
               name="monthlySalary"
               placeholder="Aylık Maaş"
               onChange={handleChange}
               value={values.monthlySalary}
             />
             <div style={{color:"red"}}>
             {errors.monthlySalary && errors.monthlySalary}</div>
           </div>

           <div class="form-group">
             <label for="exampleInputEmail1">Telefon Numarası</label>
             <input
               id="phoneNumber"
               type="text"
               className="form-control"
               name="phoneNumber"
               placeholder="Telefon Numarası"
               onChange={handleChange}
               value={values.phoneNumber}
             />
             <div style={{color:"red"}}>
             {errors.phoneNumber && errors.phoneNumber}</div>
           </div>

           <div class="form-group creditLimit">
             <label for="exampleInputEmail1">Kredi limiti</label>
             <input
               id="creditLimit"
               type="text"
               className="form-control"
               name="creditLimit"
               placeholder="Kredi Limit"
               onChange={handleChange}
               value={values.creditLimit}
             />
             <div style={{color:"red"}}>
             {errors.creditLimit && errors.creditLimit}</div>
           </div>

           <div class="form-group">
             <label for="exampleInputEmail1">Kredi durumu</label>
             <Checkbox
              id="creditStatus"
              onChange={handleChange}
              name="creditStatus"
              value={values.creditStatus}
              />
             <div style={{color:"red"}}>
             {errors.creditStatus && errors.creditStatus}</div>
           </div>

       

           <button className="btn btn-primary mt-4 btn-submit" type="submit" style={{width:"20%"}}>
             Güncelle
           </button>
         </div>
       </Form>
     
     </Formik>
                   </div>
                  
                 </div>
               </div>
             </div>
             
           </div>
         </div>
         </div>
          ))}
       
    </div>
  );
}
