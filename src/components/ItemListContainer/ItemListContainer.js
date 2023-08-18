import {useState, useEffect} from 'react';
import { getData, getCategoryData } from "../../services/firebase";
import Item from '../Item/Item';
import {useParams} from "react-router-dom";
import { Waveform } from '@uiball/loaders'




const ItemListContainer = () => {

  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const {categoryId} = useParams();

  

  useEffect(()=>{
    setIsLoading(true);
    async function requestProducts(){
      let respuesta = categoryId ? await getCategoryData(categoryId) : await getData();
      setProducts(respuesta);
      setIsLoading(false);
    }
    requestProducts()
  }, [categoryId])

  if(isLoading){
    return <Waveform className="waveform" 
    size={40}
    lineWeight={3.5}
    speed={1} 
    color="black" 
   />
  }
  if (products.lenght === 0){
    return <h1>No hay productos disponibles para esta consulta</h1>
  }
  

  return (
    <div className="itemsContainer">
      {products.map((item) => <Item key={item.id} className="itemCard" {...item}/>)}
    </div>
  
   
  );
}

export default ItemListContainer
