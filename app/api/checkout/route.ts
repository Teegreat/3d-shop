import { CartProduct } from "@/components/sections/Cart";
import { stripe } from "@/lib/stipe";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: Request) {
  try {
    const { products }: { products: CartProduct[] } = await req.json();

    if (!products || products.length === 0) {
      return new NextResponse("Products are required", { status: 400 });
    }

    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

    products.forEach((product) => {
      line_items.push({
        price_data: {
          currency: "usd",
          product_data: {
            name: product.title,
          },
          unit_amount: Math.round(product.price * 100),
        },
        quantity: product.quantity,
      });
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      billing_address_collection: "required",
      phone_number_collection: { enabled: true },
      success_url: `${process.env.HOST}`,
      cancel_url: `${process.env.HOST}`,
    });

    return NextResponse.json({ url: session.url }, { status: 200 });
  } catch (error) {
    console.error("Error creating stripe session:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
