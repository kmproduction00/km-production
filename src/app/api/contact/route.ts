import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;
const resend = new Resend(resendApiKey);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, projectType, message, budget, platform } = body;

    // Basic Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Lütfen isim, e-posta ve mesaj alanlarını doldurunuz.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Geçerli bir e-posta adresi giriniz.' },
        { status: 400 }
      );
    }

    // HTML Email Template
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #050508; color: #f4f4f5; margin: 0; padding: 24px; }
            .container { max-width: 580px; margin: 0 auto; background: #0f0f14; border: 1px solid #27272a; border-radius: 20px; overflow: hidden; }
            .header { background: #18181b; padding: 24px; border-bottom: 1px solid #27272a; text-align: center; }
            .header h1 { margin: 0; font-size: 20px; color: #ffffff; letter-spacing: -0.5px; }
            .badge { display: inline-block; background: rgba(52, 211, 153, 0.15); color: #34d399; font-size: 11px; font-weight: bold; padding: 4px 10px; border-radius: 9999px; margin-top: 8px; border: 1px solid rgba(52, 211, 153, 0.3); }
            .content { padding: 24px; }
            .field-row { margin-bottom: 16px; border-bottom: 1px solid #27272a; padding-bottom: 12px; }
            .field-label { font-size: 11px; text-transform: uppercase; color: #a1a1aa; font-family: monospace; margin-bottom: 4px; }
            .field-value { font-size: 15px; color: #ffffff; font-weight: 500; }
            .message-box { background: #18181b; border: 1px solid #27272a; border-radius: 12px; padding: 16px; font-size: 14px; line-height: 1.6; color: #e4e4e7; white-space: pre-wrap; margin-top: 8px; }
            .footer { padding: 20px 24px; text-align: center; font-size: 12px; color: #71717a; border-top: 1px solid #27272a; background: #0a0a0e; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🚀 Yeni Proje Teklifi / İletişim Formu</h1>
              <div class="badge">KM PRODUCTION WEB İLETİŞİM FORMU</div>
            </div>
            <div class="content">
              <div class="field-row">
                <div class="field-label">Gönderen Kişi / Kurum</div>
                <div class="field-value">${name}</div>
              </div>
              <div class="field-row">
                <div class="field-label">İletişim E-Posta Adresi</div>
                <div class="field-value"><a href="mailto:${email}" style="color: #60a5fa; text-decoration: none;">${email}</a></div>
              </div>
              <div class="field-row">
                <div class="field-label">Proje Türü / Kategori</div>
                <div class="field-value">${projectType || 'Genel Görüşme / Danışmanlık'}</div>
              </div>
              ${budget ? `
              <div class="field-row">
                <div class="field-label">Hedef Bütçe Aralığı</div>
                <div class="field-value">${budget}</div>
              </div>
              ` : ''}
              ${platform ? `
              <div class="field-row">
                <div class="field-label">Hedef Platform</div>
                <div class="field-value">${platform}</div>
              </div>
              ` : ''}
              <div style="margin-top: 20px;">
                <div class="field-label">Mesaj Detayı & Proje Kapsamı</div>
                <div class="message-box">${message}</div>
              </div>
            </div>
            <div class="footer">
              Bu mesaj KM Production web sitesi iletişim formundan otomatik iletilmiştir.<br>
              Ziyaretçiye yanıt vermek için doğrudan bu e-postayı yanıtlayabilirsiniz (Reply).
            </div>
          </div>
        </body>
      </html>
    `;

    // Send via Resend
    const { data, error } = await resend.emails.send({
      from: 'KM Production Web <onboarding@resend.dev>',
      to: ['kmproduction00@gmail.com'],
      replyTo: email,
      subject: `🔥 Yeni Proje Talebi: ${name} (${projectType || 'Mobil Uygulama'})`,
      html: htmlContent,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'E-posta gönderilirken bir hata oluştu. Lütfen doğrudan e-posta atınız.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Mesajınız başarıyla iletildi!',
      id: data?.id,
    });
  } catch (err: any) {
    console.error('API Contact Error:', err);
    return NextResponse.json(
      { error: err.message || 'Sunucu hatası oluştu.' },
      { status: 500 }
    );
  }
}
