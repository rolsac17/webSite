import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';
import helmet from 'helmet';
import main from './routes/main';

/** Importando las rutas */
import { homeRoute } from './routes/homeRoute';
import { landingRoute } from './routes/landingRoute';

dotenv.config();

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 3000;

const app = express();

if (ENV === 'development') {
  console.log(`Loading ${ENV} config`);
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const serverConfig = {
    contentBase: `http://localhost:${PORT}`,
    port: PORT,
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: { colors: true },
  };
  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
} else if (ENV === 'production') {
  console.log(`Loading ${ENV} config`);
  app.use(express.static(`${__dirname}/public`));
  app.use(helmet());
  app.use(helmet.permittedCrossDomainPolicies());
  app.disable('x-powered-by');
}

/** Add Middleware */
app.use(express.json());

/** Agregando las rutas */
homeRoute(app);
landingRoute(app);

app.get('*', main);

app.listen(PORT, (error) => {
  if (error) console.log(error);
  console.log(`Server running on ${PORT}`);
});
