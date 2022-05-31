import './styles.css'
import { useEffect, useState } from 'react'
import { getCharacters } from '../../services/marvel'

export function Home(){

  useEffect(() => {
    getCharacters()
  }, [])

  return (
    <div className='container'>
      <header>
        <div className='header'>
          <h1>Marvel Heroes</h1>
        </div>
      </header>

      <div className='main-content'>
          {/* FAZER UM MAP NA RESPOSTA DA API PARA PEGAR TODOS OS PERSONAGENS, E CRIAR UM a PARA CADA UM DELES */}
  
            <a href="/details" className='hero-info'>
              <img src="https://via.placeholder.com/40x40" alt="Hero" />
              <div className='hero-name'>
                <p>NOME DO HEROI</p>
                <p>Veja mais detalhes</p>           
              </div>
            </a>

            <a href="/details"  className='hero-info'>
              <img src="https://via.placeholder.com/40x40" alt="Hero" />
              <div className='hero-name'>
                <p>NOME DO HEROI</p>
                <p>Veja mais detalhes</p>           
              </div>
            </a>

            <a href="/details"  className='hero-info'>
              <img src="https://via.placeholder.com/40x40" alt="Hero" />
              <div className='hero-name'>
                <p>NOME DO HEROI</p>
                <p>Veja mais detalhes</p>           
              </div>
            </a>

            <a href="/details"  className='hero-info'>
              <img src="https://via.placeholder.com/40x40" alt="Hero" />
              <div className='hero-name'>
                <p>NOME DO HEROI</p>
                <p>Veja mais detalhes</p>           
              </div>
            </a><a href="/details"  className='hero-info'>
              <img src="https://via.placeholder.com/40x40" alt="Hero" />
              <div className='hero-name'>
                <p>NOME DO HEROI</p>
                <p>Veja mais detalhes</p>           
              </div>
            </a>

            <a href="/details"  className='hero-info'>
              <img src="https://via.placeholder.com/40x40" alt="Hero" />
              <div className='hero-name'>
                <p>NOME DO HEROI</p>
                <p>Veja mais detalhes</p>           
              </div>
            </a><a href="/details"  className='hero-info'>
              <img src="https://via.placeholder.com/40x40" alt="Hero" />
              <div className='hero-name'>
                <p>NOME DO HEROI</p>
                <p>Veja mais detalhes</p>           
              </div>
            </a>

            <a href="/details"  className='hero-info'>
              <img src="https://via.placeholder.com/40x40" alt="Hero" />
              <div className='hero-name'>
                <p>NOME DO HEROI</p>
                <p>Veja mais detalhes</p>           
              </div>
            </a><a href="/details"  className='hero-info'>
              <img src="https://via.placeholder.com/40x40" alt="Hero" />
              <div className='hero-name'>
                <p>NOME DO HEROI</p>
                <p>Veja mais detalhes</p>           
              </div>
            </a>

            <a href="/details"  className='hero-info'>
              <img src="https://via.placeholder.com/40x40" alt="Hero" />
              <div className='hero-name'>
                <p>NOME DO HEROI</p>
                <p>Veja mais detalhes</p>           
              </div>
            </a><a href="/details"  className='hero-info'>
              <img src="https://via.placeholder.com/40x40" alt="Hero" />
              <div className='hero-name'>
                <p>NOME DO HEROI</p>
                <p>Veja mais detalhes</p>           
              </div>
            </a>

            <a href="/details"  className='hero-info'>
              <img src="https://via.placeholder.com/40x40" alt="Hero" />
              <div className='hero-name'>
                <p>NOME DO HEROI</p>
                <p>Veja mais detalhes</p>           
              </div>
            </a>
             
      </div>
      
    </div>
  )
}