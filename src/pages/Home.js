import React from 'react'
import './Home.css'
import * as BsIcon from 'react-icons/bs' 
import ImageYoga5 from './images/yoga5.png'
import WhatsBtn from '../components/WhatsBtn'

function Home() {
  return (
    <>
        <section className='container-one'>
            <div className="home-text">
                <h2>EMPODERAMENTO, CENTRAMENTO E TRANQUILIDADE: YOGA PRENATAL ONLINE</h2>
                <p>Você pode ter uma experiência de gravidez e pós parto mais equilibrida e fortalecida através do yoga</p>
                < WhatsBtn />
            </div>
        </section>
        <section className='container-two'>
          <div className='two-text'>
            <h4>Você sabia que praticar Yoga pré-natal pode ajudar a reduzir a ansiedade, o estresse e também reduzir o risco de complicações de saúde para você e para o bebê?</h4>
            <p>Reservar um tempinho para praticar yoga permite que você mantenha espaço para cultivar a saúde e o bem-estar seu e de seu bebê durante a incrível jornada que é a gravidez.</p>
            <p>Durante nossas aulas vamos juntas explorar uma variedade de posturas de yoga seguras e apropriadas, exercícios funcionais, técnicas de respiração e práticas de meditação especificamente adaptadas para gestação e todo processo do nascimento.</p>
            <p>Não se trata apenas de exercícios - trata-se de construir uma comunidade solidária que se acolhe em cada passo do caminho. Além de uma conexão profunda entre cada mamãe e seu (sua) bebê</p>
            <p>Em nosso ambiente de grupo, você terá a oportunidade de se conectar com outras futuras mamães incríveis que estão compartilhando um caminho semelhante e trocar muitas experiências!</p>
            <p>Meu objetivo é fornecer a você um espaço seguro onde você possa trocar livremente experiências, momentos e receber o suporte necessário.</p>
          </div>
        </section>
        <section className='container-three'>
          <div class="wrapper-container">
            <div className='text-three'>
              <img src={ImageYoga5} alt="Yoga"/>
              <h3>O que você aprenderá em minhas aulas <BsIcon.BsFlower2/></h3>
              <p>1. Principais posturas de yoga e exercícios funcionais que não apenas aliviam o desconforto, previnem lesões e relaxam você, mas também preparam você para o parto e pós-parto.</p>
              <p>2. Técnicas de respiração que servem como ferramentas poderosas para lidar com as contrações, reduzir a ansiedade e encontrar uma profunda sensação de calma em meio à intensidade do trabalho de parto. Essas técnicas também suportam a força e a estabilidade da região abdominal e do assoalho pélvico, ao mesmo tempo que trazem relaxamento e entrega.</p>
              <p>3. Ferramentas e recursos personalizados para apoiá-la em seu caminho único para a maternidade, seja sua primeira vez ou se você já é uma mãe experiente. Você receberá orientações que irão nutrir sua confiança e capacitá-la nesta jornada incrível, como Pdf's com afirmações positivas e hypnobirthing, indicações de livros, meditações guiadas e aulas especiais gravadas para fazer antes ou durante o trabalho de parto e pós parto imediato</p>
            </div>
          </div>
        </section>
    </>
  )
}

export default Home