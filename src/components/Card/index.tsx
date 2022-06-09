type PropsSchema ={
  name: string
}

export function Card(props:PropsSchema){
  return(
    <div className="container">
      <a href="#">
        <img src="#" alt="hero's image" />
        <div className="name-seemore">
          <h3>{props.name}</h3>
          <p>Veja mais detalhes</p>
        </div>
      </a>
    </div>
  )
}