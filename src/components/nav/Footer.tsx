import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <nav className="relative tablet:px-[64px] tablet:py-[32px] h-[64px] w-full px-[64px]">
      <div className=" font-[600] leading-[24px] flex flex-row justify-between items-center  py-[16px]">
        <div className="flex tablet:gap-[32px] tablet:flex-row flex-col gap-[8px] items-center justify-center">
          {/* <div className="flex flex-row tablet:items-center self-start gap-1">
            <h1 className="text-[#3e66de] text-[32px] leading-[24px] font-[600]">
              Prep
            </h1>
            <span className=" text-[32px] leading-[24px] self-center font-[600] ">
              AI
            </span>
          </div> */}
          <Link href="/" className="flex gap-[4px] justify-center items-center">
            <Image
              alt="preps"
              height={32}
              width={23.45}
              src={'/preps_footer.png'}
            />
            <h1 className=" text-[20px] leading-[24px] font-[600] opacity-60">
              Preps
            </h1>
          </Link>
          <div className="border-l h-[30px] opacity-40 border-white hidden tablet:flex"></div>
          <div className="flex tablet:gap-[32px] gap-[16px] opacity-60 text-[12px] tablet:text-[16px]">
            <Link href="https://www.prepai.dev/policies/terms-of-use">
              Terms of Use
            </Link>
            <div className="border-r my-1 tablet:hidden"></div>
            <Link
              href="https://www.prepai.dev/policies/privacy-policy"
              className=""
            >
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="opacity-60 self-end flex gap-[4px]">
          © 2024 Preps AI
        </div>
      </div>
    </nav>
  );
};

export default Footer;
