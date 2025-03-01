import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Terms of use',
  openGraph: {
    title: 'Terms of use',
    description: `Interview + Algos. Preparing for technical interviews and algorithms asynchronously.
      The new way of preparing for your technical interviews. Ditch the old way of doing algorithmic problems, and join Preps!`,
  },
  icons: {
    icon: '/favicon.ico',
  },
};
const TermsOfUse = () => {
  return (
    <div className="flex flex-col tablet:px-[64px] px-[32px] gap-[32px] py-[32px] ">
      <h1 className="leading-[64px] tracking-[4%] text-[48px] font-[600]">
        Terms of Service
      </h1>
      <div className="border-b opacity-30"></div>
      <section className="flex flex-col tablet:flex-row gap-[16px] w-full">
        <div className="flex tablet:flex-col tablet:w-1/5 w-full gap-[8px]">
          <h1 className="font-[500]">Last updated</h1>
          <span className="font-[200]">05/01/2024</span>
        </div>
        <div className="flex flex-col flex-1 gap-[32px]">
          <div className="flex flex-col gap-[16px]">
            <span className="text-[16px] tablet:text-[18px]">
              Welcome to PrepsAI!
            </span>
            <span className="text-[14px] tablet:text-base">
              By accessing or using our application, you agree to be bound by
              these terms of service.
            </span>
          </div>
          <div className="subSection">
            <h2 className="text-[24px] tablet:text-[32px] font-[500]">
              Use of Service
            </h2>
            <div className="tablet:pl-6 text-[14px] tablet:text-[18px] sub">
              <li>You must be at least 10 years old to use our application.</li>
              <li>
                You are responsible for maintaining the confidentiality of your
                account and password.
              </li>
            </div>
          </div>
          <div className="subSection">
            <h2 className="text-[24px] tablet:text-[32px] font-[500]">
              Content
            </h2>
            <div className="tablet:pl-6 text-[14px] tablet:text-[18px] sub">
              <li>
                You retain rights to any content you submit to the application.
              </li>
              <li>
                You grant us a license to use, modify, and display the content
                as necessary for the service.
              </li>
            </div>
          </div>
          <div className="subSection">
            <h2 className="text-[24px] tablet:text-[32px] font-[500]">
              Prohibited Conduct
            </h2>
            <span>
              You agree not to engage in prohibited conduct, including but not
              limited to:
            </span>
            <div className="tablet:pl-6 text-[14px] tablet:text-[18px] sub">
              <li>Illegal activities</li>
              <li>Harassment or abuse of other users.</li>
              <li>Distribution of harmful or offensive content.</li>
            </div>
          </div>
          <div className="subSection">
            <h2 className="text-[24px] tablet:text-[32px] font-[500]">
              Modifications to the Service
            </h2>
            <span>
              We reserve the right to modify or discontinue the service at any
              time without notice.
            </span>
          </div>
          <div className="subSection">
            <h2 className="text-[24px] tablet:text-[32px] font-[500]">
              Termination
            </h2>
            <span>
              We may terminate your access to the service for any reason,
              including violation of these Terms.
            </span>
          </div>
          <div className="subSection">
            <h2 className="text-[24px] tablet:text-[32px] font-[500]">
              Disclaimers
            </h2>
            <span>
              The service is provided &quot;as is&quot;. We disclaim all
              warranties and will not be liable for any harm arising from your
              use of the service.
            </span>
          </div>
          <div className="subSection">
            <h2 className="text-[24px] tablet:text-[32px] font-[500]">
              Governing Law
            </h2>
            <span>These Terms are governed by the laws of US/California.</span>
          </div>
          <div className="subSection">
            <h2 className="text-[24px] tablet:text-[32px] font-[500]">
              Changes to These Terms
            </h2>
            <span>
              We may modify these Terms at any time. Your continued use of the
              service constitutes acceptance of those changes.
            </span>
          </div>
          <div className="subSection">
            <h2 className="text-[24px] tablet:text-[32px] font-[500]">
              Contact Us
            </h2>
            <span>
              If you have any questions about these Terms, please contact us at
              contact@preps-ai.com
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
export default TermsOfUse;
