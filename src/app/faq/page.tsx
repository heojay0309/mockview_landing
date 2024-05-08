import Faq from '@/components/Faq';

export default function FaqPage() {
  return (
    <div className="flex flex-col md:px-[64px] px-[32px] gap-[32px] py-[32px]">
      <h1 className=" leading-[64px] tracking-[4%] text-[48px] font-[600]">
        Frequently Asked Questions
      </h1>
      <div className="border-b opacity-60"></div>
      <Faq />
    </div>
  );
}
