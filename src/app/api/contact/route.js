import { NextResponse } from 'next/server';
import { AGENT, PHONE } from '@/lib/constants';

/**
 * API Route Handler for Contact Form Submissions
 * POST /api/contact
 */
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, interest, message } = body;

    // Basic validation
    if (!name || !email || !phone || !interest || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // In a production environment, you would:
    // 1. Send email via SendGrid, Resend, or similar service
    // 2. Save to CRM (Follow Up Boss, Salesforce, etc.)
    // 3. Send notification to agent
    // 4. Log for analytics

    // For now, we'll just log and return success
    // TODO: Integrate with email service and CRM
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      interest,
      message,
      timestamp: new Date().toISOString(),
    });

    // Simulate email sending (replace with actual email service)
    // Example with SendGrid:
    // await sendEmail({
    //   to: AGENT.email,
    //   subject: `New Contact Form Submission from ${name}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone}</p>
    //     <p><strong>Interest:</strong> ${interest}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   `,
    // });

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been received. We will contact you soon.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

