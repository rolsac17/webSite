/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import '../../assets/styles/components/utils/ElementsForm.scss';
import axios from 'axios';
import NProgress from 'nprogress';
import TableCuotas from './TableCutoas';

const FormCalcularPagos = () => {
  const [productos, setProductos] = useState([]);
  const [calculations, setCalculations] = useState([]);
  const [form, setValues] = useState({
    monto: '',
    plazo: '',
    lpProductoId: 0,
    tipoCuota: '',
  });

  /** Valida el formulario y continua el proceso */
  const getData = async () => {
    const { data } = await axios({
      method: 'GET',
      url: '/lp/web/lp_producto?lpCategoriumId=2',
    });
    setProductos(data);
  };

  /** Consulta el calculo de la tabla de amortizaciones */
  const consultTable = async ({ monto, plazo, lpProductoId, tipoCuota }) => {
    if (monto && plazo && lpProductoId && tipoCuota) {
      try {
        NProgress.start();
        const { data } = await axios({
          method: 'GET',
          url: `/lp/web/amortizacion?monto=${monto}&plazoEnMeses=${plazo}&lpProductoId=${lpProductoId}&tipoCuota=${tipoCuota}`,
        });
        setCalculations(data);
      } catch (err) {
        console.error(err.message);
      } finally {
        NProgress.done();
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  /** Funcion para validar que el formulario ya este completo */
  const formIsFull = () => {
    const { monto, plazo, lpProductoId, tipoCuota } = form;
    if (!monto || !plazo || !lpProductoId || !tipoCuota) {
      return false;
    }
    return true;
  };

  /** Funcion para capturar los datos del formulario */
  const handleChange = (event) => {
    const { target } = event;
    const newValues = {
      ...form,
      [target.name]: target.value,
    };
    setValues(newValues);
    consultTable(newValues);
  };

  return (
    <div className='form__wrap'>
      <div className='form__container'>
        <div className='container-strech'>
          <h1 className='form__title-principal'>Datos del Crédito</h1>
          <hr className='line-separation' />
          <form action=''>
            <div className='grid'>
              {/* Monto a solicitar */}
              <div className='grid-12 grid-xs-6'>
                {/* example para validar error agregar clase is-invalid */}
                <div className='form-group'>
                  <label htmlFor='monto' className='form-group__label'>Monto que desea solicitar</label>
                  <input name='monto' id='monto' className='form-group__input' type='number' placeholder='1000000' autoComplete='off' maxLength='12' value={form.monto} onChange={handleChange} />
                  <p className='form-group__error'>Introduzca un monto valido, sin(`Q` `.` `,`)</p>
                </div>
              </div>
              {/* Plazos en meses */}
              <div className='grid-12 grid-xs-6'>
                <div className='form-group'>
                  <label htmlFor='plazo' className='form-group__label'>Plazo para pagar el crédito en Meses</label>
                  <input name='plazo' id='plazo' className='form-group__input' type='number' placeholder='32' autoComplete='off' maxLength='12' value={form.plazo} onChange={handleChange} />
                  <p className='form-group__error'>Introduzca el numero de meses sin(`letras` `.` `,`)</p>
                </div>
              </div>
              {/* Tipo de Credito */}
              <div className='grid-12 grid-xs-6'>
                <div className='form-group'>
                  <label htmlFor='lpProductoId' className='form-group__label'>Tipo de crédito</label>
                  <select name='lpProductoId' id='lpProductoId' className='form-group__select' value={form.lpProductoId} onChange={handleChange}>
                    <option value=''>Elige una opción</option>
                    {productos.map((producto) => (
                      <option key={producto.id} value={producto.id}>
                        {producto.nombre}
                      </option>
                    ))}
                  </select>
                  <p className='form-group__error'>Selecciona el tipo o destino del credito</p>
                </div>
              </div>
              <div className='grid-12'>
                <div className='group-radios'>
                  <p className='group-radios__title'>Que tipo de cuota te gustaría</p>
                  <input type='radio' name='tipoCuota' id='nivelada' value='1' checked={form.tipoCuota === '1'} onChange={handleChange} />
                  <label htmlFor='nivelada'>Cuota Nivelada</label>
                  <input type='radio' name='tipoCuota' id='decreciente' value='2' checked={form.tipoCuota === '2'} onChange={handleChange} />
                  <label htmlFor='decreciente'>Cuota Decreciente</label>
                </div>
              </div>
            </div>
          </form>
        </div>
        {formIsFull() && (
          <>
            <br />
            <h1 className='form__title-principal'>Tabla de Amortizaciones</h1>
            <hr className='line-separation' />
            <TableCuotas calculations={calculations} />
            <p className='form__description'>
              Nota: Los datos que se muestran en este cálculo son únicamente una proyección por
              lo tanto para la cooperativa no representan ningún compromiso.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default FormCalcularPagos;
