import Card from './Card.js'
import AddCard from './AddCard.js'
import CardFull from './CardFull.js'

const Content = ({
  cards,
  setCards,
  content,
  setContent,
  setSelectedCard,
  selectedCard,
  returnCard,
  searchString,
  priceFilter,
  setMyCart,
  myCart,
}) =>{
  const returnCards = (cards_array) =>{
    return cards_array.map((card)=>{
      return(
        <Card 
        id={card.id}
        image={card.image} 
        title={card.title} 
        rating={card.rating}
        price={card.price}
        feedbacks={card.feedbacks}
        setContent={setContent}
        setSelectedCard={setSelectedCard}/>
      )
    })
  }
  const returnFilteredCards = () =>{
    var filtered = cards.filter(card => 
      (card.price>=priceFilter[0])&&
      (card.price<=priceFilter[1])&&
      ((card.title.match(new RegExp(searchString,'i')))||
      (card.id==searchString))
    )
    return filtered,returnCards(filtered)
  }
  switch(content){
    case 'showCards':{
      return(
        <div>
          <div className="card-editor">
            Здесь вы можете добавить несколько товаров 
            <button 
              onClick={() =>setContent('addCard')}
              style={{
              fontWeight: "bold",
              backgroundColor: "#ad3434",
              border:"none",
              color:"white",
              borderRadius:"7px",
              height: "40px",
              width:"100px",
              marginLeft:"10px",
          }}>ДОБАВИТЬ</button>
          </div>
          <div className="content">
            {returnCards(cards)}
          </div>
        </div>
      )
    }
    case 'addCard':{
      return(<AddCard cards={cards} setCards={setCards} setContent={setContent}/>)
    }
    case 'cardFull':{
      return(<CardFull 
        cards={cards} 
        selectedCard={selectedCard} 
        setContent={setContent}
        returnCard={returnCard}
        setMyCart={setMyCart}
        myCart={myCart}/>)
    }
    case 'searchCards':{
      return(
        <div className="content">
          {returnFilteredCards()[0]
            ?returnFilteredCards()
            :<div className="not-found">
              <img src="https://cdn1.iconfinder.com/data/icons/conversation/800/chat-answer-sad-256.png" alt=""/ >
              <span>По вашему запросу ничего не найдено</span>
            </div>
          }
        </div>
      )
    }
    case 'myCart':{
      return(
          <div className="content">
            {returnCards(myCart)[0]
              ?returnCards(myCart)
              :<div className="not-found">
                <img src="https://cdn1.iconfinder.com/data/icons/conversation/800/chat-answer-sad-256.png" alt=""/ >
                <span>В вашей корзине еще нет товаров</span>
               </div>}
        </div>
      )
    }
  }
}

export default Content