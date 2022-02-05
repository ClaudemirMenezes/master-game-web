import React from 'react';

function Menu(){
    return <nav className="navbar fixed-top navbar-expand-md navbar-dark">

    <div className="container">
        <a className='navbar-brand' href='#banner'>MASTER GAMER</a> 

        <div className='nav-search'>
        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-10">
          <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search"/>
        </form>
        </div>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#banner">Produtos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#features"> Ofertas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#testemunho">Clientes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#preco">Parceiros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#footer"><i class="fas fa-shopping-cart"></i></a>
            </li>
          </ul>
        </div>    
      
    </div>
  </nav>;
  }

export default Menu;