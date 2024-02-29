import React from 'react';
import LayoutBase from '../components/utils/LayoutBase';
import LayoutManagementCredit from '../components/credit/LayoutManagementCredit';
// import Cotizacion from './credit/Cotizacion';
import FormSC1 from './credit/FormSC1';
// import FormSC2 from './credit/FormSC2';
// import FormSC3 from './credit/FormSC3';

const SolicitudCreditos = () => {
  return (
    <LayoutBase>
      <LayoutManagementCredit>
        {/* <Cotizacion /> */}
        <FormSC1 />
        {/* <FormSC2 />
        <FormSC3 /> */}
      </LayoutManagementCredit>
    </LayoutBase>
  );
};

export default SolicitudCreditos;
