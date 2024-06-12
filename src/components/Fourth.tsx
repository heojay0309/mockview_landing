'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import QuestionContent from './wrapper/QuestionContent';

interface ISelected {
  id: string;
  question: string;
  src: string;
  description1: string;
  description2?: string;
  description3?: string;
  description4?: string[];
}

const Fourth = () => {
  const questions = [
    {
      id: 'first',
      question: 'What is Preps?',
      src: '/preps_diamond.svg',
      description1:
        'Preps offers AI-powered mock interview simulations that closely resemble real-world technical interviews conducted at leading tech companies.',
      description2: '',
    },
    {
      id: 'second',
      question: 'How does it work?',
      src: '/preps_face.svg',
      description1: `We made prepping for your interviews as easy as 1, 2, 3`,
      description2: '',
      description3: '',
      description4: [
        '1. Choose any topic you would like to practice',
        '2. Meet your personalized AI interviewer',
        '3. Receive actionable feedbacks on your strengths and weaknesses',
      ],
    },
    {
      id: 'third',
      question: 'Does it support multiple languages?',
      src: '/preps_code.svg',
      description1: `We are only supporting English at the moment.`,
    },
    {
      id: 'fourth',
      question: 'Is it free to use?',
      src: '/preps_free.svg',
      description1: `Yes, it is 100% free to use! Our goal is to become the platform that'll guide our users towards career success. We plan to introduce our paid plans offering more features that will help your interview preps easier!`,
      description2: '',
    },
  ];

  const [selectedQuestion, setSelectedQuestion] = useState<ISelected | null>(
    questions[0]
  );

  const [isTransitioning, setIsTransitioning] = useState(false);

  return (
    <div className="tablet:main w-full flex tablet:flex-row flex-col gap-[64px] py-[64px] h-full min-h-[900px] items-center tablet:justify-center">
      <div className="w-full tablet:w-1/3 tablet:min-w-[440px] laptop:min-w-[600px] h-full bg-[#06091E]  rounded-[32px] py-[64px] tablet:py-[128px] laptop:px-[64px] tablet:px-[32px]">
        <div className="flex flex-col items-start tablet:items-center justify-center gap-[64px] w-full h-full tablet:px-[0px] px-[16px]">
          <h1 className="font-[600] text-[32px] leading-[40px] max-w-[472px]">
            Bespoke Interview Prep. For anyone. From anywhere.
          </h1>
          <div className="flex flex-col gap-[16px] w-full">
            {questions.map((question, index) => (
              <div key={question.question} className="flex flex-col">
                <button
                  onClick={() => {
                    setIsTransitioning(true);
                    setTimeout(() => {
                      if (selectedQuestion?.id === question.id) {
                        setSelectedQuestion(null);
                      } else {
                        setSelectedQuestion(question);
                      }
                      setIsTransitioning(false);
                    }, 300);
                  }}
                  // key={question.question}
                  className={`flex justify-between w-full text-start px-[16px] py-[4px] rounded-[4px] items-center hover:bg-[#181C2E] hover:text-white hover:opacity-60 ${
                    selectedQuestion?.id === question.id
                      ? 'opacity-100 bg-[#181C2E] text-white'
                      : 'opacity-50'
                  }`}
                >
                  <span className={`font-[400] text-[20px] leading-[40px]`}>
                    {question.question}
                  </span>
                  <Image
                    src="/rightArrow.svg"
                    alt="arrow"
                    width={6}
                    height={12}
                    className={`${
                      selectedQuestion?.id === question.id
                        ? 'tablet:rotate-[0deg] rotate-[270deg]'
                        : 'tablet:rotate-[0deg] rotate-[90deg]'
                    } `}
                  />
                </button>
                {selectedQuestion?.id === question.id && (
                  <div className="flex tablet:hidden py-[32px] ">
                    <QuestionContent
                      selectedQuestion={selectedQuestion}
                      isTransitioning={isTransitioning}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
          <Link
            href={'/faq'}
            className="text-[#2F78E6] leading-[24px] text-[16px] font-[600] w-full"
          >
            View FAQ →
          </Link>
        </div>
      </div>
      <div className="tablet:flex hidden flex-1 w-full h-full items-center justify-center ">
        <QuestionContent
          selectedQuestion={selectedQuestion}
          isTransitioning={isTransitioning}
        />
      </div>
    </div>
  );
};
export default Fourth;
