import "./Main.css"

const Main = (props) => {
  const {img,title,desc} = props
  return (
  
   <div className="main">
    
     <div className="card">
      <h2 className="title">{title}</h2>
      <img src={img} alt="" className="cardimg" />
      <p className="desc">{desc}</p>
      <button className="btn">More Detail</button>
      
    </div>
   </div>
  )
}

export default Main
