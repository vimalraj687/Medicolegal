import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, profession, subject, message } = body;

    // Basic validation
    if (!name || !phone) {
      return NextResponse.json(
        { success: false, error: 'Name and phone number are required.' },
        { status: 400 }
      );
    }

    // In a production application, you can persist to a database or trigger an email / SMS / WhatsApp notification.
    console.log('[Five Eyes Contact Desk] New Inquiry Received:', {
      timestamp: new Date().toISOString(),
      name,
      phone,
      email: email || 'N/A',
      profession: profession || 'Doctor / Surgeon',
      subject: subject || 'General Inquiry',
      message: message || 'N/A',
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Your inquiry has been successfully received by Dr. Pankaj Vats and the executive legal desk.',
        refId: `FE-${Date.now().toString(36).toUpperCase()}`,
        contact: {
          hotline: '+91 97280 99999',
          chamber: '0124-233 1555',
          address: '175, Ganpati Enclave, Sector 15 Part II, Gurgaon',
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[Five Eyes Contact Desk] Error processing inquiry:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error while processing message.' },
      { status: 500 }
    );
  }
}
