import React from 'react';
import {FaFacebookSquare,FaYoutube} from 'react-icons/fa'
import './footer.css';

export default function footer(){

return(

    <div>
        <div className='footer'>
        <a href='https://www.youtube.com/channel/UC1S6u7hCP8qwEG8wHLPdTEg'
        rel="noopener noreferrer"
        target='_blank'>
            <FaYoutube size={50} id="youtube"/>
            </a>
            
            <a href='https://www.facebook.com/daniel.carvalho.77377/'
            rel="noopener noreferrer"
            target='_blank'>
                <FaFacebookSquare id="facebook" size={50}/>
            </a>
        </div>
    </div>

);

}