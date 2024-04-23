import { type NextRequest, NextResponse,  } from 'next/server'


import { BlogAws3Update} from "@/aws/aws3";


export async function POST(request: NextRequest) {
  try {

    // const body = await request.json() //text()
    // console.log('s3 uploud', body)

    const formData = await request.formData();

    // const upload = formData.get('upload') as File;

    const file = formData.get('file') as File;

    const arrayBuffer = await file.arrayBuffer();
  
    const response = await BlogAws3Update(file, arrayBuffer)
    // Service_Type
  
    return NextResponse.json({...response});

  } catch (err) {
    console.error(err);
    const error = {
      "error": {
          "message": err
      }
    }
    return NextResponse.json({...error});

  
    // return NextResponse.error();
  }


}
export const dynamic = "force-dynamic";