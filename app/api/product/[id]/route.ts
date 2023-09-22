import { NextResponse } from "next/server";
import { getById, getProductById, updateProduct, deleteProduct } from "@/lib/data";


export const GET = async (req: Request) => {
  try {
    const id = req.url.split("product/")[1];
    const product = getProductById(id);
    if (!product) {
      return NextResponse.json({ error: "Error", error }, { status: 404 });
    }
    return NextResponse.json({ messege: "OK", product }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Error", error }, { status: 500 });
  }

};

export const PUT = async (req: Request) => {
  try {
    const { title, desc, image, price, countInStock }  = await req.json();
    const id = req.url.split("product/")[1];
    
    updateProduct(id, title, desc, image, price, countInStock)
    return NextResponse.json({messege: "OK"},{ status: 200 })

  } catch (error) {
    return NextResponse.json({ error: "Error", error }, { status: 500 });
  }
};

export const DELETE = async (req: Request) => {
  try {
    const id = req.url.split("product/")[1];
    deleteProduct(id)
    return NextResponse.json({messege: "OK"},{ status: 200 })
  } catch (error) {
    return NextResponse.json({ error: "Error", error }, { status: 500 });
  }
};
