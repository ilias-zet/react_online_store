import React, { useState , useContext} from 'react';

const AddCard = ({cards,setCards,setContent}) =>{
  const [maxId,setMaxId] = useState(1000)
  const [files,setFiles] = useState([])
  const [drag, setDrag] = useState(false)
  var reader = new FileReader()
  var uploadImg
  if(files[0]){
    reader.readAsDataURL(files[0])
  }
  reader.onloadend = () =>{
    uploadImg = reader.result
  }
  function addCard(){
    var title = document.getElementById('title').value
    var description = document.getElementById('description').value
    var price = document.getElementById('price').value
    if(!uploadImg){
      uploadImg = "https://mizez.com/custom/mizez/img/general/no-image-available.png"
    }
    var newCard = {
      id:maxId,
      image:uploadImg,
      title:title,
      rating:0,
      price:price,
      feedbacks:[],
      description:description,
    }
    setCards([...cards,newCard])
    setContent('showCards')
    setMaxId(maxId+1)
    setFiles([])
  }
  function dragStartHandler(e){
    e.preventDefault()
    setDrag(true)
  }
  function dragLeaveHandler(e){
    e.preventDefault()
    setDrag(false)
  }
  function onDropHandler(e){
    e.preventDefault()
    var loadedFiles = [...e.dataTransfer.files]
    setFiles([...loadedFiles])
    setDrag(false)
  }
      return(
        <div className="bgdark">
          <div className="add-card-form">
            <div className="inputTXT">
              <label>Название товара:
                <input type="text" id="title"/>
              </label>
              <label>Цена:
                <input type="text" id="price"/>
              </label>
            </div>
            <span>Описание товара</span>
            <textarea id="description"/>
            <div className="drop-area">
              {drag
                ?<div className='drop-active'
                  onDragStart={e => dragStartHandler(e)}
                  onDragLeave={e => dragLeaveHandler(e)}
                  onDragOver={e => dragStartHandler(e)}
                  onDrop={e => onDropHandler(e)}
                  >Отппустите изображение, чтобы загрузить</div>
                :<div
                  onDragStart={e => dragStartHandler(e)}
                  onDragLeave={e => dragLeaveHandler(e)}
                  onDragOver={e => dragStartHandler(e)}

                >Перетащите изображение, чтобы загрузить</div>
              }
            </div>
            <div className="loaded">
              {files.map(file => <span>{file.name}</span>)}
            </div>
            <button onClick={()=>addCard()}>ДОБАВИТЬ</button>
            <button className="bgred" onClick={() => setContent('showCards')}>ОТМЕНА</button>
          </div>
        </div>
      )
}

export default AddCard