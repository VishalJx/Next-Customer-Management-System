import dbConnect from "@/libs/mongoDB";
import Customer from "@/models/customer";
import { NextResponse } from "next/server";

export async function PUT(req, {params}){
    const {id} = params;
    const {name:name, email:email, phoneNumber:phoneNumber} = await req.json(); 
    await dbConnect();
    await Customer.findByIdAndUpdate(id, {name, email, phoneNumber});
    return NextResponse.json({message:"Customer Detail Updated"}, {status: 200});
}