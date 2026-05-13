import { connection } from 'next/server';
import { NextResponse } from 'next/server';

export const GET = async () => {
  await connection();
  return NextResponse.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
};
