import React from "react";
import { useFormik, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import {showCreditInquiry} from "../store/actions/creditInquiryActions";
import { useSelector } from "react-redux";
import { creditInquiryItems } from "../store/initialValues/CreditInquiryItems";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCheck,faXmark } from "@fortawesome/free-solid-svg-icons";

export default function CreditInquiry() {
  
  
  const dispatch = useDispatch();

  const { creditInquiryItems } = useSelector((state) => state.creditInquiry);

  function getByIdentityNumber(identityNumber) {
    dispatch(showCreditInquiry(identityNumber))
    //alert("Kimlik No:"+creditInquiryItems[0].identityNumber + " Name :"+creditInquiryItems[0].name)
  }

  let initialValues = {
    identityNumber: "",
  };
  const rx_live = /^[+-]?\d*(?:[.,]\d*)?$/;
  const validationSchema = Yup.object({
    identityNumber: Yup.string()
      .required("Kimlik numarası zorunlu alan")
      .length(11, "Kimlik numarası 11 haneli olmalı")
      .matches(rx_live, "Doğru bir kimlik numrası giriniz"),
  });

  const { handleSubmit, handleChange, values, errors, resetForm } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
     getByIdentityNumber(values.identityNumber)
    },
  });

  return (
    <div>
      <Formik>
        <Form onSubmit={handleSubmit} className="df-jc form-formik">
          <div className="form-div">
              <h4 className="mb-5">Başvuru Sorgula</h4>
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
              <div style={{ color: "red" }}>
                {errors.identityNumber && errors.identityNumber}
              </div>
            </div>

  <div>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Kimlik Numarası</th>
        <th scope="col">Adı</th>
        <th scope="col">Soyadı</th>
        <th scope="col">Kredi Limiti</th>
        <th scope="col">Onay Durumu</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>{creditInquiryItems.length>0 ? creditInquiryItems[0].identityNumber : "----"}</td>
        <td>{creditInquiryItems.length>0 ? creditInquiryItems[0].name : "----"}</td>
        <td>{creditInquiryItems.length>0 ? creditInquiryItems[0].surname : "----"}</td>
        <td>{creditInquiryItems.length>0 ? creditInquiryItems[0].creditLimit : "----"}</td>
        <td>{creditInquiryItems.length>0 ? creditInquiryItems[0].creditStatus ? <FontAwesomeIcon icon={faCheck} color="green" size="xl" /> : <FontAwesomeIcon icon={faXmark} color="red" size="xl" /> : "----"}</td>
      </tr>
    </tbody>
  </table>
</div>

              
            

            <button className="btn btn-primary mt-4 btn-submit" type="submit">
              Sorgula
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
