export function ProductItem({ product }) {
  const currencies = {
    usd: "$",
    eur: "E"
  }

  return (
    <>
      <div className="card-image">
        <figure className="image image-wrapper">
          <img 
            className="image-content"
            src={product.image} 
            alt={product.name}
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
        <div className="title is-3">{product.name}</div>
        <div className="subtitle is-6">@ {product.type}</div>
        <div className="is-size-5">{currencies[product.currency]}{product.price}</div>
        </div>
      </div>
    </>
  )
}