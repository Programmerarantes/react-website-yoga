import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className='home'>
       <section id="container-one" className="container-one">
            <div className="box-container-one">
                <div className="intro">
                    <span className="separator">-
                        <span className="legend">Yoga para Gestantes e Parto Ativo</span>
                    </span>
                    <div className="text-one">
                        <h3>Um momento especial de conexão com o seu corpo e com o seu bebê.</h3>
                        <p>Aulas de yoga pré-natal preparatórias para o parto e pós parto, conduzidas por uma professora e doula especializada!</p>
                    </div>
                </div>
                <div className="btn-container">
                    <a className="btn-one" href="./">CONHEÇA OS BENEFÍCIOS</a>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Home