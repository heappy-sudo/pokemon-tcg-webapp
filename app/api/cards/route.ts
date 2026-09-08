import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: Request) {
  try {
    const res = await axios.get('https://api.pokemontcg.io/v2/cards');
    return NextResponse.json(res.data);
  } catch (error) {
    return NextResponse.error({ status: 500, statusText: 'Error fetching cards' });
  }
}