// Read
import {NextRequest, NextResponse} from "next/server";
export async function GET( request: NextRequest){
    return NextResponse.json ({message:"Hello Machine!"});
}

//Create
export async function POST( request: NextRequest){
    const data = await request.json();
    console.log(data);
    return NextResponse.json({
        status: "Ok",
        foodName: data.foodName,
        time: "30mins"
    });
}

// Update
export async function PUT(request: NextRequest){
    const data = await request.json();
    return NextResponse.json({
        status: "Order Changed",
        foodName: data.foodName,
        time: "20 mins"
    });
}

// Delete

export async function DELETE(request: NextRequest){
    return NextResponse.json({
        status: "Order Cancelled."
    });
}