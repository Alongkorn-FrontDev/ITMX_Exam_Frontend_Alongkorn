import { NextResponse } from "next/server";
import { getProduct, addProduct, addProductNew, getAllProducts } from '@/lib/data';

export const GET = async (req: Request, res: Response) => {
  try {
    const products = getAllProducts();
    return NextResponse.json({ messege: "OK", products }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Error", error }, { status: 500 });
  }
};

export const POST = async (req: Request, res: Response) => {
  const { title, desc, image, price, countInStock }  = await req.json();
  try {
    const product = { id: Date.now().toString(), title, desc, image, price, countInStock, date: new Date() };
    addProduct(product); 
    return NextResponse.json({ messege: "OK", product }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Error", error }, { status: 500 });
  }
};  
