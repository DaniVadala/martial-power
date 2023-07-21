import {useState, useEffect} from 'react';
import getData, {getCategoryData} from '../Services/AsyncMock'
import Item from '../Item/Item';
import {useParams} from "react-router-dom";


const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const {categoryId} = useParams();

  async function requestProducts(){
   let respuesta = categoryId ? await getCategoryData(categoryId) : await getData();
    setProducts(respuesta);
  }

  useEffect(()=>{
    requestProducts()
  }, [categoryId])
  

  return (
    <div className="itemsContainer">
      {products.map((item) => <Item key={item.id} className="itemCard" {...item}/>)}
    </div>
  
   
  );
}

export default ItemListContainer
