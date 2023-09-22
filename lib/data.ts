const fs = require("fs");
const path = require("path");
const dataFilePath = path.resolve("./public/mock/products.json");

interface Product {
  id: string;
  title: string;
  desc: string;
  date: Date;
  image: string;
  price: number;
  countInStock: number;
}

interface ProductsData {
  products: Product[];
}

// const filePath = path.join(__dirname, './public/mock/products.json');
// console.log('Joined file path:', filePath);

// const resolvedPath = path.resolve('./public/mock/products.json');
// console.log('Resolved file path:', resolvedPath);

const readDataFromFile = (): ProductsData => {
  const jsonData = fs.readFileSync(dataFilePath, "utf-8");
  return JSON.parse(jsonData) as ProductsData;
};

const writeDataToFile = (data: ProductsData) => {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), "utf-8");
};


////////////////////////////////////////////////

export const getAllProducts = (): Product[] => {
  const data = readDataFromFile();
  return data.products;
};

export const getProductById = (id: string): Product | undefined => {
  const data = readDataFromFile();
  return data.products.find((product) => product.id === id);
};

export const addProduct = (product: Product): void => {
  const data = readDataFromFile();
  data.products.push(product);
  writeDataToFile(data);
};

export const updateProduct = (id: string, title: string, desc: string, image: string, price: number, countInStock: number) => {
    const data = readDataFromFile();
    const product = data.products.find((product) => product.id === id);

    if (product) {
        product.title = title;
        product.desc = desc;
        product.image = image;
        product.price = price;
        product.countInStock = countInStock;
        writeDataToFile(data);
    } else {
        throw new Error("NO POST FOUND");

    }
}

export const deleteProduct = (id: string): void => {
  const data = readDataFromFile();
  data.products = data.products.filter((product) => product.id !== id);
  writeDataToFile(data);
};