import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return(
    <div className='cards'>
      <h1>Recent Blogs:</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src= './images/pexels-polina-zimmerman-3747553.jpg'
              text= 'Developing a Minimum Viable Product'
              label= 'Startups'
              path= '/topBlogs'
            />
            <CardItem
              src= './images/pexels-polina-zimmerman-3747553.jpg'
              text= 'Angel Investing from a millennial perspective'
              label= 'Startups'
              path= '/topBlogs'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
