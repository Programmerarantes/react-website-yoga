import React from 'react'
import './Home.css'
import * as BsIcon from 'react-icons/bs' 

function Home() {
  return (
    <>
        <section className='container-one'>
            <div className="home-text">
                <h2>EMPODERAMENTO, CENTRAMENTO E TRANQUILIDADE: YOGA PRENATAL ONLINE</h2>
                <p>Você pode ter uma experiência de gravidez e pós parto mais equilibrida e fortalecida através do yoga</p>
                <a href="https://api.whatsapp.com/send?phone=5548988036260&text=Ol%C3%A1%20Camila.%20Vi%20teu%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es" target='_blank' rel="noreferrer">Agende sua aula <BsIcon.BsWhatsapp/></a>
                
            </div>
        </section>
    </>
  )
}

export default Home