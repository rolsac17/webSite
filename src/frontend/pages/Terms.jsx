import React from 'react';
import LayoutSimple from '../components/utils/LayoutSimple';
import '../assets/styles/components/utils/Terms.scss';

const Terms = () => {
  return (
    <LayoutSimple>
      <div className='u-wrapper'>
        <article className='u-container terms'>
          <h1 className='terms__title'>
            Términos y Condiciones
          </h1>
          <p className='terms__update'>
            Última actualización: agosto de 2020
          </p>
          <hr className='terms__line' />
          <ol>
            <li>
              <h1 className='terms__header'>Yo, Bajo juramento solemne y advertido del delito de perjurio y sus penas, declaro:</h1>
              <ul>
                <li>
                  <p className='terms__subsection'>Que en mi calidad de interesado y en el pleno goce de los servicios de crédito de la Cooperativa, en forma expresa AUTORIZO, a dicha institución para que a través de su Representante Legal o sus empleados, en mi nombre y representación puedan:</p>
                  <ol>
                    <li>
                      <p className='terms__subsection'>Solicitar y buscar información de mi persona tanto en las cooperativas del sistema Micoope como de otra entidad ya sea pública o privada, en cualquier buro de crédito;</p>
                    </li>
                    <li>
                      <p className='terms__subsection'>Consultar a nivel nacional cuantas veces lo consideren necesario para recabar información de mi persona durante el tiempo sea el proceso de autorización de un producto crediticio en la Cooperativa;</p>
                    </li>
                    <li>
                      <p className='terms__subsection'>Solicitar la información necesaria a personas individuales como jurídicas; con el fin de dar cumplimiento a lo establecido en el Decreto número 57-2008 del Congreso de la República (LEY DE ACCESO A LA INFORMACION PUBLICA), por lo que ruego se solicite la información que se considere necesaria;</p>
                    </li>
                    <li>
                      <p className='terms__subsection'>Realizar las investigaciones necesarias respecto a la información proporcionada por mi persona en la pre-calificación y solicitud de crédito iniciando el proceso el día de hoy. Dicha Investigación Puede Incluir: Llamadas telefónicas a las personas que pudiera dejar como referencias, Visitas de Verificación de Datos, Investigaciones en entidades financieras, Consultas de referencias en buros de crediticios, toma de datos y fotografías a propiedades que me pertenecen, y otras que Cooperativa Tonantel considere necesarias;</p>
                    </li>
                    <li>
                      <p className='terms__subsection'>Enviar a mi dirección de correo electrónico o número de teléfono proporcionado, toda la publicidad de nuestros productos y servicios, y</p>
                    </li>
                    <li>
                      <p className='terms__subsection'>Se somete a que La Cooperativa realice un análisis de su capacidad de pago, con la información proporcionada, para saber si es sujeto de crédito.</p>
                    </li>
                  </ol>
                </li>
                <li>
                  <p className='terms__subsection'>Que leo lo escrito, y enterado (a) del mismo, lo ratifico, acepto y envío mis Datos a Cooperativa Tonantel.</p>
                </li>
              </ul>
            </li>
            <li>
              <h1 className='terms__header'>El cumplir con toda la información brindada en nuestra aplicación, no le asegura que el crédito sea autorizado</h1>
            </li>
            <li>
              <h1 className='terms__header'>La información que completó en los campos es única y exclusivamente para uso de la Cooperativa.</h1>
            </li>
          </ol>
        </article>
      </div>
    </LayoutSimple>
  );
};

export default Terms;
