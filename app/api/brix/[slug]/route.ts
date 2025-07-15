import { NextResponse } from 'next/server';
import data from '@/brix/index.json'; // or wherever you're storing your full brix list

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  // Find the matching component
  const brix = data.find((item) => item.slug === slug);

  if (!brix) {
    return NextResponse.json(
      { error: 'Component not found' },
      { status: 404 }
    );
  }

  return NextResponse.json(brix);
}