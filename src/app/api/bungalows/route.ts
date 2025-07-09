import { NextRequest, NextResponse } from 'next/server';
import {
  getBungalowsData,
  getBungalowById,
  getBungalowsByCategory,
} from '@/lib/content';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const category = searchParams.get('category');

    if (id) {
      // Get specific bungalow by ID
      const bungalow = getBungalowById(id);
      if (!bungalow) {
        return NextResponse.json(
          { error: 'Bungalow not found' },
          { status: 404 }
        );
      }
      return NextResponse.json(bungalow);
    }

    if (category) {
      // Get bungalows by category
      const bungalows = getBungalowsByCategory(category);
      return NextResponse.json({ bungalows });
    }

    // Get all bungalows
    const data = getBungalowsData();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching bungalows:', error);
    return NextResponse.json(
      { error: 'Failed to fetch bungalows data' },
      { status: 500 }
    );
  }
}
