const TermsOfUse = () => {
  return (
    <div className="flex gap-[16px] text-white tracking-widest flex-col justify-start pt-[124px] p-[64px] h-full overflow-y-scroll">
      <h1 className="text-[64px] font-[400] leading-[16px]">
        Terms of Service
      </h1>
      <div className="border-b pt-1"></div>
      <div className="flex flex-col gap-[4px] ">
        <h1 className="font-[500]">Last updated</h1>
        <span className="font-[200]">03/25/2024</span>
      </div>
      <section className="flex flex-col gap-[8px]">
        <span>Welcome to MockView!</span>
        <span>
          By accessing or using our application, you agree to be bound by these
          terms of service.
        </span>
      </section>
      <h2 className="text-[32px]">Use of Service</h2>
      <div className="pl-6">
        <li>You must be at least 10 years old to use our application.</li>
        <li>
          You are responsible for maintaining the confidentiality of your
          account and password.
        </li>
      </div>
      <h2 className="text-[32px]">Content</h2>
      <div className="pl-6">
        <li>You retain rights to any content you submit to the application.</li>
        <li>
          You grant us a license to use, modify, and display the content as
          necessary for the service.
        </li>
      </div>
      <h2 className="text-[32px]">Prohibited Conduct</h2>
      <span>
        You agree not to engage in prohibited conduct, including but not limited
        to:
      </span>
      <div className="pl-6">
        <li>Illegal activities</li>
        <li>Harassment or abuse of other users.</li>
        <li>Distribution of harmful or offensive content.</li>
      </div>
      <h2 className="text-[32px]">Modifications to the Service</h2>
      <span>
        We reserve the right to modify or discontinue the service at any time
        without notice.
      </span>
      <h2 className="text-[32px]">Termination</h2>
      <span>
        We may terminate your access to the service for any reason, including
        violation of these Terms.
      </span>
      <h2 className="text-[32px]">Disclaimers</h2>
      <span>
        The service is provided &quot;as is&quot;. We disclaim all warranties
        and will not be liable for any harm arising from your use of the
        service.
      </span>
      <h2 className="text-[32px]">Governing Law</h2>
      <span>These Terms are governed by the laws of US/California.</span>
      <h2 className="text-[32px]">Changes to These Terms</h2>
      <span>
        We may modify these Terms at any time. Your continued use of the service
        constitutes acceptance of those changes.
      </span>
      <h2 className="text-[32px]">Contact Us</h2>
      <span>
        If you have any questions about these Terms, please contact us at
        contact@mockview.xyz
      </span>
    </div>
  );
};
export default TermsOfUse;
