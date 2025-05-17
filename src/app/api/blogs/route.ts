// src/app/api/blogs/route.ts
import { NextResponse } from 'next/server';
import { connectDB } from "@/lib/mongodb";
import Blog from '@/models/Blog';

export const dynamic = 'force-static'; // Ensure static generation
export const revalidate = 30; // Revalidate every 30 seconds (same as your page)

export async function GET() {
  try {
    await connectDB();
    
    // Fetch only published blogs and sort by publishedAt in descending order
    const blogs = await Blog.find({ published: true })
      .sort({ publishedAt: -1 })
      .select('title slug excerpt coverImage publishedAt tags')
      .lean();
    
    return NextResponse.json(blogs, {
      headers: {
        'Cache-Control': 'public, s-maxage=30, stale-while-revalidate=60'
      }
    });
  } catch (error) {
    console.error('Failed to fetch blogs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blogs' },
      { status: 500 }
    );
  }
}