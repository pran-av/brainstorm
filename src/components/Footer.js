import React from 'react';
import { Button } from './button'
import './Footer.css'
import { Link } from 'react-router-dom';

function Footer() {
  return(
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the newsletter to receive updates.
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe anytime.
        </p>
        <div className='input-areas'>
          <form>
            <input type='email' name='email' placeholder='Your Email'
            className='footer-input' />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-links-wrapper'>
          <div className='footer-links-items'>
            <h2>Check out:</h2>
            <Link to='/login'>Login</Link>
            <Link to='/about'>About Us</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/topBlogs'>Top Blogs</Link>
            <Link to='/'>Privacy Policy</Link>
          </div>
        </div>
      </div>
      <section>
        <div className='social-media'>
          <div className='social-media-wrap'>
            <div className='footer-logo'>
              <Link to='/' className='social-logo'>
                Brainstorm <i className='fab fa-typo3' />
              </Link>
            </div>
            <small className='website-rights'>Brainstorm @ 2020</small>
            <div className='social-icons'>
              <Link
                className='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='Twitter'
              >
                <i class='fab fa-twitter' />
              </Link>
              <Link
                className='social-icon-link instagram'
                to='/'
                target='_blank'
                aria-label='Instagram'
              >
                <i class='fab fa-instagram' />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer;
