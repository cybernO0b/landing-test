import React from 'react';
import './index.css';
import LogoBlack from '../../image/LogoBlack.png';
import Map from '../../image/Rectangle.png';

const Footer = () => {
    return (
        <footer>
             <div className='container-footer'>
                <div className='logo'>
                    <img alt="Saturn" src={LogoBlack} className="logo__black"/>
                    </div>
                    
                 
                <div className='map'>
                    <img alt="image_map" src={Map} className="img__map"/>
                    </div>
                    <div className='links'>
                        <div className='link__one'>
                    <h4>Адрес</h4>
                    <li>ул. Строительная, 11, Екатеринбург</li>
                    <li>hello@saturn.pro</li>
                    <li>+ 7 922 555 1234</li>
                    </div>
                        <div className='link__two'>
                        <h4>Соцсети</h4>
                        <li><a href="">Telegram</a></li>
                        <li><a href="">Twitter</a></li>
                        <li><a href="">Pinterest</a></li>
                        </div>
                    </div>
           </div>
           
        </footer>
    )
}

export default Footer;