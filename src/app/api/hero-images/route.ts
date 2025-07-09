import { NextResponse } from 'next/server';
import { readdir } from 'fs/promises';
import path from 'path';

export async function GET() {
  try {
    const heroImagesDir = path.join(process.cwd(), 'public/images/hero');
    const files = await readdir(heroImagesDir);

    // Filter only image files
    const imageFiles = files.filter((file) =>
      /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
    );

    return NextResponse.json(imageFiles);
  } catch (error) {
    console.error('Error reading hero images:', error);
    return NextResponse.json([]);
  }
}
