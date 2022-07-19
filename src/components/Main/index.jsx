import React from 'react';
import './index.css';
import LogoWhite from '../../image/LogoWhite.png';




const Main = () => {
    return (
        <main>
           <div className="container-main">
                <div className='logo'>
                <img alt="Saturn" src={LogoWhite} className="logo__pic"/>
                </div>
                <div className='text-one'>
                    <h1>
                        Жилой комплекс в центре города
                    </h1>
                </div>
                <div className='text-two'>
                        Создатели проекта хотели создать для вас атмосферу бесконечного космического пространства, спокойствия и уединения в окружении элегантных интерьеров.
                </div>
                <button className='first-btn'>
                    <b>Записаться на просмотр</b>
                </button>
                
           </div>
          
        </main>
    )
}

export default Main;