import dotenv from 'dotenv';
import getManifest from '../getManifest';

dotenv.config();

const files = getManifest();
const isProd = process.env.NODE_ENV === 'production';

const render = (html, preloadedState) => {
  return (`
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="En cooperativa Tonantel es Micoope le damos vida a tus sueños, somos el sistema cooperativo financiero que mejora la calidad de vida de los asociados" />
        <meta name="robots" content="index,follow" />
        <meta name="keywords" content="micoope, cooperativa, tonantel, ahorros, prestamos, creditos, cuentas, coope" />
        <link rel="stylesheet" href="${isProd ? files['main.css'] : 'assets/app.css'}" type="text/css"></link>
        <title>Cooperativa Tonantel R.L</title>

        <!-- Facebook Pixel Code -->
          <script>
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window,document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1903852023070095'); 
          fbq('track', 'PageView');
          </script>
          <noscript>
          <img height="1" width="1" 
          src="https://www.facebook.com/tr?id=1903852023070095&ev=PageView
          &noscript=1"/>
          </noscript>
        <!-- End Facebook Pixel Code -->
      </head>
      <body>

        <section id="app">${html}</section>

        <!-- Load Facebook SDK for JavaScript -->
        <div id="fb-root"></div>
        <script>
          window.fbAsyncInit = function() {
            FB.init({
              xfbml            : true,
              version          : 'v9.0'
            });
          };
        
          (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/es_LA/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));
        </script>
        
        <!-- Your Chat Plugin code -->
        <div class="fb-customerchat"
          attribution=install_email
          page_id="103859309650133"
          theme_color="#13cf13"
            logged_in_greeting="Hola mucho gusto saludarte, de d&#xf3;nde nos saludas? "
            logged_out_greeting="Hola mucho gusto saludarte, de d&#xf3;nde nos saludas? ">
        </div>

        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c',)}
        </script>
        <script src="${isProd ? files['main.js'] : 'assets/app.js'}" type="text/javascript"></script>
        <script src="${isProd ? files['vendors.js'] : 'assets/vendor.js'}" type="text/javascript"></script>
      </body>
    </html>
  `);
};

export default render;
