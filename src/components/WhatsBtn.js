import React from "react";
import * as BsIcon from 'react-icons/bs'
import './WhatsBtn.css'

export default function WhatsBtn () {
    return (
        <div className="whats-btn">
            <a href="https://api.whatsapp.com/send?phone=5548988036260&text=Ol%C3%A1%20Camila.%20Vi%20teu%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es" target='_blank' rel="noreferrer">Agende sua aula <BsIcon.BsWhatsapp/></a>
        </div>
    )
}