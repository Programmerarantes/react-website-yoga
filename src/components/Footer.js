import React from "react";
import './Footer.css'
import * as BsIcon from 'react-icons/bs'


export default function Footer () {
    return (
        <div>
            <footer>
                <p>© 2023 Camila Florescer - Yoga e Doulagem</p>
                <ul className="socials">
                    <li>
                        <a href='https://www.instagram.com/camila.florescer/' target="_blank" rel="noreferrer">Instagram <BsIcon.BsInstagram/></a>
                    </li>
                    <li>
                        <a href='https://www.youtube.com/@camilaflorescer1670' target="_blank" rel="noreferrer">Youtube<BsIcon.BsYoutube/> </a>
                    </li>
                    <li>
                        <a href='https://api.whatsapp.com/send?phone=5548988036260&text=Ol%C3%A1%20Camila.%20Vi%20teu%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es' target="_blank" rel="noreferrer">WhatsApp <BsIcon.BsWhatsapp/></a>
                    </li>
                </ul>
             </footer>
        </div>
    )
}