import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

function App() {
  const listItems = [
    { id: 1, label: 'Teste1', link: 'http://teste1.com.br' },
    { id: 2, label: 'Teste2', link: 'http://teste2.com.br' },
    { id: 3, label: 'Teste3', link: 'http://teste3.com.br' },
  ];

  function testeAlert() {
    alert('Teste botão')
  }

  function testeClickIl() {
    alert('click item list')
  }

  return (
    <div>
      <ul className="list">
        {listItems.map((item) => {
          return <li onDoubleClick={e => {testeClickIl()}} className='itemlist' key={item.id.toString()}>
            <span>{item.label}</span>
            <button onClick={e => testeAlert()} className='edit-button'>E</button>
            <button onClick={e => testeAlert()} className='remove-button'>R</button>
          </li>;
        })}
      </ul>
    </div>
  );
}

render(<App />, document.getElementById('root'));
