import './styles.css'
import { useEffect, useState } from 'react'
import { getCharacters } from '../../services/marvel'
import { GetCharactersResponseSchema, GetCharactersResponse } from '../../services/marvel/schema'
import ReactPaginate from 'react-paginate';

export function Home(){
  const [heroes, setHeroes] = useState<GetCharactersResponseSchema[]>([])
  const [characterName, SetCharacterName] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const [pageCount, setPageCount] = useState<number>(0)
  const pageSize = 30

  async function fetchData(currentOffset = 0){
    
    const response = await getCharacters({orderBy: "name", limit: pageSize, offset: currentOffset})
    if(response){
      const characters = response.data.results
      console.log(response)
      setHeroes(characters)
      setPageCount(Math.ceil( response.data.total / pageSize))
      console.log('heroes', characters)
    }
  }

  const handlePageClick = async (offset:number) => {
    
    await fetchData(pageSize * offset)
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
        <input type="text" placeholder='Nome' onChange={value=> SetCharacterName(value.target.value)}></input>
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
      <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={(event)=>handlePageClick(Number(event.selected))}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={undefined}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeLinkClassName="active"
        />

    </div>
  )
}