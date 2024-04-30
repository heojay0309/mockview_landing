import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <nav className="relative md:px-[64px] md:py-[32px] w-full px-[32px] py-[16px] pt-[64px]">
      <div className="text-white font-[600] leading-[24px] flex flex-row justify-between items-center ">
        <div className="flex md:gap-[32px] md:flex-row flex-col gap-[8px] items-center md:divide-x-[1px] justify-center">
          {/* <div className="flex flex-row md:items-center self-start gap-1">
            <h1 className="text-[#3e66de] text-[32px] leading-[24px] font-[600]">
              Prep
            </h1>
            <span className=" text-[32px] leading-[24px] self-center font-[600] text-white">
              AI
            </span>
          </div> */}
          <Link href="/" className="flex gap-[4px]">
            <h1 className="text-white text-[24px] leading-[24px] font-[700]">
              preps
            </h1>
          </Link>
          <div className="flex md:gap-[32px] gap-[8px] opacity-60 text-[12px] md:text-[16px] md:pl-[32px]">
            <Link href="https://www.prepai.dev/policies/terms-of-use">
              Terms of Use
            </Link>
            <div className="border-r my-1 md:hidden"></div>
            <Link
              href="https://www.prepai.dev/policies/privacy-policy"
              className=""
            >
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="opacity-60 self-end flex gap-[4px]">© 2024 Preps</div>
      </div>
    </nav>
  );
};

export default Footer;
