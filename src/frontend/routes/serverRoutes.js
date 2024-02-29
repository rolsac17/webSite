import Home from '../pages/Home';
import Productos from '../pages/Productos';
import Landing from '../pages/Landing';
import Terms from '../pages/Terms';
import SolicitudCreditos from '../pages/SolicitudCreditos';

const serverRoutes = () => {
  return [
    {
      path: '/',
      component: Home,
      exact: true,
    },
    {
      path: '/productos',
      component: Productos,
      exact: true,
    },
    {
      path: '/producto',
      component: Landing,
      exact: true,
    },
    {
      path: '/terminos',
      component: Terms,
      exact: true,
    },
    {
      path: '/solicitud',
      component: SolicitudCreditos,
      exact: true,
    },
  ];
};

export default serverRoutes;
