import React from 'react';
import {FaFacebookSquare,FaYoutube,FaTwitter} from 'react-icons/fa'
import './footer.css';

const Youtube = "https://www.youtube.com/channel/UC1S6u7hCP8qwEG8wHLPdTEg";
const Facebook = "https://www.facebook.com/daniel.carvalho.77377/"
const Twitter = "https://twitter.com/daniel_cd99"

export default function footer(){

return(

    <div id="footer">
      Saiba mais
      <div className="icons">
        <a href={Youtube} target='_blank'rel="noopener noreferrer" >
          <FaFacebookSquare size={60} id="facebook"/>
        </a>
        <a href={Facebook}target='_blank'rel="noopener noreferrer" >
          <FaYoutube size={60} id="youtube"/>
        </a>
        <a href={Twitter}target='_blank'rel="noopener noreferrer" >
          <FaTwitter size={60} id="twitter"/>
        </a>
      </div>
    </div>

);

}

