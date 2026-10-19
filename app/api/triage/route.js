import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { issueType, urgency, docs, name, phone, city, summary } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, error: 'Name and WhatsApp phone number are required.' },
        { status: 400 }
      );
    }

    console.log('[Five Eyes Statutory Triage] New Case Review Submitted:', {
      timestamp: new Date().toISOString(),
      issueType,
      urgency,
      docs,
      name,
      phone,
      city: city || 'N/A',
      summary: summary || 'N/A',
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Your case review brief has been dispatched to Dr. Pankaj Vats.',
        caseId: `CASE-${Date.now().toString(36).toUpperCase()}`,
        hotline: '+91 97280 99999',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[Five Eyes Triage] Error processing case review:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error processing triage submission.' },
      { status: 500 }
    );
  }
}
