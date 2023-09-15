import dbConnect from "@/libs/mongoDB";
import Customer from "@/models/customer";
import { NextResponse } from "next/server";


export async function GET(){
    await dbConnect();
    const customers = await Customer.find();
    return NextResponse.json({customers});
}

export async function POST(req){
    const {name, email, phoneNumber} = await req.json();
    await dbConnect();
    await Customer.create({name, email, phoneNumber});
    return NextResponse.json({message:"User Created"},{status: 200});
}

export async function DELETE(req){
    const id = req.nextUrl.searchParams.get("id");
    await dbConnect();
    await Customer.findByIdAndDelete(id);
    return NextResponse.json({message:"Customer Deleted"},{status:200})
}