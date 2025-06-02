// app/api/preview/route.ts
import { draftMode } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    (await draftMode()).enable(); // ✅ works only in route handlers
    return NextResponse.redirect(new URL('/', request.url));
}