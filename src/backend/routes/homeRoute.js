import express from 'express';
import boom from '@hapi/boom';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const { API_URL } = process.env;
const { FILE_URL } = process.env;

export const homeRoute = (app) => {
  const router = express.Router(app);
  app.use('/home', router);

  /** Endpoint para consultar la informacion del home */
  router.get('/web/home_main/categorias', async (req, res, next) => {
    try {
      const { url } = req;

      const { data, status } = await axios({
        method: 'GET',
        url: `${API_URL}/api${url}`,
      });
      if (status !== 200) boom.badImplementation();
      data.fileurl = FILE_URL;
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  });

  /** Endpoint para consultar los productos por categoria */
  router.get('/web/home_main/productos/:categoriaId', async (req, res, next) => {
    try {
      const { url } = req;

      const { data, status } = await axios({
        method: 'GET',
        url: `${API_URL}/api${url}`,
      });
      if (status !== 200) boom.badImplementation();
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  });
};

export default {};
