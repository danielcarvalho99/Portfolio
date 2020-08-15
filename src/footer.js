import React from 'react';
import Youtube from './Images/youtubeIcon.png';
import Facebook from './Images/facebookIcon.png';
import './footer.css';

export default function footer(){

return(

    <div>
       <a href='https://www.youtube.com/channel/UC1S6u7hCP8qwEG8wHLPdTEg' target='_blank'>
           <img id='youtube'src={Youtube} alt='youtube' />
        </a>
        <a href='https://www.facebook.com/daniel.carvalho.77377/' target='_blank'>
            <img id='facebook'src={Facebook} alt='facebook'/>
        </a>
    </div>

);

}