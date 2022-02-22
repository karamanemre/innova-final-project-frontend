import React from "react";
import { Route, Router, Routes } from "react-router";
import Credit from "../pages/Credit";
import Content from "./Content";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreditInquiry from "../pages/CreditInquiry";

export default function Dashboard() {
  return (
    <div>
      <ToastContainer position="bottom-right" autoClose={false} />
      <Routes>
        <Route path="/" exact element={<Content/>}></Route>
        <Route path="/credit-application" exact element={<Credit/>}></Route>
        <Route path="/credit-inquiry" exact element={<CreditInquiry/>}></Route>
      </Routes>
    </div>
  );
}
