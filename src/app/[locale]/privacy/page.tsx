import { useTranslations } from 'next-intl';

export default function PrivacyPage() {
  const t = useTranslations();

  return (
    <>
      <section className="pt-36 pb-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="gold-line-center" />
          <h1 className="font-serif text-4xl sm:text-5xl text-white font-semibold luxury-heading">
            {t('privacy.pageTitle')}
          </h1>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-lg p-8 sm:p-12 shadow-sm border border-navy/[0.04]">
            <p className="text-charcoal/60 leading-relaxed mb-10 font-light">{t('privacy.content')}</p>
            
            <div className="space-y-10 text-sm text-charcoal/50 leading-relaxed">
              <div>
                <h2 className="font-serif text-lg text-navy font-semibold mb-3">1. Data Controller</h2>
                <p className="font-light">WorkWorkWork AG, Switzerland, is the data controller responsible for the processing of your personal data through this website.</p>
              </div>
              
              <div>
                <h2 className="font-serif text-lg text-navy font-semibold mb-3">2. Data We Collect</h2>
                <p className="font-light">We collect personal data that you voluntarily provide through our contact form, including your name, email address, phone number, country of residence, and message content.</p>
              </div>
              
              <div>
                <h2 className="font-serif text-lg text-navy font-semibold mb-3">3. Purpose of Processing</h2>
                <p className="font-light">Your data is processed solely for the purpose of responding to your inquiry and providing our advisory services. We do not use your data for marketing purposes without your explicit consent.</p>
              </div>
              
              <div>
                <h2 className="font-serif text-lg text-navy font-semibold mb-3">4. Data Retention</h2>
                <p className="font-light">We retain your personal data only for as long as necessary to fulfill the purpose for which it was collected, or as required by applicable law.</p>
              </div>
              
              <div>
                <h2 className="font-serif text-lg text-navy font-semibold mb-3">5. Your Rights</h2>
                <p className="font-light">Under the Swiss Federal Act on Data Protection (nDSG) and GDPR, you have the right to access, rectify, delete, or restrict the processing of your personal data. To exercise these rights, please contact us at info@movetoswitzerland.com.</p>
              </div>
              
              <div>
                <h2 className="font-serif text-lg text-navy font-semibold mb-3">6. Contact</h2>
                <p className="font-light">For any privacy-related inquiries, please contact: info@movetoswitzerland.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
