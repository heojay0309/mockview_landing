import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <nav className="relative md:px-[64px] md:py-[32px] w-full px-[32px] py-[16px]">
      <div className="text-white font-[600] leading-[24px] flex flex-row justify-between items-center ">
        <div className="flex md:gap-[32px] md:flex-row flex-col items-center md:divide-x-[1px]  justify-center">
          <div className="flex flex-row md:items-center self-start gap-1 ">
            <Image
              src="/mockviewLogo.svg"
              alt="MockView"
              width={32}
              height={32}
            />
            <h1 className="font-[600] opacity-60  text-[20px] leading-[24px] self-center">
              MockView
            </h1>
          </div>
          <div className="flex md:gap-[32px] gap-[8px] opacity-60  text-[12px] md:text-[16px] md:pl-[32px]  ">
            <Link href="https://mockview.xyz/policies/terms-of-use">
              Terms of Use
            </Link>
            <div className="border-r my-1 md:hidden"></div>
            <Link href="https://mockview.xyz/policies/privacy-policy">
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="opacity-60  self-end md:text-[16px] text-[12px]">
          © 2024 MockView
        </div>
      </div>
    </nav>
  );
};

export default Footer;
