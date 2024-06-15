import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <nav className="relative tablet:px-[64px] tablet:py-[32px] h-[64px] w-full px-[32px]">
      <div className=" font-[600] leading-[24px] flex flex-row justify-between items-center  py-[16px]">
        <div className="flex tablet:gap-[32px] tablet:flex-row flex-col gap-[8px] items-center justify-center">
          <Link
            href="/"
            className="flex gap-[4px] justify-center items-center self-start tablet:self-center"
          >
            <Image
              alt="preps"
              height={32}
              width={23.45}
              src={'/preps_footer.png'}
            />
            <h1 className="text-[20px] leading-[24px] font-[600] opacity-60">
              Preps
            </h1>
          </Link>
          <div className="border-l h-[30px] opacity-40 border-white hidden tablet:flex"></div>
          <div className="flex tablet:gap-[32px] gap-[16px] opacity-60 text-[12px] tablet:text-[16px]">
            <Link href="https://www.preps-ai.com/policies/terms-of-use">
              Terms of Use
            </Link>
            <div className="border-r my-1 tablet:hidden"></div>
            <Link
              href="https://www.preps-ai.com/policies/privacy-policy"
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
