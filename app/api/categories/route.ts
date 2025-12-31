import { NextResponse } from 'next/server';
import { CATEGORIES } from '@/lib/constants';

export async function GET() {
  try {
    // Simulate a small delay to match real API behavior
    await new Promise(resolve => setTimeout(resolve, 100));
    
    return NextResponse.json({
      success: true,
      data: CATEGORIES,
      message: 'Categories retrieved successfully'
    });
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch categories',
        data: []
      },
      { status: 500 }
    );
  }
}

