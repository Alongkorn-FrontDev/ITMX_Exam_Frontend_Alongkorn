import React from "react";
import { Typography, Stack } from "@mui/material";
type Props = {};
import Image from "next/image";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";


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

export default function CardProduct({ data }: Props) {
  const iconr2s = "/assets/icon-r2s.png";
  const iconPreOrder = "/assets/icon-pre-order.png";
  const product = "/assets/new-balance-530-white-silver-navy-1.jpg";
  const imgPath = "/assets/";

  return (
    <>
      <Stack direction="row" justifyContent="flex-start" alignItems="start" spacing={4}>
        <Typography variant="body2" component="p" gutterBottom>
          <span>
            <Image src={iconr2s} width={16} height={16} alt="Ready to Ship" />
          </span>
          Ready to Ship
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          <span>
            <Image src={iconPreOrder} width={16} height={16} alt="Pre-order" />
          </span>
          Pre-order
        </Typography>
      </Stack>
      <Card sx={{ maxWidth: "100%", border: 0 }} variant="outlined">
        <Image
            sx={{ width: '100%', height: 'auto'}}
          src={imgPath+data.image}
          width={550}
          height={410}
          layout="responsive"
          alt="new-balance-530-white-silver-navy"
        />
      </Card>
    </>
  );
}
