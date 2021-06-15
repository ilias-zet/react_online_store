import './App.css';
import Header from './Header.js'
import Filter from './Filter.js'
import cardsArr from './cardsArr.js'
import Content from './Content.js'
import React, { useState , useContext} from 'react';

const App = () =>{
  const [cards,setCardsValue] = useState(cardsArr)
  const [searchString,setSearchStringValue] = useState('')
  const [content,setContentValue] = useState('showCards')
  const [selectedCard,setSelectedCardValue] = useState(-1)
  const [priceFilter,setPriceFilterValue] = useState([0,10000])
  const [myCart,setMyCartValue] = useState([])

  function setSearchString(value){setSearchStringValue(value)}
  function setPriceFilter(array){setPriceFilterValue([...array])}
  function setSelectedCard(value){setSelectedCardValue(value)}
  function setContent(value){setContentValue(value)}
  function setCards(value){setCardsValue(value)}
  function setMyCart(value){setMyCartValue(value)}
  function returnCard(id){
    let card
    cards.map(c =>c.id==id
      ?card=c
      :null)
    return card
  }
  return(
    <div className="app">
      <Header setContent={setContent} setSearchString={setSearchString} myCart={myCart}/>
      <Body cards={cards} 
            content={content} 
            setContent={setContent}
            setCards={setCards}
            setSelectedCard={setSelectedCard}
            selectedCard={selectedCard}
            returnCard={returnCard}
            priceFilter={priceFilter}
            setPriceFilter={setPriceFilter}
            searchString={searchString}
            setMyCart={setMyCart}
            myCart={myCart}/>
    </div>
  )
}

const Body = ({
  cards,
  content,
  setContent,
  setCards,setSelectedCard,
  selectedCard,
  returnCard,
  priceFilter,
  setPriceFilter,
  searchString,
  setMyCart,
  myCart,
}) =>{
  return(
    <div className="body">
      <Filter 
        priceFilter={priceFilter} 
        setPriceFilter={setPriceFilter}
        setContent={setContent}/>
      <Content 
        cards={cards} 
        content={content} 
        setContent={setContent}
        setCards={setCards}
        setSelectedCard={setSelectedCard}
        selectedCard={selectedCard}
        returnCard={returnCard}
        priceFilter={priceFilter}
        searchString={searchString}
        setMyCart={setMyCart}
        myCart={myCart}/>
    </div>
  )
}
export default App;
