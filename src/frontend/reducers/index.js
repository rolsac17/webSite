/** Definiendo los reducer de nuestra aplicacion */
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_PRODUCTO_LANDING':
      return {
        ...state,
        producto: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
