import axios from 'axios';

/** Action para consultar el producto a mostrar de la landing page */
export const setProductoLanding = (payload) => ({
  type: 'SET_PRODUCTO_LANDING',
  payload,
});

export const getProductoLanding = (lpProductoId) => {
  return (dispatch) => {
    axios({
      method: 'GET',
      url: `/lp/web/lp_producto/${lpProductoId}`,
    }).then(({ data }) => {
      dispatch(setProductoLanding(data));
    });
  };
};

export default {};
