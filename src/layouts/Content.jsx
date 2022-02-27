import React from "react";
import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";

export default function Content() {
  const slideImages = [
    {
      url: "./img/slider1.jpg",
      caption: "Slide 1",
    },
    {
      url: "./img/slider2.jpg",
      caption: "Slide 1",
    },
  ];

  return (
    <div>
      <div style={{ backgroundColor: "#1B96B7" }}>
        <div className="content-main container">
          <div className="row p-5">
            <div className="col-6">
              <h1
                className="text-white"
                style={{ marginBottom: "4rem", marginTop: "3rem" }}
              >
                İnnova Bankacılık Heryerde
              </h1>
              <p className="text-white">
                İnternet Bankacılığı’nı nasıl kullanmaya başlayabilirim? Çok
                basit… Tüm işlemlere ulaşmak için banka kartınız veya kredi
                kartınız ve kart şifreniz olması yeterlidir. Kullanıcı
              </p>
              <p className="text-white">
                oluşturmak için tıklayınız İnternet Bankacılığı kullanıcı
                oluşturma işleminizi gerçekleştirdikten ve şifreniz sistemde
                kayıtlı cep telefonunuza gönderildikten sonra Kullanıcı Adı,
                Kart Bilgileriniz veya TCKN ile olmak üzere üç şekilde Innova
                İnternet Bankacılığı’na giriş yapabilir ve bankacılık
                işlemlerinizi gerçekleştirebilirsiniz.
              </p>
            </div>
            <div className="col-6">
              <div className="slide-container" style={{ marginTop: "3rem" }}>
                <Slide className="slide">
                  {slideImages.map((slideImage) => (
                    <img src={`${slideImage.url}`} alt="" />
                  ))}
                </Slide>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>

      <div className="content-s2 container">
        <div className="row">
          <div className="col-6" style={{marginTop:"5rem"}}>
            <h3 className="mb-4">Hızlı ve Kolay bir bankacılık deneyimi!</h3>
            <p>Innova ile bankacılık işlemleri 7/24 cebinizde!</p>
            <Link to="/credit-application">
            <button className="btn btn-outline mt-4">Detaylı Bilgi</button>
            </Link>
          </div>
          <div className="col-6">
            <img src="./img/content-s2.png" alt="" style={{width:"20rem"}} />
          </div>
        </div>
      </div>
    </div>
  );
}
