import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div style={{backgroundColor:"#1B96B7"}}>
      
      <div className="top-element " >
        <div className="logo-div ">
        <Link to="/">
          <img src="./img/logo.png" alt="" />
          </Link>
        </div>

        <div class="md-form active-cyan-2 search">
   
        </div>

        <div className="btn-div">
          <Link to="/credit-application">
          <button className="btn btn-outline credit-apply-button">Kredi Başvurusu Yap</button>
          </Link>

          <Link to="/credit-inquiry">
          <button className="btn btn-outline credit-apply-button" style={{marginLeft:"1rem"}}>Başvuru Sorgula</button>
          </Link>

          <Link to="/admin-panel">
          <button className="btn btn-outline credit-apply-button application-inquire" style={{marginLeft:"1rem"}}>Sistem Girişi</button>
          </Link>
        </div>

        
      </div>

      <div >

      <div className="navbar-items mt-2" style={{backgroundColor:"white"}}>
        <div className="item" style={{marginLeft:"9.45rem"}}>Bireysel</div>
        <div className="item">Ticari</div>
        <div className="item">Kurumsal</div>
      </div>

      </div>

    </div>
  );
}
