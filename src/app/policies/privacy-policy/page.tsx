import Link from 'next/link';

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col md:px-[64px] px-[32px] gap-[32px] py-[32px] ">
      <h1 className="leading-[64px] tracking-[4%] text-[48px] font-[600]">
        Privacy Policy
      </h1>
      <div className="border-b opacity-60"></div>
      <div className="flex flex-row gap-[16px] w-full">
        <div className="flex flex-col gap-[4px] w-1/5">
          <h1 className="font-[500]">Last updated</h1>
          <span className="font-[200]">05/01/2024</span>
        </div>
        <div className="flex flex-col flex-1 gap-[32px]">
          <section className="flex flex-col gap-[16px] subSection">
            <span className="text-[14px] md:text-[18px]">
              This privacy notice for PrepAI(&quot;we&quot;,&quot;us&quot;, or
              &quot;our&quot;), describes how and why we might collect, store,
              use, and/or share (&quot;process&quot;) your information when you
              use our services (&quot;Services&quot;), such as when you:
            </span>
            <div className="md:pl-6 text-[14px] md:text-[18px] sub">
              <li>
                Visit our website at{' '}
                <Link
                  href="https://www.prepai.dev"
                  className="underline text-blue-500"
                >
                  prepai.dev
                </Link>
                , or any website of ours that links to this privacy notice
              </li>
              <li>
                Engage with us in other related ways, including any sales,
                marketing, or events
              </li>
            </div>
            <div>
              <span className="font-bold">Questions or concerns? </span>
              <span>
                Reading this privacy notice will help you understand your
                privacy rights and choices. If you do not agree with our
                policies and practices, please do not use our Services.
              </span>
            </div>
          </section>
          <section className="flex flex-col gap-[16px] subSection">
            <h2 className="text-[24px] md:text-[32px] font-[600]">
              Information Collection
            </h2>
            <span>
              This summary provides key points from our privacy notice, but you
              can find out more details about any of these topics by clicking
              the link following each key point or by using our{' '}
              <a href="#toc" className="underline text-blue-500">
                table of contents
              </a>{' '}
              below to find the section you are looking for.
            </span>
            <div className="flex flex-col gap-[16px]">
              <span className="text-[16px] md:text-[24px] font-[600]">
                What personal information do we process?{' '}
              </span>
              <span className=" text-[14px] md:text-[18px]">
                When you visit, use, or navigate our Services, we may process
                personal information depending on how you interact with us and
                the Services, the choices you make, and the products and
                features you use.
              </span>
            </div>
            <div className="flex flex-col gap-[16px]">
              <span className="text-[16px] md:text-[24px] font-[600]">
                Do we process any sensitive personal information?{' '}
              </span>
              <span>We do not process sensitive personal information.</span>
            </div>
            <div className="flex flex-col gap-[16px]">
              <span className="text-[16px] md:text-[24px] font-[600]">
                Do we receive any information from third parties?{' '}
              </span>
              <span>We do not receive any information from third parties.</span>
            </div>
            <div className="flex flex-col gap-[16px]">
              <span className="text-[16px] md:text-[24px] font-[600]">
                How do we process your information?{' '}
              </span>
              <span>
                We process your information to provide, improve, and administer
                our Services, communicate with you, for security and fraud
                prevention, and to comply with law. We may also process your
                information for other purposes with your consent. We process
                your information only when we have a valid legal reason to do
                so.
              </span>
            </div>
            <div className="flex flex-col gap-[16px]">
              <span className="text-[16px] md:text-[24px] font-[600]">
                Do we share or sell your personal information?{' '}
              </span>
              <span>
                We do not share nor sell any of your personal information.
              </span>
            </div>
            <div className="flex flex-col gap-[16px]">
              <span className="text-[16px] md:text-[24px] font-[600]">
                How do we keep your information safe?{' '}
              </span>
              <span>
                We have organizational and technical processes and procedures in
                place to protect your personal information. However, no
                electronic transmission over the internet or information storage
                technology can be guaranteed to be 100% secure, so we cannot
                promise or guarantee that hackers, cybercriminals, or other
                unauthorized third parties will not be able to defeat our
                security and improperly collect, access, steal, or modify your
                information.{' '}
              </span>
            </div>
            <div className="flex flex-col gap-[16px]">
              <span className="text-[16px] md:text-[24px] font-[600]">
                What are your rights?{' '}
              </span>
              <span>
                {' '}
                Depending on where you are located geographically, the
                applicable privacy law may mean you have certain rights
                regarding your personal information.{' '}
              </span>
            </div>
            <div className="flex flex-col gap-[16px]">
              <span className="text-[16px] md:text-[24px] font-[600]">
                How do you exercise your rights?{' '}
              </span>
              <span>
                {' '}
                The easiest way to exercise your rights is by contacting us at
                contact@prepai.dev. We will consider and act upon any request in
                accordance with applicable data protection laws.
              </span>
            </div>
          </section>
          <section id="toc" className="flex flex-col gap-[32px]">
            <h1 className="text-[24px] md:text-[32px] font-[500]">
              TABLE OF CONTENTS
            </h1>
            <ul>
              <a className="text-blue-500 underline" href="#1">
                1. WHAT INFORMATION DO WE COLLECT?
              </a>
            </ul>
            <ul>
              <a className="text-blue-500 underline" href="#2">
                2. HOW DO WE PROCESS YOUR INFORMATION?
              </a>{' '}
            </ul>
            <ul>
              {' '}
              <a className="text-blue-500 underline" href="#3">
                3. HOW DO WE HANDLE YOUR SOCIAL LOGINS?{' '}
              </a>
            </ul>
            <ul>
              <a className="text-blue-500 underline" href="#4">
                4. HOW LONG DO WE KEEP YOUR INFORMATION?
              </a>
            </ul>
          </section>
          <section id="1" className="flex flex-col gap-[16px] subSection">
            <h1 className="text-[24px] md:text-[32px] font-[600]">
              1. WHAT INFORMATION DO WE COLLECT?
            </h1>
            <div className=" italic text-[14px]">
              {' '}
              <span className="font-bold">In Short: </span>
              <span>
                {' '}
                We collect personal information that you provide to us.
              </span>
            </div>

            <div className="flex flex-row gap-[4px] flex-wrap">
              {' '}
              <span className="font-bold">
                Personal Information Provided by You.
              </span>
              The personal information that we collect depends on the context of
              your interactions with us and the Services, the choices you make,
              and the products and features you use. The personal information we
              collect may include the following:
            </div>
            <div className="pl-6 sub">
              <li>names</li>
              <li>email addresses</li>
            </div>
            <div>
              <span className="font-bold">Sensitive Information. </span>
              We do not process sensitive information.
            </div>
            <div>
              <span className="font-bold">Social Media Login Data. </span>
              We may provide you with the option to register with us using your
              existing social media account details, like Google, or GitHub. If
              you choose to register in this way, we will collect your{' '}
              <span className="font-bold">name</span> and{' '}
              <span className="font-bold">email</span>
              from the account.
            </div>
          </section>

          <section id="2" className="flex flex-col gap-[16px] subSection">
            <h1 className="text-[24px] md:text-[32px] font-[600]">
              2. HOW DO WE PROCESS YOUR INFORMATION?
            </h1>
            <div className="flex flex-row gap-[4px] italic text-[14px]">
              {' '}
              <div>
                <span className="font-bold">In Short: </span>
                <span>
                  We process your information to provide, improve, and
                  administer our Services, communicate with you, for security
                  and fraud prevention, and to comply with law. We may also
                  process your information for other purposes with your consent.
                </span>
              </div>
            </div>
            <div className="flex flex-row gap-[16px] flex-wrap">
              <h1>
                We process your personal information for a variety of reasons,
                depending on how you interact with our Services, including:
              </h1>
              <div className="pl-6 gap-[16px] flex flex-col sub">
                <li>
                  <span className="font-bold">
                    To facilitate account creation and authentication and
                    otherwise manage user accounts.{' '}
                  </span>
                  We may process your information so you can create and log in
                  to your account, as well as keep your account in working
                  order.
                </li>
                <li>
                  <span className="font-bold">
                    To deliver and facilitate delivery of services to the user.{' '}
                  </span>
                  We may process your information to provide you with the
                  requested service.
                </li>
                <li>
                  <span className="font-bold">
                    To respond to user inquiries/offer support to users.{' '}
                  </span>
                  We may process your information to respond to your inquiries
                  and solve any potential issues you might have with the
                  requested service.
                </li>
                <li>
                  <span className="font-bold">To request feedback. </span>
                  We may process your information when necessary to request
                  feedback and to contact you about your use of our Services.
                </li>
                <li>
                  <span className="font-bold">To protect our Services. </span>
                  We may process your information as part of our efforts to keep
                  our Services safe and secure, including fraud monitoring and
                  prevention.
                </li>
              </div>
            </div>
          </section>
          <section id="3" className="flex flex-col gap-[16px]">
            <h1 className="text-[24px] md:text-[32px] font-[600]">
              3. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
            </h1>
            <div className="flex flex-row gap-[4px] italic text-[14px]">
              {' '}
              <div>
                <span className="font-bold">In Short: </span>
                <span>
                  If you choose to register or log in to our Services using a
                  social media account, we may have access to certain
                  information about you.
                </span>
              </div>
            </div>
            <div className="">
              {' '}
              Our Services offer you the ability to register and log in using
              your third-party social media account details (like your Google or
              GitHub logins). Where you choose to do this, we will receive
              certain profile information about you from your social media
              provider. The profile information we receive may vary depending on
              the social media provider concerned, but will often include your
              name, email address, and profile picture, as well as other
              information you choose to make public on such a social media
              platform.
            </div>
            <div className="">
              We will use the information we receive only for the purposes that
              are described in this privacy notice or that are otherwise made
              clear to you on the relevant Services. Please note that we do not
              control, and are not responsible for, other uses of your personal
              information by your third-party social media provider. We
              recommend that you review their privacy notice to understand how
              they collect, use, and share your personal information, and how
              you can set your privacy preferences on their sites and apps.
            </div>
          </section>
          <section id="4" className="flex flex-col gap-[16px]">
            <h1 className="text-[24px] md:text-[32px] font-[600]">
              {' '}
              4. HOW LONG DO WE KEEP YOUR INFORMATION?
            </h1>
            <div className="flex flex-row gap-[4px] italic text-[14px]">
              {' '}
              <div>
                <span className="font-bold">In Short: </span>
                <span>
                  We keep your information for as long as necessary to fulfill
                  the purposes outlined in this privacy notice unless otherwise
                  required by law.
                </span>
              </div>
            </div>
            <div className="">
              We will only keep your personal information for as long as it is
              necessary for the purposes set out in this privacy notice, unless
              a longer retention period is required or permitted by law (such as
              tax, accounting, or other legal requirements). No purpose in this
              notice will require us keeping your personal information for
              longer than three (3) months past the termination of the
              user&apos;s account.
            </div>
            <div className="">
              When we have no ongoing legitimate business need to process your
              personal information, we will either delete or anonymize such
              information, or, if this is not possible (for example, because
              your personal information has been stored in backup archives),
              then we will securely store your personal information and isolate
              it from any further processing until deletion is possible.
            </div>
          </section>
          <h2 className="text-[24px] md:text-[32px] font-[600]">
            CHANGES MADE ON PRIVACY POLICIES
          </h2>
          <span>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new policy on this page.
          </span>
          <h2 className="text-[24px] md:text-[32px] font-[600]">CONTACT US</h2>
          <span>
            If you have any questions about this Privacy Policy, please contact
            us at contact@prepai.dev
          </span>
        </div>
      </div>
    </div>
  );
};
export default PrivacyPolicy;
