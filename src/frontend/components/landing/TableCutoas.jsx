import React from 'react';
import '../../assets/styles/components/landign/TableCuotas.scss';

const TableCutoas = ({ calculations }) => {
  return (
    <div className='wrapper-table'>
      <table className='table'>
        <thead>
          <tr>
            <th>No.Cuota</th>
            <th>Fecha pago</th>
            <th>Saldo inicial</th>
            <th>Cuota</th>
            <th>Interes</th>
            <th>Capital</th>
            <th>Saldo final</th>
          </tr>
        </thead>
        <tbody>
          {calculations.map((calculation) => (
            <tr key={calculation.feeNumber}>
              <td>{calculation.feeNumber}</td>
              <td>{calculation.paymentDate}</td>
              <td className='moneda'>{calculation.initialBalance}</td>
              <td className='moneda'>{calculation.share}</td>
              <td className='moneda'>{calculation.interest}</td>
              <td className='moneda'>{calculation.capital}</td>
              <td className='moneda'>{calculation.finalBalance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableCutoas;
