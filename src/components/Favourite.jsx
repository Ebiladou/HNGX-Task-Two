import React, {useState} from 'react';
import fave from '../assets/Favorite.png'

function Favorite() {

    const [iconColor, setIconColor] = useState('white');
  
    const toggleIconColor = () => {
      if (iconColor === 'white') {
        setIconColor('red');
      } else if (iconColor === 'red') {
        setIconColor('white');
      }
    };

  return (
    <>
      <div className="fave-icon">
        <img src={fave} alt="favorite icon" className='fave-image' style={{ backgroundColor: iconColor, cursor: 'pointer' }}onClick={toggleIconColor}/> 
      </div>
    </>
  );
}

export default Favorite;