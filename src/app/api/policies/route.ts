import { NextResponse } from 'next/server';
import { getPoliciesContent } from '@/lib/content';

export async function GET() {
  try {
    const content = getPoliciesContent();

    return NextResponse.json({
      content,
      contentType: 'markdown',
      lastUpdated: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Error fetching policies:', error);
    return NextResponse.json(
      { error: 'Failed to fetch policies content' },
      { status: 500 }
    );
  }
}
