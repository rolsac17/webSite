import express from 'express';
import boom from '@hapi/boom';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const { API_URL } = process.env;
const { FILE_URL } = process.env;

export const landingRoute = (app) => {
  const router = express.Router(app);
  app.use('/lp', router);

  /**
   * Endpoint para consultar el listado de productos y servicios
   */
  router.get('/web/lp_producto', async (req, res, next) => {
    try {
      const { url } = req;

      const { data, status } = await axios({
        method: 'GET',
        url: `${API_URL}/api${url}`,
      });
      if (status !== 200) boom.badImplementation();
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  });

  /** Endpoint para consultar los datos de un producto para mostrarlos en la landing */
  router.get('/web/lp_producto/:lpProductoId', async (req, res, next) => {
    try {
      const { lpProductoId } = req.params;

      const { data, status } = await axios({
        method: 'GET',
        url: `${API_URL}/api/web/lp_producto/${lpProductoId}`,
      });
      if (status !== 200) boom.badImplementation();
      data.fileurl = FILE_URL;
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  });

  /**
   * Endpoint para consultar el listado de los departamentos de guatemala
   */
  router.get('/web/lp_departamento', async (req, res, next) => {
    try {
      const { url } = req;

      const { data, status } = await axios({
        method: 'GET',
        url: `${API_URL}/api${url}`,
      });
      if (status !== 200) boom.badImplementation();
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  });

  /**
   * Endpoint para consultar el listado de los municipios
   */
  router.get('/web/lp_municipio', async (req, res, next) => {
    try {
      const { url } = req;

      const { data, status } = await axios({
        method: 'GET',
        url: `${API_URL}/api${url}`,
      });
      if (status !== 200) boom.badImplementation();
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  });

  /**
   * Endpoint para crear un nuevo registro de lead desde la landing
   */
  router.post('/web/lp_lead', async (req, res, next) => {
    try {
      const { body } = req;
      const { data, status } = await axios({
        method: 'POST',
        url: `${API_URL}/api/web/lp_lead`,
        data: body,
      });
      if (status !== 201) boom.badImplementation();
      res.status(201).json(data);
    } catch (err) {
      next(err);
    }
  });

  /**
   * Endpoint para consultar los calculos de la tabla de amortizacion
   */
  router.get('/web/amortizacion', async (req, res, next) => {
    try {
      const { url } = req;

      const { data, status } = await axios({
        method: 'GET',
        url: `${API_URL}/api${url}`,
      });
      if (status !== 200) boom.badImplementation();
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  });

  /**
   * Endpoint para crear una solicitud de creditos desde la landing
   */
  router.post('/web/credit_request', async (req, res, next) => {
    try {
      const { body } = req;

      const { data, status } = await axios({
        method: 'POST',
        url: `${API_URL}/api/web/credit_request`,
        data: body,
      });
      if (status !== 201) boom.badImplementation();
      res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  });

  /**
   * Endpoint para consultar el listado de nacionalidades
   */
  router.get('/web/lp_nacionalidad', async (req, res, next) => {
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

  /**
   * Endpoint para consultar los registros de genero
   */
  router.get('/web/lp_genero', async (req, res, next) => {
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

  /**
   * Endpoint para consultar las opciones de estado civil
   */
  router.get('/web/lp_estadocivil', async (req, res, next) => {
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

  /**
   * Endpoint para consultar los tipos de vivienda
   */
  router.get('/web/lp_tipovivienda', async (req, res, next) => {
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

  /** Endpoint para consultar los tipos de vehiculos */
  router.get('/web/lp_tipovehiculo', async (req, res, next) => {
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
