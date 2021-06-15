const Filter = ({priceFilter, setPriceFilter,setContent}) =>{

  function onchange(index){
    setContent('searchCards')
    var currValue = priceFilter
    var value = document.getElementById("price"+index).value
    if(value==""){
      index==0?value=0:value=10000
    }
    currValue[index] = value
    setPriceFilter([...currValue])
  }

  function removeFilters(){
    for(let id of ["price0","price1","searchTXT"]){
      document.getElementById(id).value=""
    }
    setContent('showCards')
  }

  return(
    <div className="filter b">
      <div className="price-filter">
        <div>
          <span>ЦЕНА</span><br/>
          <span>ОТ:</span>
          <input id="price0" onChange={()=>onchange(0)} type="text" placeholder="0"/>
          <span>ДО:</span>
          <input id="price1" onChange={()=>onchange(1)} type="text" placeholder="10000"/><br/>
          <button onClick={()=>removeFilters()}>ПОКАЗАТЬ ВСЕ ТОВАРЫ</button>
        </div>
      </div>
      <div  className="creator-filter">
        <div className="inner">
          <div>ПРОИЗВОДИТЕЛЬ</div>
          <div><input type="checkbox"/>Producent1</div>
          <div><input type="checkbox"/>Producent2</div>
          <div><input type="checkbox"/>Producent3</div>
          <div><input type="checkbox"/>Producent4</div>
          <div><input type="checkbox"/>Producent5</div>
          <div><input type="checkbox"/>Producent6</div>
        </div>
        
      </div>
    </div>
  )
}

export default Filter