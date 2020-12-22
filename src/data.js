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
  description,
  countStocks
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
    countStocks,
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
  "high quality product",
  0
);

dataMaker(
  2,
  "Happy Product",
  "images/happy2.jpg",
  120,
  "anon",
  3.5,
  10,
  "high quality product",
  3
);
dataMaker(
  3,
  "Happy Product",
  "images/happy.jpg",
  120,
  "anon",
  4.5,
  10,
  "high quality product",
  5
);
dataMaker(
  4,
  "Happy Product",
  "images/happy.jpg",
  120,
  "anon",
  4.5,
  10,
  "high quality product",
  7
);
dataMaker(
  5,
  "Happy Product",
  "images/happy.jpg",
  120,
  "anon",
  4.5,
  10,
  "high quality product",
  3
);
