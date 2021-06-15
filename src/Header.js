const Header = ({setContent,setSearchString,myCart}) =>{
  var cartSum=0
  if(myCart.length){
    myCart.map((card) => cartSum+=card.price)
  }

  function searchButtonClick(){
    setContent('searchCards')
    var string = document.getElementById('searchTXT').value
    setSearchString(string)
  }

  return(
    <div className="header">
      <div className="header top">
        <div className="logo b">YOUR LOGO</div>
        <div className="contact">
          <span>(<span className="r">095</span>) 000 00 00</span>
          <span>(<span className="r">095</span>) 000 00 00</span>
          <span>(<span className="r">095</span>) 000 00 00</span>
          <span>(<span className="r">095</span>) 000 00 00</span>
          <span className="r">
            ВСЕ
            <img className="arrow" src="https://image.flaticon.com/icons/png/512/32/32195.png" alt=""/>
          </span>
        </div>
        <div className="settings">
          <div className="option b">Язык: 
            <span className="b r">RU</span>
            <img className="arrow" src="https://image.flaticon.com/icons/png/512/32/32195.png" alt=""/>
          </div>
          <div className="option b">Валюта: 
            <span className="b r">USD</span>
            <img className="arrow" src="https://image.flaticon.com/icons/png/512/32/32195.png" alt=""/>
          </div>
          <div className="option b">Акции
          </div>
        </div>
      </div>
      <div className="header bottom">
        <button>
          <img src="https://image.flaticon.com/icons/png/512/154/154335.png" alt=""/>
          КАТАЛОГ ТОВАРОВ
        </button>
        <input 
            type="text" 
            id="searchTXT" 
            placeholder="Поиск товара по названию или модели"
            onChange={()=>searchButtonClick()}/>
        <img src="https://image.flaticon.com/icons/png/512/3524/3524659.png" alt=""/>
        <img src="https://image.flaticon.com/icons/png/512/1077/1077114.png" alt=""/>
        <img src="https://image.flaticon.com/icons/png/512/3121/3121540.png" alt=""/>
        <div className="cart" onClick={()=>setContent('myCart')}>
          <img src="https://image.flaticon.com/icons/png/512/25/25619.png" alt=""/>
          <div className="r b">{cartSum}</div> USD
        </div>  
      </div>
    </div>
  )
}
export default Header