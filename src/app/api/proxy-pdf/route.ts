import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const pdfUrl = searchParams.get('url')

    console.log('pdfUrl', pdfUrl)

    if (!pdfUrl) {
      return NextResponse.json(
        { error: 'URL parameter is required' },
        { status: 400 },
      )
    }

    const response = await fetch(pdfUrl, {
      headers: {
        Accept: 'application/pdf',
      },
    })

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch PDF' },
        { status: response.status },
      )
    }

    const arrayBuffer = await response.arrayBuffer()

    return new NextResponse(arrayBuffer, {
      headers: {
        'Content-Type':
          response.headers.get('Content-Type') || 'application/pdf',
        'Content-Disposition': 'inline',
      },
    })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ error: 'Failed to proxy PDF' }, { status: 500 })
  }
}
