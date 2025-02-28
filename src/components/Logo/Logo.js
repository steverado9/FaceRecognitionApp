import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className='Tilt br2 shadow-2' style={{width : '120px', height: '120px'}}>
                <div className='p3'>
                    <img style={{paddingTop: '10px'}} alt='logo' src={brain}/>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;