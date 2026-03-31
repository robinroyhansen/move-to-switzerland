import { useTranslations } from 'next-intl';

export default function PrivacyPage() {
  const t = useTranslations();

  return (
    <>
      <section className="pt-32 pb-16 bg-navy">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl text-white font-semibold mb-4">
            {t('privacy.pageTitle')}
          </h1>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-xl p-8 sm:p-12 shadow-sm border border-navy/5">
            <p className="text-charcoal/70 leading-relaxed mb-8">{t('privacy.content')}</p>
            
            <div className="space-y-8 text-sm text-charcoal/60 leading-relaxed">
              <div>
                <h2 className="font-serif text-lg text-navy font-semibold mb-3">1. Data Controller</h2>
                <p>WorkWorkWork AG, Switzerland, is the data controller responsible for the processing of your personal data through this website.</p>
              </div>
              
              <div>
                <h2 className="font-serif text-lg text-navy font-semibold mb-3">2. Data We Collect</h2>
                <p>We collect personal data that you voluntarily provide through our contact form, including your name, email address, phone number, country of residence, and message content.</p>
              </div>
              
              <div>
                <h2 className="font-serif text-lg text-navy font-semibold mb-3">3. Purpose of Processing</h2>
                <p>Your data is processed solely for the purpose of responding to your inquiry and providing our advisory services. We do not use your data for marketing purposes without your explicit consent.</p>
              </div>
              
              <div>
                <h2 className="font-serif text-lg text-navy font-semibold mb-3">4. Data Retention</h2>
                <p>We retain your personal data only for as long as necessary to fulfill the purpose for which it was collected, or as required by applicable law.</p>
              </div>
              
              <div>
                <h2 className="font-serif text-lg text-navy font-semibold mb-3">5. Your Rights</h2>
                <p>Under the Swiss Federal Act on Data Protection (nDSG) and GDPR, you have the right to access, rectify, delete, or restrict the processing of your personal data. To exercise these rights, please contact us at info@movetoswitzerland.com.</p>
              </div>
              
              <div>
                <h2 className="font-serif text-lg text-navy font-semibold mb-3">6. Contact</h2>
                <p>For any privacy-related inquiries, please contact: info@movetoswitzerland.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
