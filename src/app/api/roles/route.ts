import { type NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {


  
    const searchParams = request.nextUrl.searchParams

    const userId = searchParams.get('id') || ''

    const finalUrl = `https://login.auth0.com/api/v2/users/${userId}/roles`

    const fetchOpts: any = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        "Content-Type": "application/json",
       
      },
    }
  
  
    const response = await fetch(finalUrl, fetchOpts)

    console.log('role', response)
  
    return NextResponse.json({...response});

  } catch (err) {
    console.error(err);
    return NextResponse.error();
  }


}
export const dynamic = "force-dynamic";