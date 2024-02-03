import productData from "../../data/products";

function Products() {
  const elems = productData.map((item) => {
    return (
      <div
        className="text-center p-2 flex flex-col gap-5 justify-center"
        key={item.id}
      >
        <img className="max-w-full self-center sm:max-w-64" src={item.img} />
        <h6 className="font-bold">{item.name}</h6>
        <p>{item.price}</p>
        <p>{item.roastType}</p>
        <p>{item.stars}</p>
        <p>{item.description}</p>
        <button className="bg-green-500 hover:bg-green-900 px-2 text-green-50 py-1 rounded self-center">
          Purchase
        </button>
      </div>
    );
  });

  return (
    <div
      id="products"
      className="bg-cyan-800 text-neutral-50 grid gap-4 lg:grid-cols-3"
    >
      {elems}
    </div>
  );
}

export default Products;
