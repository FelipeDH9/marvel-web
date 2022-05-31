import './styles.css'

export function NotFound(){
  return(
    <div className='container'>
        <header>
          <div className='header'>
            <h1>Marvel Heroes</h1>
          </div>
        </header>
        <div className='content'>
          <h1>Página não encontrada</h1>
          <a href="/">Voltar para página inicial</a>

        </div>
    </div>
  )
}