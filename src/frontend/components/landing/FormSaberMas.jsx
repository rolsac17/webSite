/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import '../../assets/styles/components/landign/FormSaberMas.scss';
import axios from 'axios';
import NProgress from 'nprogress';
import Icon from 'icomoon-react';
import iconSet from '../../assets/Icoom/selection.json';

const FormSaberMas = ({ id }) => {
  const [departamentos, setDepartamentos] = useState([]);
  const [municipios, setMunicipios] = useState([]);
  const [lpDepartamentoId, setLpDepartamentoId] = useState(0);
  const [terminos, setTerminos] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setValues] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    lpMunicipioId: 0,
    lpProductoId: id,
    lpMedioId: 1,
  });

  const getData = async () => {
    const resolve = await Promise.all([
      axios({
        method: 'GET',
        url: '/lp/web/lp_departamento',
      }),
      axios({
        method: 'GET',
        url: '/lp/web/lp_municipio',
      }),
    ]);
    setDepartamentos(resolve[0].data);
    setMunicipios(resolve[1].data);
    setValues({
      ...form,
      lpProductoId: id,
    });
  };

  useEffect(() => {
    getData();
  }, [id]);

  /** Selecciona el departamento */
  const selectDepartamento = (event) => {
    const { target } = event;
    setLpDepartamentoId(parseInt(target.value, 0));
    setValues({
      ...form,
      lpMunicipioId: 0,
    });
  };

  /** Toma los datos del formulario */
  const handleChange = (event) => {
    const { target } = event;
    setValues({
      ...form,
      [target.name]: target.value,
    });
    setSuccess(false);
  };

  /** Acepta los terminos y condiciones */
  const aceptarTerminos = (event) => {
    const { target } = event;
    setTerminos(target.checked);
  };

  /** Valida campo de nombre */
  const nameIsCorrect = () => {
    const regexName = /^[a-zA-Záéíóú\s]{3,45}$/;
    const { nombre } = form;
    if (!nombre) return true;
    if (nombre.match(regexName)) return true;
    return false;
  };

  /** Valida campo de apellido */
  const lastNameIsCorrect = () => {
    const regexName = /^[a-zA-Z\s]{3,45}$/;
    const { apellido } = form;
    if (!apellido) return true;
    if (apellido.match(regexName)) return true;
    return false;
  };

  /** Valida campo de telefono */
  const phoneNumberIsCorrect = () => {
    const regex = /^[0-9]{8}$/;
    const { telefono } = form;
    if (!telefono) return true;
    if (telefono.match(regex)) return true;
    return false;
  };

  /** Valida campo de email */
  const emailIsCorrect = () => {
    const regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const { email } = form;
    if (!email) return true;
    if (email.match(regex)) return true;
    return false;
  };

  /** Deshabilita el boton si los datos no estan completos */
  const deshabilitar = () => {
    const { nombre, apellido, email, lpMunicipioId, lpProductoId, lpMedioId } = form;
    if (!nombre || !apellido || !email || !lpMunicipioId || !lpProductoId || !lpMedioId || !terminos) {
      return true;
    }
    if (!nameIsCorrect()) return true;
    if (!lastNameIsCorrect()) return true;
    if (!phoneNumberIsCorrect()) return true;
    if (!emailIsCorrect()) return true;
    if (loading) return true;
    return false;
  };

  /** Se resetea el formulario */
  const resetForm = () => {
    setValues({
      nombre: '',
      apellido: '',
      email: '',
      telefono: '',
      lpMunicipioId: 0,
      lpProductoId: id,
      lpMedioId: 1,
    });
    setLpDepartamentoId(0);
    setTerminos(false);
  };

  /** Envia los datos del interesado a la base de datos */
  const enviarDatos = async () => {
    try {
      NProgress.start();
      setLoading(true);
      const { data } = await axios({
        method: 'POST',
        url: '/lp/web/lp_lead',
        data: form,
      });
      if (data.id) {
        resetForm();
        setSuccess(true);
      }
    } catch (err) {
      console.error(err.message);
    } finally {
      setLoading(false);
      NProgress.done();
    }
  };

  return (
    <div className='form__wrap'>
      <div className='form__container'>
        <div className='container-strech'>
          <h1 className='form__title-group'>En Micoope Tonantel le damos vida a tus sueños, si deseas saber mas sobre este producto ingresa los siguientes datos y nosotros nos comunicaremos contigo.</h1>
          <hr className='line-separation' />
          <form action=''>
            <div className='grid'>
              {/* Nombres */}
              <div className='grid-12 grid-sm-9'>
                <div className='two'>
                  <div className={nameIsCorrect() ? 'form-group' : 'form-group is-invalid'}>
                    <label htmlFor='nombre' className='form-group__label'>Nombre</label>
                    <input name='nombre' id='nombre' className='form-group__input border-none-r' type='text' autoComplete='off' maxLength='45' value={form.nombre} onChange={handleChange} />
                    <p className='form-group__error'>Introduzca un nombre valido</p>
                  </div>
                  <div className={lastNameIsCorrect() ? 'form-group' : 'form-group is-invalid'}>
                    <label htmlFor='apellido' className='form-group__label'>Apellido</label>
                    <input name='apellido' id='apellido' className='form-group__input border-none-l' type='text' autoComplete='off' maxLength='45' value={form.apellido} onChange={handleChange} />
                    <p className='form-group__error'>Introduzca un apellido valido</p>
                  </div>
                </div>
              </div>
              {/* Telefono 1 */}
              <div className='grid-12 grid-sm-3'>
                <div className={phoneNumberIsCorrect() ? 'form-group' : 'form-group is-invalid'}>
                  <label htmlFor='telefono' className='form-group__label'>Teléfono</label>
                  <input name='telefono' id='telefono' className='form-group__input' type='text' autoComplete='off' maxLength='8' value={form.telefono} onChange={handleChange} />
                  <p className='form-group__error'>Introduzca un numero valido</p>
                </div>
              </div>
              {/* E-mail */}
              <div className='grid-12'>
                <div className={emailIsCorrect() ? 'form-group' : 'form-group is-invalid'}>
                  <label htmlFor='email' className='form-group__label'>Correo electrónico</label>
                  <input name='email' id='email' className='form-group__input' type='email' autoComplete='off' maxLength='75' value={form.email} onChange={handleChange} />
                  <p className='form-group__error'>Introduzca una dirección de correo electrónico valida</p>
                </div>
              </div>
              {/* Departamento */}
              <div className='grid-12 grid-sm-6'>
                <div className='form-group'>
                  <label htmlFor='departamento' className='form-group__label'>Departamento</label>
                  <select name='departamento' id='departamento' className='form-group__select' value={lpDepartamentoId} onChange={selectDepartamento}>
                    <option value={0}>
                      Departamento
                    </option>
                    {departamentos.map((dp) => (
                      <option className='select__title' key={dp.id} value={dp.id}>
                        {dp.nombre}
                      </option>
                    ))}
                  </select>
                  <p className='form-group__error'>Selecciona tu departamento de origen</p>
                </div>
              </div>
              {/* Municipio */}
              <div className='grid-12 grid-sm-6'>
                <div className='form-group'>
                  <label htmlFor='lpMunicipioId' className='form-group__label'>Municipio</label>
                  <select name='lpMunicipioId' id='lpMunicipioId' className='form-group__select' value={form.lpMunicipioId} onChange={handleChange}>
                    <option value=''>
                      Municipio
                    </option>
                    {municipios
                      .filter((m) => m.lpDepartamentoId === lpDepartamentoId)
                      .map((municipio) => (
                        <option className='select__title' key={municipio.id} value={municipio.id}>
                          {municipio.nombre}
                        </option>
                      ))}
                  </select>
                  <p className='form-group__error'>Selecciona tu municipio de origen</p>
                </div>
              </div>
              <div className='grid-12'>
                <div className='terms--container'>
                  <div className='checkbox--container'>
                    <input name='termino' type='checkbox' id='check' checked={terminos} onChange={aceptarTerminos} />
                    <label htmlFor='check' />
                  </div>
                  <div className='terms--content'>
                    <label htmlFor='check'>
                      <span>
                        Acepto los
                        {' '}
                        <a href='/terminos' target='blank'>Términos y Condiciones</a>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className='grid-12'>
                <button className='btn btn-green-principal btn-form' type='button' disabled={deshabilitar()} onClick={enviarDatos}>
                  {success ? (
                    <div className='mensaje-exito'>
                      <label htmlFor=''>Exito! En breve nos comunicamos contigo</label>
                      <span className='mensaje-exito__icono'>
                        <Icon iconSet={iconSet} color='#ffffff' size={14} icon='checkmark' />
                      </span>
                    </div>
                  ) : (
                    'Saber Más'
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    id: state.producto.id,
  };
};

export default connect(mapStateToProps, null)(FormSaberMas);
