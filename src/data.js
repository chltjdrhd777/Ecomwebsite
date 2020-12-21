export const data = {
  products: [],
};

const dataMaker = (
  id,
  name,
  image,
  price,
  brand,
  rating,
  numReviews,
  description
) => {
  data.products.push({
    id,
    name,
    image,
    price,
    brand,
    rating,
    numReviews,
    description,
  });
};

dataMaker(
  1,
  "Happy Product1",
  "images/happy.jpg",
  120,
  "anon",
  5,
  10,
  "high quality product"
);

dataMaker(
  2,
  "Happy Product",
  "images/happy.jpg",
  120,
  "anon",
  4.5,
  10,
  "high quality product"
);
dataMaker(
  3,
  "Happy Product",
  "images/happy.jpg",
  120,
  "anon",
  4.5,
  10,
  "high quality product"
);
dataMaker(
  4,
  "Happy Product",
  "images/happy.jpg",
  120,
  "anon",
  4.5,
  10,
  "high quality product"
);
dataMaker(
  5,
  "Happy Product",
  "images/happy.jpg",
  120,
  "anon",
  4.5,
  10,
  "high quality product"
);
