import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// resend API Anahtarını .env.local dosyasından alıyoruz.
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { requestType, name, company, email, phone, address, message } = data;

    // Temel doğrulama
    if (!name || !email || !phone || !address) {
      return NextResponse.json({ error: 'Zorunlu alanlar eksik' }, { status: 400 });
    }

    const htmlContent = `
      <h2>Fireblocker Web Sitesinden Yeni Bir Başvuru Geldi!</h2>
      <p><strong>Talep Türü:</strong> ${requestType === 'bayilik' ? 'Bayilik Başvurusu' : requestType === 'siparis' ? 'Sipariş Talebi' : 'Diğer'}</p>
      <br/>
      <p><strong>Ad Soyad:</strong> ${name}</p>
      <p><strong>Firma Adı:</strong> ${company || 'Belirtilmedi'}</p>
      <p><strong>E-posta:</strong> ${email}</p>
      <p><strong>Telefon:</strong> ${phone}</p>
      <p><strong>Adres:</strong> ${address}</p>
      <p><strong>Mesaj:</strong><br/> ${message || 'Belirtilmedi'}</p>
    `;

    // Bu bilgileri .env.local'dan çekeceğiz. Yoksa bir hata durumuna düşmesin diye varsayılan koyabiliriz ama .env.local kurulumu daha sağlıklı.
    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'info@fireblocker.com.tr';
    const toEmail = process.env.CONTACT_TO_EMAIL || 'info@fireblocker.com.tr';

    const response = await resend.emails.send({
      from: `Fireblocker Web Form <${fromEmail}>`,
      to: [toEmail],
      subject: `Yeni Web Formu: ${requestType.toUpperCase()} - ${name}`,
      html: htmlContent,
      replyTo: email,
    });

    if (response.error) {
      console.error('Resend API Error:', response.error);
      return NextResponse.json({ error: response.error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data: response.data }, { status: 200 });

  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json({ error: 'Sunucu hatası oluştu, lütfen daha sonra tekrar deneyin.' }, { status: 500 });
  }
}
