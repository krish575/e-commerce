

const Practice = ({product_details , ...props}) => {
  return (
    <div>
        <h1>Name: {product_details.name}</h1>
         <h3>Price: {product_details.price.max}</h3>
        <h4>variants: {product_details.variants?.sizes?.map((size, index) => (<span>{size},</span>))}</h4>
    </div>
  )
}

export default Practice