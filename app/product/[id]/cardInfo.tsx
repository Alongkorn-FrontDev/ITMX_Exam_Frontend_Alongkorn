import React from "react";
import { Typography, Stack } from "@mui/material";
type Props = {};
import Image from "next/image";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AddToCart from "../../components/AddToCart";

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

export default function CardProduct({ data }: ProductsData) {
  const iconInfo = "/assets/icon-info.png";
  const iconShipping1 = "/assets/icon-shipping-1.png";
  const iconShipping2 = "/assets/icon-shipping-2.png";
  const iconAuthen = "/assets/icon-authen.png";
  const iconAntifraud = "/assets/icon-anti-fraud.png";

  return (
    <>
      <Stack sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          {data.title}
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          {data.desc}
        </Typography>
      </Stack>
      <Stack
        direction="row"
        spacing={4}
        justifyContent="space-between"
        alignItems="center"
        sx={{
          borderBottom: {
            sx: "unset",
            md: "1px solid #ddd",
            lg: "1px solid #ddd",
          },
          py: 4,
          px: { sm: 0, md: 4 },
        }}
      >
        <Box>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ display: "inline", textAlign: "center" }}
          >
            <div style={{ fontSize: "10px" }}>Price</div>
            {data.price.toLocaleString("th-TH", {
              style: "currency",
              currency: "THB",
            })}
          </Typography>
        </Box>
      </Stack>
      <Stack sx={{ my: 4 }} direction="row">
        <Typography variant="h5" component="h2" gutterBottom>
          Shipping Method
        </Typography>
        <Image src={iconInfo} width={16} height={16} alt="Shipping Method" />
      </Stack>
      <List
        sx={{
          borderBottom: {
            sx: "unset",
            md: "1px solid #ddd",
            lg: "1px solid #ddd",
          },
          px: { sm: 0, md: 4 },
          py: { sm: 0, md: 4 },
          mb: 4,
        }}
      >
        <ListItem>
          <ListItemIcon>
            <Image
              src={iconShipping1}
              width={30}
              height={30}
              alt="Same day delivery"
            />
          </ListItemIcon>
          <ListItemText
            primary="Same day delivery"
            secondary="Messenger delivery on scheduled date & time (fee based on distance)"
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Image
              src={iconShipping2}
              width={30}
              height={30}
              alt="Standard delivery"
            />
          </ListItemIcon>
          <ListItemText
            primary="Standard delivery"
            secondary="Ship via provided delivery service after authentication (3-5 days)"
          />
        </ListItem>
      </List>
      <Stack
        direction="row"
        spacing={4}
        justifyContent="space-around"
        alignItems="center"
        textAlign="center"
      >
        <Box>
          <Typography variant="body2" component="p" gutterBottom>
            <span style={{ display: { sm: "block", lg: "inline" } }}>
              <Image
                src={iconAuthen}
                width={20}
                height={20}
                alt="100% Authentic Guarantee"
              />
            </span>
            100% Authentic Guarantee
          </Typography>
        </Box>
        <Box>
          <Typography variant="body2" component="p" gutterBottom>
            <span>
              <Image
                src={iconAntifraud}
                width={20}
                height={20}
                alt="Anti Fraudulent transaction"
              />
            </span>
            Anti Fraudulent transaction
          </Typography>
        </Box>
      </Stack>
      <AddToCart
        showQty={false}
        product={data}
        increasePerClick={true}
        redirect={false}
      />
    </>
  );
}
