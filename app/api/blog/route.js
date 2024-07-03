const { NextResponse } = require("next/server");

export async function GET(request) {
    console.log('blog get hits');
    return NextResponse.json({msg: 'api working'})
}