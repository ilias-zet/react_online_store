import React, { useState , useContext} from 'react';

const CardFull = ({cards,selectedCard,setContent,returnCard,setMyCart,myCart}) =>{
  const [count, setCount] = useState(1)
  const card = returnCard(selectedCard)
  return(
    <div className="card-full">
      <div className="card-full-header">
        <button 
            style={{
              border:'none',
              borderRadius:"7px",
              padding:"5px",
            }}
            onClick={()=>setContent('showCards')
          }>
          <img className="icon" src="https://image.flaticon.com/icons/png/512/507/507257.png" alt=""/>
        НАЗАД</button>
        <span>Код товара: {card.id}</span>
      </div>
      <div className="card-full-body">
        <img src={card.image} alt=""/>
        <div className="card-description">
          <div className="card-full-title">{card.title}</div>
          <div className="card-full-description">{card.description}</div>
          <label style={{marginTop:"15px",fontWeight:"bold"}}>Рейтинг:
            <div className="rating">
              <div className="circle bgred" id="c0"></div>
              <div className="circle bgred" id="c1"></div>
              <div className="circle bgred" id="c2"></div>
              <div className="circle" id="c3"></div>
              <div className="circle" id="c4"></div>
              <span style={{
                color:'grey',
                fontSize:"12px",
                marginLeft:"5px"}}>({card.feedbacks.length} отзывов)</span>
            </div>
          </label>
          <label style={{marginTop:"15px",fontWeight:"bold"}}>Количество:
            <div className="count-switcher">
              <button onClick={()=>count>1?setCount(count-1):null}>-</button>
                <span id="count">{count}</span>
              <button onClick={()=>setCount(count+1)}>+</button>
            </div>
          </label>
          <label style={{marginTop:"15px",fontWeight:"bold"}}>Итоговая цена:
            <div className="total-price">
              <span className="r">{card.price*count+" "}</span>USD
            </div>
          </label>
          <button className="orderBTN">ОФОРМИТЬ ЗАКАЗ</button>
          {myCart.indexOf(card)==-1
          ?<button className="add-to-cart"
            onClick={()=>{
                setMyCart([...myCart,card])
                alert('Товар успешно добавлен в корзину!')
                setContent('showCards')
            }}>
            ДОБАВИТЬ В КОРЗИНУ</button>
          :<button className="add-to-cart"
            onClick={()=>{
              let newCart = myCart
              newCart.splice(newCart.indexOf(card,1))
              setMyCart([...newCart])
              alert("Товар успешно удален из корзины")
            }}
          >УДАЛИТЬ ИЗ КОРЗИНЫ</button>
          }
        </div>
      </div>
    </div>
  )
}

export default CardFull