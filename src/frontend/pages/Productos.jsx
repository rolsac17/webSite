import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import '../assets/styles/components/website/ProductosSection.scss';
import ListProductsContent from '../components/website/utils/ListProductsContent';
import CardProducts from '../components/website/utils/CardProducts';
import LayoutBase from '../components/utils/LayoutBase';

const Productos = () => {
  const [productos, setProductos] = useState([]);

  const fetchData = async (categoriaId) => {
    const { data } = await axios({
      method: 'GET',
      url: `/home/web/home_main/productos/${categoriaId}`,
    });
    setProductos(data);
  };

  useEffect(() => {
    fetchData(sessionStorage.getItem('productoCategoriaId'));
  }, [sessionStorage.getItem('productoCategoriaId')]);

  return (
    <LayoutBase>
      <section className='list-creditos'>
        <div className='list-creditos__top'>
          <h2 className='u-title'>
            Tenemos el producto que tu Necesitas
          </h2>
        </div>
        <div className='u-curver text-white'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 144.54 17.34' preserveAspectRatio='none' fill='currentColor'><path d='M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0' /></svg>
        </div>
        <div className='u-wrapper'>
          <div className='u-container'>
            <ListProductsContent>
              {productos.map((producto) => (
                <CardProducts
                  key={producto.id}
                  id={producto.id}
                  nombre={producto.nombre}
                  descripcion={producto.descripcion}
                  logo={producto.logo}
                />
              ))}
            </ListProductsContent>
          </div>
        </div>
      </section>
    </LayoutBase>
  );
};

const mapStateToProps = (state) => {
  return {
    home: state.home,
  };
};

export default connect(mapStateToProps, null)(Productos);
