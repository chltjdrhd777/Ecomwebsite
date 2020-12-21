import React from "react";
import Card from "components/HomeComp/Card";
import { data } from "data";

function Main() {
  console.log(data);
  return (
    <main>
      <div className="row center">
        {data.products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </main>
  );
}

export default Main;
