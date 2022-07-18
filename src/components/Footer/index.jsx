import React from 'react';
import './index.css';
import LogoBlack from '../../image/LogoBlack.png';
import Map from '../../image/Rectangle.png';

const Footer = () => {
    return (
        <footer>
             <div className='container-two'>
                <div className='logo'>
                    <img alt="Saturn" src={LogoBlack} className="logo__black"/>
                    <h4>Адрес</h4>
                    <p>ул. Строительная, 11, Екатеринбург</p>
                    <p>hello@saturn.pro</p>
                    <p>+ 7 922 555 1234</p>
                    <ul className="soc">
                        <p>Соцсети</p>
                        <li><a href="">Telegram</a></li>
                        <li><a href="">Twitter</a></li>
                        <li><a href="">Pinterest</a></li>
                    </ul>
                    
                </div>
                <div className='map'>
                    <img alt="image_map" src={Map} className="img__map"/>
                </div>
                
           </div>
        </footer>
    )
}

export default Footer;