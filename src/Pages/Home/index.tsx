import './styles.css'
import { useEffect, useState } from 'react'
import { getCharacters } from '../../services/marvel'
import { GetHeroesResponseSchema, GetCharactersResponse } from '../../services/marvel/schema'

export function Home(){
  const [heroes, setHeroes] = useState<GetHeroesResponseSchema[]>([])
  // const [teste, setTeste] = useState<GetCharactersResponse[]>([])
  const [characterName, SetCharacterName] = useState<string>("")

  async function fetchData(){
    
    const response = await getCharacters()
    if(response){
      const characters = response.data.results
      // setTeste(response as GetCharactersResponse)
      setHeroes(characters)
      console.log('heroes', characters)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='container'>
      <header>
        <div className='header'>
          <h1>Marvel Heroes</h1>
        </div>
      </header>
      <div className='nav'>
        <input type="text" placeholder='personagem' onChange={value=> SetCharacterName(value.target.value)}></input>
        {/* <button onClick={}></button> */}
        <p>{characterName}</p>
      </div>
      <div className='main-content'>
      {/* <button onClick={TESTE}></button> */}

          {heroes?.map(hero =>(
            <a href={`/details/${hero.id}`} className='hero-info' key={hero.id}>
              <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt={hero.name} />
              <div className='hero-name'>
                <p>{hero.name}</p>
                <p>Veja mais detalhes</p>           
              </div>
            </a>
          ))}

      </div>
      
    </div>
  )
}