import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const token = 'token:test';
  return new NextResponse(token, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}