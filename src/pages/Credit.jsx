import { useFormik, Form, Formik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import LoaneeService from "../services/loaneeService";
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import CreditResult from "./CreditResult";
import { toast } from "react-toastify";
import { Loader } from 'semantic-ui-react'



export default function Credit() {

  let getStatus = []
  const [open, setOpen] = React.useState(false)
  const sleep = (delay) => new Promise((resolve) =>setTimeout(resolve,delay))


  function loadingIcon() {
    toast(<Loader active inline='centered'>Kontrol ediliyor</Loader>,{autoClose:3000 })
 }

  async function saveToDatabase(creditform) {
    let loaneeService = new LoaneeService();
    loaneeService.add(creditform).then((result) => getStatus.push(result.data));
    loadingIcon();
    await sleep(3000);
    getStatus[0].success ? toast.success(`İşlem Başarılı`) : toast.error("İşlem Başarısız",{autoClose:1500})
  }

  // function showCreditInformation() {
  //   getStatusCredit.creditStatus ? toast.success(`İşlem Durumu: Onaylandı Limit: ${getStatusCredit.creditLimit}`) : toast.error("İşlem Başarısız",{autoClose:3000})
  // }



  let initialValues = {
    identityNumber: "",
    name: "",
    surname: "",
    monthlySalary: 0,
    phoneNumber: "",
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
      saveToDatabase(values);
      //resetForm();
      
    },
  });

  return (
    <div className="credit-main-div">
     
      <Formik>
        <Form onSubmit={handleSubmit} className="df-jc form-formik">
        
          <div className="form-div">
          
            <h3 className="mb-5">Lütfen tüm alanları eksiksiz bir şekilde doldurunuz.</h3>

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

            <button className="btn btn-primary mt-4 btn-submit" type="submit">
              Başvur
            </button>
          </div>
        </Form>
      
      </Formik>

     
    </div>
  );
}
