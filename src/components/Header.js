import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'

const Header = ({showComplete, changeShowComplete}) => {

  const toggleCompletada = () => {
    changeShowComplete(!showComplete);
  }

  return (
    <header className="header">
      <h1 className="header__titulo">to do list</h1>
      {showComplete 
      ?
        <button 
          className="header__boton"
          onClick={() => toggleCompletada()}
        >
          Hide complete
          <FontAwesomeIcon 
            icon={faEyeSlash} 
            className="header__icono-boton"
            
          />
        </button>
      :
        <button className="header__boton">
          Show complete
          <FontAwesomeIcon 
            icon={faEye} 
            className="header__icono-boton"
            onClick={() => toggleCompletada()}
          />
        </button>
      }
    </header>
  );
}
 
export default Header;