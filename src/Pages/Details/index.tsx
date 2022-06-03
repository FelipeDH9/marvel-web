import './styles.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetCharactersByIdResponse } from '../../services/marvel/schema'
import { getCharactersById } from "../../services/marvel/index"

export function Details(){
  // const { id } = useParams()
  const {teste}  = useParams();
  // const teste:number = useParams()
  const [currentCharacter, setCurrentCharacter] = useState({})
  const [characterById, setCharacterByI] = useState<GetCharactersByIdResponse[]>([])

  async function getCharacter(){
    String(teste)
    // const res = await getCharactersById(teste)
  }
  useEffect(() => {

  }, [])

  return(
    <div className='container'>

      <header>
        <div className='header'>
          <a href="/">Voltar</a>
          <h2>NOME DO HEROI</h2>
        </div>
      </header>

      <div className='main'>
        <div className='image-desc'>
          <img src="https://bimmridder.com/wp-content/uploads/2016/09/placeholder-300x400.png" alt="hero's image" />
          <h2>Description</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint amet necessitatibus repudiandae perferendis. Sed accusantium doloremque omnis, dolores nam totam voluptatum error magni consectetur explicabo quo aspernatur officiis alias laboriosam.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quis veniam doloremque architecto soluta esse sapiente cupiditate nemo ea laboriosam modi nisi repudiandae nihil itaque, aliquam adipisci qui quidem placeat!</p>
        </div>
        
        <div className='comics'>
          <h2>Comics</h2>
          <p>FAZER MAP DOS COMICS DESSE PERSONAGEM E IMPRIMIR NA TELA OS TITULOS</p>
          {/* XXX.map(xx => (
            <p>{xx.comics}</p>
          )*/}
        </div>
      </div>
    </div>
  )
}