import React, { useState, useEffect } from "react";
import Card from "components/HomeComp/Card";
import axios from "axios";

function HomeScreen() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <main>
      <div className="row center">
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </main>
  );
}

export default HomeScreen;
