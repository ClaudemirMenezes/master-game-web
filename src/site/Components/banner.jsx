import React from 'react';

function Banner(){
    return <section id="banner">
        <div className="container">
            <div className="row">

                <div className="col-lg-6">
                    <h1>Uma plataforma para desveolvedores wb, aqui temos tudo que voçê precisa </h1>
                    <h4>Vem fazer parte de Tecnoliga voçê também.</h4>
                    <button type="button" className="btn btn-dark btn-lg btn-banner">Criar uma conta</button>
                    <button type="button" className="btn btn-outline-light btn-lg btn-banner">Fazer Login</button>
                </div>

                <div className="col-lg-6">
                    <img src="https://www.remessaonline.com.br/blog/wp-content/uploads/2021/08/Dev.jpg.optimal.jpg" />
                </div>
       
            </div>
        </div>
    </section>;
  }

export default Banner;