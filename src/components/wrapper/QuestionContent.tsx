import Image from 'next/image';
type questionType = {
  id: string;
  question: string;
  src: string;
  description1: string;
  description2?: string;
  description3?: string;
  description4?: string[];
};
interface IQuestionProps {
  selectedQuestion: questionType | null;
  isTransitioning: boolean;
}

const QuestionContent = ({
  selectedQuestion,
  isTransitioning,
}: IQuestionProps) => {
  if (!selectedQuestion) return;
  return (
    <div
      className={`flex-1 flex flex-col gap-[64px] w-full items-start h-full justify-start tablet:justify-center transition-all  ${
        isTransitioning ? 'fade-out' : 'fade-in'
      }`}
    >
      <Image
        src={selectedQuestion.src}
        alt={selectedQuestion.id}
        width={480}
        height={480}
        priority
        className="self-center"
      />
      <div className="flex w-full flex-col gap-[16px] tablet:max-h-[496px] max-h-[496px] overflow-y-scroll h-full">
        <h1 className="font-[600] text-[24px] leading-[28px]">
          {selectedQuestion.question}
        </h1>
        <div className="flex flex-col text-[16px] leading-[24px] font-[400] space-y-[12px]">
          <span className="">{selectedQuestion.description1}</span>
          <span className="">{selectedQuestion.description2}</span>
          <span className="">{selectedQuestion?.description3}</span>
          {selectedQuestion.description4?.map((desc, index) => {
            return (
              <div
                key={index}
                className=" flex-col font-[200] leading-[24px] text-[16px] flex"
              >
                <ul>{desc}</ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuestionContent;
