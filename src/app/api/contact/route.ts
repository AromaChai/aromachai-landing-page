import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { fullName, email, whatsappNumber, city, investmentCapacity } = data || {};

    if (!fullName || !email || !whatsappNumber || !city || !investmentCapacity) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const to = process.env.RECEIVER_EMAIL || process.env.SMTP_USER;

    const html = `
      <h2>New Franchise Enquiry</h2>
      <p><strong>👤 Name:</strong> ${fullName}</p>
      <p><strong>📧 Email:</strong> ${email}</p>
      <p><strong>📞 Mobile / WhatsApp:</strong> ${whatsappNumber}</p>  
      <p><strong>📍 Preferred City:</strong> ${city}</p>
      <p><strong>💰 Investment Capacity:</strong> ${investmentCapacity}</p>

      <br/>

      <p>
      <strong>⏰ Lead Source:</strong>
      <br/>
      Website – Franchise Enquiry Form</p>

      <p><strong>📝 Notes:</strong><br/>Please contact the lead within 24 hours for better conversion</p>

    `;
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject: 'New Franchise Enquiry',
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Error sending contact email:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
