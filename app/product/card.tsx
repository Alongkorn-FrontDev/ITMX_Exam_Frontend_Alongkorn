import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Link from 'next/link'
import AddToCart from '../components/AddToCart'

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


export default function CardProduct({ data, key }: ProductsData) {

  const imgPath = "/assets/";

  return (
    <>
      <Card sx={{ maxWidth: 440 }}>
        <CardActionArea>
          <Link href={`/product/${data.id}`} style={{ textDecoration: "none" }}>
          <CardMedia
            component="img"
            height="300"
            image={imgPath+data.image}
            alt={data.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ 
              minHeight: '65px',
              }}>
              {data.title}
            </Typography>
            <Typography variant="body2" color="text.secondary"sx={{ 
              minHeight: '65px',
              }}>
             {data.desc}
            </Typography>
            <Typography variant="h5" color="text.secondary">
             {data.price.toLocaleString("th-TH", {style:"currency", currency:"THB"})} 
            </Typography>
          </CardContent>
          </Link>
        </CardActionArea>
        <CardActions>
          <AddToCart 
           showQty={false}
           product={data}
           increasePerClick={true}
           redirect={false}
          />
      </CardActions>
      </Card>
    </>
  );
}
