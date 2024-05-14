'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

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
        'Preps is a cutting-edge platform specifically designed to help software engineers prepare for technical interviews. At its core, Preps offers AI-powered mock interview simulations that closely resemble real-world technical interviews conducted at leading tech companies.',
      description2:
        'Using Preps, candidates can engage in live, interactive sessions with AI interviewers, tackling real-time coding challenges and discussing their approaches to solving complex algorithmic problems. These sessions are designed to replicate the dynamics of interviews conducted via video conferencing tools like Zoom or Google Meet, providing an immersive experience that prepares candidates for the pressures and expectations of actual tech interviews.',
    },
    {
      id: 'second',
      question: 'How does Preps work?',
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
      question: 'What are the simulations like?',
      src: '/preps_code.svg',
      description1: `Every mock interview simulates real-time communication, mimicking platforms like Zoom or Google Meet, and is designed to test your ability to respond under pressure, articulate your thoughts, and communicate effectively just as you would in an actual interview.`,
      description2: `During the simulation, you'll face coding challenges that require not only correct solutions but also a clear explanation of your thought process. This part of the simulation helps sharpen your coding skills, improves your ability to think aloud, and enhances your problem-solving strategies under timed conditions.`,
      description3:
        'Our simulations are designed to be adaptive, catering to a wide range of experience levels from beginners to seasoned professionals.',
    },
    {
      id: 'fourth',
      question: 'Is Preps free to use?',
      src: '/preps_code.svg',
      description1: `Yes, it is 100% free to use! Our goal is to become the platform that'll guide our users towards career success. We plan to introduce our paid plans offering more features that will help your interview preps easier!`,
      description2: '',
    },
  ];
  const [selectedQuestion, setSelectedQuestion] = useState<ISelected>(
    questions[0]
  );
  const [isTransitioning, setIsTransitioning] = useState(false);

  return (
    <div className="main w-full flex  gap-[64px] py-[64px]">
      <div className="w-1/3 tablet:w-15/36 h-full">
        <div className="flex flex-col items-center justify-center gap-[64px] w-full h-full">
          <h1 className="font-[600] text-[32px] leading-[40px] max-w-[472px]">
            Bespoke Interview Prep. For anyone. From anywhere.
          </h1>
          <div className="flex flex-col gap-[16px] w-full">
            {questions.map((question) => (
              <button
                onClick={() => {
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setSelectedQuestion(question);
                    setIsTransitioning(false);
                  }, 300);
                }}
                key={question.question}
                className={`flex justify-between w-full px-[16px] py-[4px] rounded-[4px] items-center hover:bg-[#181C2E] hover:text-white hover:opacity-60 ${
                  selectedQuestion.id === question.id
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
                />
              </button>
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
      <div
        className={`flex-1  flex flex-col gap-[64px] w-full items-start h-full px-[64px] justify-start tablet:justify-center transition-all  ${
          isTransitioning ? 'fade-out' : 'fade-in'
        }`}
      >
        <Image
          src={selectedQuestion.src}
          alt={selectedQuestion.id}
          width={320}
          height={320}
          priority
          className="self-center"
        />
        <div className="flex flex-col gap-[16px] tablet:max-h-[248px] max-h-[496px] overflow-scroll h-full">
          <h1 className="font-[600] text-[24px] leading-[28px]">
            {selectedQuestion.question}
          </h1>
          <div className="flex flex-col font-[400] space-y-[12px]">
            <span className="text-[16px] leading-[24px] font-[400]">
              {selectedQuestion.description1}
            </span>
            <span className="text-[16px] leading-[24px] font-[400] ">
              {selectedQuestion.description2}
            </span>
            <span className="text-[16px] leading-[24px] font-[400] ">
              {selectedQuestion?.description3}
            </span>
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
    </div>
  );
};
export default Fourth;
