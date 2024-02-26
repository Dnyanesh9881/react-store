import React from 'react'

function Product({product}) {
  return (
    <div key={product.id} className='w-[300px]'>
        <div className='flex text-left justify-center'><img className='h-[270px] fit-cover' src={product.image} /></div>
        <div className='flex flex-col text-start gap-2'> 
            <h4 className='font-bold line-clamp-2'>{product.title}</h4>
            <p className='line-clamp-4'>{product.description}</p>
            <h4 className='font-bold'>Price : {product.price} $</h4>
            <button>Add to cart</button>
        </div>
    </div>
  )
}

export default Product