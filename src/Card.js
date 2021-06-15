const Card = ({setContent,setSelectedCard,id,image,title,rating,price,feedbacks}) =>{
  return(
      <div className="card">
        <img src={image}/>
        <div className="card-content">
          <div className="card-title b">
            {title}
            <div className="rating">
              <div className="circle bgred" id="c0"></div>
              <div className="circle bgred" id="c1"></div>
              <div className="circle bgred" id="c2"></div>
              <div className="circle" id="c3"></div>
              <div className="circle" id="c4"></div>
              <span style={{
                color:'grey',
                fontSize:"12px",
                marginLeft:"5px"}}>({feedbacks.length} отзывов)</span>
            </div>
          </div>
          <div className="card-icons">
            <img src="https://image.flaticon.com/icons/png/512/149/149763.png" alt=""/>
            <img src="https://image.flaticon.com/icons/png/512/3121/3121540.png" alt=""/>
          </div>
        </div>
        <div className="card-buy b">
          <div className="card-price r">{price}<div style={{color:"grey"}}>USD</div></div>
          <button onClick={()=> {
            setContent('cardFull')
            setSelectedCard(id)
        }}>КУПИТЬ</button>
        </div>
      </div>
  )
}
export default Card