import React from 'react'
import './YogaCasal.css'
import WhatsupBtn from '../components/WhatsBtn'

export default function YogaCasal() {
  return (
    <>
        <section className='yoga--casal'>
            <div className="yogacasal--text">
                <h2>YOGA CASAL</h2>
                <hr/>
                <p>Já pensou em fazer uma prática de yoga com quem irá te acompanhar durante o parto?</p>
                <p>O Yoga Casal/em Dupla oferece uma oportunidade única para a dupla aumentar sua parceria, confiança e acolhimento durante a gestação e parto.</p>
                <p>Um dos focos desse workshop é como o acompanhante pode melhor estar e agir para ajudar a gestante durante o trabalho de parto.</p>
                <p>Além disso, é uma divertida prática de posturas de yoga feitas em contato físico com outra pessoa.</p>
                <p>A dupla experimenta uma sensação mais profunda de liberação e alongamento ao compartilhar peso e toque com seus parceiros.</p>
                <p>A prática ajuda a desenvolver um forte sentimento de conexão entre a família e o bebê que está por chega.</p>
            </div>
        </section>
        <section className='yogacasal--about'>
            <div className='about--text'>
                <h2>Os tópicos abordados incluem:</h2>
                <p>Sequências de yoga e posturas que podem ser úteis durante o trabalho de parto e parto.</p>
                <p>Posições alternativas de parto ativo e como entrar e sair delas.</p>
                <p>Como o acompanhante pode apoiar a gestante durante o parto de maneira segura, amorosa e consciente.</p>
                <p>Técnicas de massagem para aliviar a dor e aumentar endorfina.</p>
                <p>Técnicas com o rebozo para o alívio da dor, melhor posicionamento do bebê e relaxamento.</p>
                <p>Técnicas de respiração, mantras e vocalizações para facilitar o relaxamento e a abertura.</p>
                <p>Meditação e Hypnobirthing.</p>
                <WhatsupBtn/>
            </div>

        </section>
        </>
  )
}

