"use client";

import React, { useState } from "react";
import Catalog, { ProductType } from "./Catalog";
import Preview from "./Preview";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductType>({
    id: "1",
    imgSrc: "/assets/keyboard1.png",
    title: "Magic Keyboard",
    price: 79.99,
    modelSrc: "/assets/keyboard.glb",
  });

  const handleProductClick = (product: ProductType) => {
    setSelectedProduct(product);
  };

  return (
    <div>
      <Catalog
        onproductClick={handleProductClick}
        selectedProduct={selectedProduct}
      />
      <Preview />
    </div>
  );
};

export default Products;
