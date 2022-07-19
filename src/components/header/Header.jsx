import React from 'react';
import cl from './header.module.css'

const Header = ({sortUp, setSortUp}) => {
  return (
    <div className={cl.header}>
        <h1>Quantron</h1>
        <button onClick={() => setSortUp(!sortUp)}>Сортировка по дате создания {sortUp  ? '\u25B2' : '\u25BC'}</button>
    </div>
  )
}

export default Header