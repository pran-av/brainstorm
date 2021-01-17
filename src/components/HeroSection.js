import React from 'react';
import {Button} from './button';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return(
    <div className='hero-container'>
      <h1>Topic is not yet decided!</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book
      </p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Read the blog!
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
