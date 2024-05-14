const Faq = ({}: {}) => {
  const questions = [
    {
      question: 'What is Preps?',
      answer:
        'Preps is a cutting-edge platform specifically designed to help software engineers prepare for technical interviews. At its core, Preps offers AI-powered mock interview simulations that closely resemble real-world technical interviews conducted at leading tech companies. Using Preps, candidates can engage in live, interactive sessions with AI interviewers, tackling real-time coding challenges and discussing their approaches to solving complex algorithmic problems. These sessions are designed to replicate the dynamics of interviews conducted via video conferencing tools like Zoom or Google Meet, providing an immersive experience that prepares candidates for the pressures and expectations of actual tech interviews.',
    },
    {
      question: 'How does Preps simulate real interviews?',
      answer: `Every mock interview simulates real-time communication, mimicking platforms like Zoom or Google Meet, and is designed to test your ability to respond under pressure, articulate your thoughts, and communicate effectively just as you would in an actual interview. During the simulation, you'll face coding challenges that require not only correct solutions but also a clear explanation of your thought process. This part of the simulation helps sharpen your coding skills, improves your ability to think aloud, and enhances your problem-solving strategies under timed conditions. Our simulations are designed to be adaptive, catering to a wide range of experience levels from beginners to seasoned professionals.`,
    },
    {
      question: 'What kind of technical questions can I expect?',
      answer: `You'll encounter a wide range of questions from data structures and algorithms, similar to those asked by top tech companies. We constantly update our questions bank to reflect the latest industry trends and standards.`,
    },
    {
      question:
        'Do I need any specific software or hardware to use Preps like how Zoom does?',
      answer: `Nope, all you'll need is a stable internet connection and a webcam-enabled device. Our platform is web-based, so no additional software installation is required. We recommend you to use the Chrome browser for your optimal experience.`,
    },
    {
      question: 'How is the live coding challenge conducted?',
      answer: `Live coding challenges on Preps take place within an embedded IDE on our platform. You will write and execute code while explaining your approach to the AI interviewer, just as you would in a real interview setting.`,
    },
    {
      question: 'How does the AI provide feedback on my performance?',
      answer:
        'Our AI system analyzes your code for correctness, efficiency, and style, as well as evaluates your problem-solving approach and communication skills. After the session, it generates a detailed feedback report highlighting areas of strength and opportunities for improvement.',
    },
    {
      question: 'Can I choose the difficulty level of my mock interview?',
      answer:
        'Yes, Preps allows you to set the difficulty level of your mock interview to match your desired difficulty level of problems or the job role you are aiming for, ensuring that the practice you get is tailored to your needs.',
    },
    {
      question: 'What if I face technical issues during the mock interview?',
      answer:
        'We provide a comprehensive support guide for common technical issues. If you encounter a problem not covered in the guide, our customer support team is available to assist you.',
    },
    {
      question: 'Is there a way to review past interviews?',
      answer:
        'No, currently we do not offer this feature. However, in the future, we will offer the feature to record and review your interviews. Preps will store the recordings of your past interviews, and you will be able to access them anytime. Reviewing past performances can be an effective way to track your progress and refine your interviewing skills.',
    },
    {
      question: 'Is it free to take mock interviews?',
      answer: `Yes, it is 100% free to use! Our goal is to become the platform that'll guide our users towards career success. We plan to introduce our paid plans offering more features that will help your interview preps easier!`,
    },
    {
      question:
        'Does Preps offer preparation for non-technical interview questions?',
      answer:
        'Currently, Preps specializes in technical interviews only. However, we are considering expanding our services to include non-technical interview preparation in the future.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept all major credit cards and online payment methods. Our payment gateway is secure and encrypted to ensure your financial safety and privacy.',
    },
    {
      question: 'How can Preps help me if I am new to technical interviews?',
      answer:
        'Preps is perfect for beginners. Our platform will introduce you to the format of technical interviews and the types of questions asked, with various difficulty levels to ease you into the process.',
    },
  ];
  return (
    <section className="relative flex flex-col gap-[32px] ">
      <div className="flex flex-col items-start">
        <div className="font-[400] text-[16px] leading-[24px] text-start tablet:text-start ">
          In this FAQs section, we aim to address common questions and concerns
          asked in the past. If the answers we have provided below are unclear
          or need a further assistance, we are here to help! Feel free to{' '}
          contact us for all inquries!
        </div>
      </div>
      <div className="tablet:text-justify overflow-y-auto flex flex-col tablet:gap-[32px] gap-[16px] py-[8px]">
        {questions.map((question, index) => {
          return (
            <div
              key={index}
              className="flex  px-[16px] tablet:pl-[0px] flex-col gap-[8px]"
            >
              <div className="flex gap-[4px] font-[600] opacity-100 tablet:text-[18px] text-[16px]">
                <div className="">
                  {<span>{index + 1 + '. '}</span>}
                  {question.question}
                </div>
              </div>
              <div className=" font-[400] opacity-60">{question.answer}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
