import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.resolve(process.cwd(), '_brix/index.json');
    console.log('Loading file from:', filePath);
    const data = fs.readFileSync(filePath, 'utf-8');
    const packages = JSON.parse(data);

    return NextResponse.json({
      success: true,
      count: packages.length,
      data: packages,
    });
  } catch (err) {
    console.error("Error reading index.json:", err);
    return NextResponse.json(
      { success: false, error: 'Failed to load packages.' },
      { status: 500 }
    );
  }
}
