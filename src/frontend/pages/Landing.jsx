import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import Header from '../components/landing/Header';
import Hero from '../components/landing/Hero';
import FormsSection from '../components/landing/FormsSection';
import ProductoDetail from '../components/landing/ProductoDetail';
import Categoria from '../components/landing/Categoria';
import Carousel from '../components/landing/Carousel';
import Card from '../components/landing/Card';
import AgenciaImg from '../components/landing/AgenciaImg';
import Requisitos from '../components/landing/Requisitos';
import RecItem from '../components/landing/RecItem';
// import Footer from '../components/landing/Footer';
import { getProductoLanding } from '../actions';
import LayoutBase from '../components/utils/LayoutBase';

const Landing = (props) => {
  const { getProductoLanding, producto } = props;

  const getData = async () => {
    const lpProductoId = window.location.href.split('?')[1];
    getProductoLanding(lpProductoId);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <LayoutBase>
      <Hero />
      <FormsSection />
      <ProductoDetail>
        <Categoria>
          <Carousel>
            {producto.caracteristicas.map((caracteristica) => (
              <Card key={caracteristica.id} fileurl={producto.fileurl} icon={caracteristica.icono} titulo={caracteristica.titulo} items={caracteristica.items} />
            ))}
          </Carousel>
        </Categoria>
      </ProductoDetail>
      <AgenciaImg fileurl={producto.fileurl} />
      <Requisitos>
        {producto.requisitos.map((requisito) => (
          <RecItem key={requisito.id} fileurl={producto.fileurl} id={requisito.id} icono={requisito.icono} titulo={requisito.titulo} descripcion={requisito.descripcion} />
        ))}
      </Requisitos>
    </LayoutBase>
  );
};

const mapStateToProps = (state) => {
  return {
    producto: state.producto,
  };
};

const mapDispatchToProps = {
  getProductoLanding,
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
