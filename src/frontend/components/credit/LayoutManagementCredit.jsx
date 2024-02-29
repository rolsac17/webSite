import React from 'react';
import '../../assets/styles/components/website/LayoutManagementCredit.scss';
import NavAside from './NavAside';

const LayoutManagementCredit = ({ children }) => {
  return (
    <div className='layout-managementCredit'>
      <aside className='layout-managementCredit__aside'>
        <div className='u-wrapper'>
          <NavAside />
        </div>
      </aside>
      <div className='layout-managementCredit__content'>
        <div className='u-wrapper'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default LayoutManagementCredit;
