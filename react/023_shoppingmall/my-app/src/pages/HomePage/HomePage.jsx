import { useState, useEffect,useContext} from 'react'
import { data } from '../../asset/data/data'
import ProductCard from '../../components/ProductCard/ProductCard'
import './homePage.css'

export default function HomePage() {
  // const [loadData, setLoadData] = useState([]);

  // useEffect(() => {

  // })

  const loadData = useContext(data);
  console.log(loadData);

  return (
    <main class="product">
        <ul class="product-list">
        {/* {data.map(item => 
                <ProductCard
                    key={item.id} 
                    productName={item.productName}
                    price={item.price}
                    thumbnailImg={item.thumbnailImg}
                />
        )} */}
        </ul>
        <a className='link-btn cart-link' href='#'></a>
    </main>
  )
}
