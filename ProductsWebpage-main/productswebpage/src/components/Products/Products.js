import React, { useEffect } from 'react'
import './Products.css'
import Card from './Card'

function Products() {
  const [loadedProductList, setLoadedProductList] = React.useState([])
  useEffect(()=>{

    fetch('https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json')
    .then(res => res.json())
    .then(data => {
      const loadedProductList = [];

      for(const key in data)
      {

        loadedProductList.push({
          key:key,
          id: data[key].id,
          newPrice: data[key].newPrice,
          oldPrice: data[key].oldPrice,
          productImage:data[key].productImage,
          productName:data[key].productName,
        })
        // console.log(loadedProductList)
      }
      setLoadedProductList(loadedProductList);
      
    })
    

  }, [])
 
  return (
    <div>
    <h2 className='nav-heading'>Products</h2>
    <div className="products-container cards-container">
        
        {/* {
          console.log(loadedProductList)
        } */}
        {
          
          loadedProductList && loadedProductList.map((item, index)=>{
            return (
              <React.Fragment key={item.key}>
                <Card details={item} />
              </React.Fragment>
            )
          })
        }
        
    </div>
    </div>
  )
}

export default Products