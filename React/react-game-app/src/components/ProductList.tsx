import { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  // added an inline interface "{ category: string }"
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("fetching products in", category);
    setProducts(["Dog1", "Dog2"]);
  }, [category]);

  return <div>ProductList</div>;
};

export default ProductList;
