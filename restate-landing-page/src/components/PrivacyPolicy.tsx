import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-amber-50 to-amber-100 py-20 px-6 overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Terms &amp; Conditions&nbsp;&amp;&nbsp;Privacy Policy
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Please read our terms and policies carefully before using our
            services. We aim to maintain transparency and safeguard your
            privacy.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-3xl p-10 md:p-14 space-y-12 border border-amber-100 animate-slide-up">
          {/* --- Section 1 --- */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-amber-500 flex items-center gap-2">
              1. Terms & Conditions
            </h2>
            <p className="text-gray-700 leading-relaxed">
              For the purpose of these Terms and Conditions, the terms “we”,
              “us”, “our” refer to <b>Restate</b>, whose registered office is
              located in Khammam, Telangana 507001. The terms “you”, “your”,
              “user”, “visitor” refer to any person visiting or purchasing
              through our website.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
              <li>
                Website content is subject to change without prior notice.
              </li>
              <li>
                We make no warranties about the accuracy, timeliness,
                performance, completeness or suitability of any information or
                materials provided. You acknowledge that inaccuracies may exist,
                and we exclude liability for such errors to the fullest extent
                permitted by law.
              </li>
              <li>
                Your use of information or materials on this site is entirely at
                your own risk. It is your responsibility to ensure that any
                products, services, or information meet your specific
                requirements.
              </li>
            </ul>
          </section>

          {/* --- Section 2 --- */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-amber-500">
              2. Privacy Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We respect your privacy and are committed to protecting it. This
              Privacy Policy explains how <b>Restate</b> collects, uses, and
              safeguards your information.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-4">
              Information We Collect
            </h3>
            <p className="text-gray-700">
              We collect data when you register, place orders, subscribe, or
              fill forms — such as your name, email, address, phone number, and
              payment details.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-4">
              How We Use Your Information
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Process and fulfill orders efficiently</li>
              <li>Send confirmations, invoices, and updates</li>
              <li>Improve customer experience and site usability</li>
              <li>Send marketing materials (only if you consent)</li>
              <li>Provide customer service support</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-4">
              Security
            </h3>
            <p className="text-gray-700">
              We use industry-standard measures to protect your data. However,
              no online platform can guarantee 100% security.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-4">
              Policy Updates
            </h3>
            <p className="text-gray-700">
              Our policies may change periodically. Updates are effective
              immediately upon posting on this page.
            </p>
          </section>

          {/* --- Section 3 --- */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-amber-500">
              3. Shipping Policy
            </h2>
            <p className="text-gray-700">
              Orders are processed within 1-2 business days. Shipping is
              available across India via reliable courier partners.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Delivery typically takes 2-7 business days.</li>
              <li>International shipping is not yet available.</li>
              <li>Tracking details will be emailed after dispatch.</li>
              <li>
                We are not liable for delays due to natural causes, weather, or
                logistical challenges.
              </li>
            </ul>
          </section>

          {/* --- Section 4 --- */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-amber-500">
              4. Cancellation & Refund Policy
            </h2>
            <p className="text-gray-700">
              We believe in a customer-first approach. Cancellations and refunds
              are handled fairly under the following conditions:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                Cancellation requests must be made within 7 days of order
                placement.
              </li>
              <li>
                Refunds/replacements are available for damaged or defective
                items, subject to verification by our team.
              </li>
              <li>
                Perishable or custom items are non-refundable unless quality
                issues are proven.
              </li>
            </ul>
          </section>

          <p className="text-center text-sm text-gray-500 pt-10 border-t border-gray-200">
            &copy; {new Date().getFullYear()} Restate. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0,0) scale(1); }
          33% { transform: translate(30px, -20px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
        .animate-blob {
          animation: blob 8s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease forwards;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default PrivacyPolicy;
