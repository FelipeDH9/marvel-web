import './styles.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetCharacterByIdResponse, GetCharactersResponseSchema } from '../../services/marvel/schema'
import { getCharacterById } from "../../services/marvel/index"
import { url } from 'inspector'



export function Details(){
  const { characterId } = useParams()
  const [currentCharacter, setCurrentCharacter] = useState<GetCharactersResponseSchema[]>([])

  async function getCharacter(){
    const res = await getCharacterById(Number(characterId))
    console.log('res =>', res)
    const characterById = res.data.results
    console.log('characterById', characterById[0])
    setCurrentCharacter(characterById)
  }

  useEffect(() => {
   getCharacter()
  }, [])

  return(
    <div className='container'>

      <header>
        <div className='header'>
          <a href="/">Voltar</a>
          <h2>{currentCharacter[0]?.name}</h2>
        </div>
      </header>

      <div className='main'>
        <div className='image-desc'>
          <img src={`${currentCharacter[0]?.thumbnail.path}.${currentCharacter[0]?.thumbnail.extension}`} alt="hero's image" />
          {currentCharacter[0]?.description && (
            <>
              <h2>Description</h2>
              <p>{currentCharacter[0]?.description}</p>
            </>
          )}
          {currentCharacter[0]?.urls.map(url => (
            url.type === "wiki" && <a href={url.url} target="_blank">All details about {currentCharacter[0]?.name}</a>
          ))}
        </div>
        
        <div className='comics'>
          <h2>Comics</h2>
          {currentCharacter[0]?.comics.items.map(comic => (
            <li>{comic.name}</li>
          ))}
        </div>
      </div>
    </div>
  )
}