import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function normalizeSecureSetting(value?: string) {
  return value?.trim().toLowerCase() === 'true';
}

function getErrorMessage(error: unknown) {
  if (error instanceof Error) {
    return error.message;
  }

  return 'Bilinmeyen hata';
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { requestType, name, company, email, phone, address, message } = data;

    if (!name || !email || !phone || !address) {
      return NextResponse.json({ error: 'Zorunlu alanlar eksik' }, { status: 400 });
    }

    const smtpHost = process.env.SMTP_HOST?.trim();
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER?.trim();
    const smtpPass = process.env.SMTP_PASS;
    const smtpSecure = normalizeSecureSetting(process.env.SMTP_SECURE);
    const toEmail = process.env.CONTACT_TO_EMAIL?.trim();
    const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim() || smtpUser || toEmail;

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !toEmail || !fromEmail) {
      console.error('Missing SMTP environment variables');
      return NextResponse.json({ error: 'Mail sunucusu yapılandırması eksik.' }, { status: 500 });
    }

    const requestTypeLabel =
      requestType === 'bayilik'
        ? 'Bayilik Başvurusu'
        : requestType === 'siparis'
          ? 'Sipariş Talebi'
          : 'Diğer';

    const htmlContent = `
      <h2>Fireblocker web sitesinden yeni bir başvuru geldi.</h2>
      <p><strong>Talep Türü:</strong> ${requestTypeLabel}</p>
      <br/>
      <p><strong>Ad Soyad:</strong> ${escapeHtml(name)}</p>
      <p><strong>Firma Adı:</strong> ${escapeHtml(company || 'Belirtilmedi')}</p>
      <p><strong>E-posta:</strong> ${escapeHtml(email)}</p>
      <p><strong>Telefon:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Adres:</strong> ${escapeHtml(address)}</p>
      <p><strong>Mesaj:</strong><br/> ${escapeHtml(message || 'Belirtilmedi').replaceAll('\n', '<br/>')}</p>
    `;

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const result = await transporter.sendMail({
      from: `Fireblocker Web Form <${fromEmail}>`,
      to: toEmail,
      subject: `Yeni Web Formu: ${requestTypeLabel} - ${name}`,
      html: htmlContent,
      replyTo: email,
    });

    return NextResponse.json(
      {
        success: true,
        data: {
          messageId: result.messageId,
          accepted: result.accepted,
          rejected: result.rejected,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form submission error:', error);

    const errorMessage = getErrorMessage(error);
    const responseBody: { error: string; details?: string } = {
      error: 'Sunucu hatası oluştu, lütfen daha sonra tekrar deneyin.',
    };

    if (process.env.NODE_ENV !== 'production') {
      responseBody.details = errorMessage;
    }

    return NextResponse.json(
      responseBody,
      { status: 500 }
    );
  }
}
