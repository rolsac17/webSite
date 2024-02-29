import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../assets/styles/components/website/FeaturedProducts.scss';
import axios from 'axios';

const FeaturedProducts = ({ home }) => {
  const [categorias, setCategorias] = useState([]);

  const fetchData = async () => {
    const { data } = await axios({
      method: 'GET',
      url: 'home/web/home_main/categorias',
    });
    setCategorias(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className='featured-products'>
      <div className='u-wrapper'>
        <div className='u-container'>
          <h2 className='featured-products__title'>Le damos vida a tus sueños</h2>
          {categorias.map((categoria) => (
            <div key={categoria.id} className='featured-products__content'>
              <div className='base-card card-products'>
                <figure className='card-products__container-img'>
                  <img src={`${categoria.imagen}`} alt='' />
                </figure>
                <div className='card-products__body'>
                  <h3 className='card-products__title'>{categoria.nombre}</h3>
                  <p className='card-products__description'>{categoria.descripcion}</p>
                  <Link
                    className='btn btn-uppercase btn-round btn-black'
                    to='/productos'
                    onClick={() => {
                      sessionStorage.setItem('productoCategoriaId', categoria.id);
                    }}
                  >
                    Mas informacion
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='u-curver text-lightGrayishBlue'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 144.54 17.34' preserveAspectRatio='none' fill='currentColor'><path d='M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0' /></svg>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    home: state.home,
  };
};

export default connect(mapStateToProps, null)(FeaturedProducts);
