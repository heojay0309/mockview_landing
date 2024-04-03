const Faq = ({
  setContactToggle,
  setFaqToggle,
  setIsTransitioning,
}: {
  setFaqToggle: (val: boolean) => void;
  setContactToggle: (val: boolean) => void;
  setIsTransitioning: (val: boolean) => void;
}) => {
  const questions = [
    {
      question: 'What is MockView?',
      answer:
        'MockView is an innovative platform offering software engineers a chance to practice technical interviews in real-time. Our AI-powered interviewers simulate the experience of a real technical interview, providing users with a unique opportunity to prepare for and excel in their job interviews.',
    },
    {
      question: 'How does MockView simulate real interviews?',
      answer:
        'MockView uses advanced AI technology to create interview scenarios that mirror the questions, pacing, and interactive experience of a live technical interview. Our AI interviewers adapt to your responses, ensuring a dynamic and realistic interview practice session.',
    },
    {
      question: 'What kind of technical questions can I expect?',
      answer: `You'll encounter a wide range of questions from data structures and algorithms, similar to those asked by top tech companies. We constantly update our questions bank to reflect the latest industry trends and standards.`,
    },
    {
      question:
        'Do I need any specific software or hardware to use MockView like how Zoom does?',
      answer: `Nope, all you'll need is a stable internet connection and a webcam-enabled device. Our platform is web-based, so no additional software installation is required. We recommend you to use the Chrome browser for your optimal experience.`,
    },
    {
      question: 'How is the live coding challenge conducted?',
      answer: `Live coding challenges on MockView take place within an embedded IDE on our platform. You will write and execute code while explaining your approach to the AI interviewer, just as you would in a real interview setting.`,
    },
    {
      question: 'How does the AI provide feedback on my performance?',
      answer:
        'Our AI system analyzes your code for correctness, efficiency, and style, as well as evaluates your problem-solving approach and communication skills. After the session, it generates a detailed feedback report highlighting areas of strength and opportunities for improvement.',
    },
    {
      question: 'Can I choose the difficulty level of my mock interview?',
      answer:
        'Currently, in our beta version, we are not offering the feature. However, in the future, MockView will allow you to set the difficulty level of your mock interview to match your current skill set or the job role you are aiming for, ensuring that the practice you get is tailored to your needs.',
    },
    {
      question: 'What if I face technical issues during the mock interview?',
      answer:
        'We provide a comprehensive support guide for common technical issues. If you encounter a problem not covered in the guide, our customer support team is available to assist you.',
    },
    {
      question: 'Is there a way to review past interviews?',
      answer:
        'Yes, MockView stores the recordings of your past interviews, and you can access them anytime. Reviewing past performances can be an effective way to track your progress and refine your interviewing skills.',
    },
    {
      question: 'How often can I take mock interviews with MockView?',
      answer:
        'Depending on your subscription plan, you can take a certain number of mock interviews per month. We offer several plans to accommodate different preparation needs and frequencies.',
    },
    {
      question:
        'Does MockView offer preparation for non-technical interview questions?',
      answer:
        'Currently, MockView specializes in technical interviews only. However, we are considering expanding our services to include non-technical interview preparation in the future.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept all major credit cards and online payment methods. Our payment gateway is secure and encrypted to ensure your financial safety and privacy.',
    },
    {
      question: 'Is there a trial period for new users?',
      answer: `Yes, we offer a 7-day free trial that gives you full access to MockView’s features. This allows you to experience the platform and see how it can benefit your interview preparation before committing to a subscription.`,
    },
    {
      question: 'How can MockView help me if I am new to technical interviews?',
      answer:
        'MockView is perfect for beginners. Our platform will introduce you to the format of technical interviews and the types of questions asked, with various difficulty levels to ease you into the process.',
    },
    {
      question: `Can I get a refund if I'm not satisfied with the service?`,
      answer:
        'We aim for your complete satisfaction with MockView. If for any reason you are not satisfied, we offer a refund within the first 14 days of your subscription, no questions asked.',
    },
  ];
  return (
    <section className="relative lg:w-2/3 flex flex-col items-start gap-[16px]">
      <div className="flex flex-col items-start">
        <div className="font-[400] text-[16px] leading-[24px]">
          In this FAQs section, we aim to address common questions and concerns
          asked in the past. If the answers we have provided below are unclear
          or need a further assistance, we are here to help! Feel free to{' '}
          <button
            className="font-[500] text-blue-400"
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setContactToggle(true);
                setFaqToggle(false);
              }, 300);
            }}
          >
            contact us
          </button>{' '}
          for all inquries!
        </div>
      </div>
      <div className="border-2 border-gray-500 p-2 overflow-y-auto md:max-h-[400px] max-h-[300px] flex flex-col gap-[16px] ">
        {questions.map((question, index) => {
          return (
            <div key={index} className="flex flex-col gap-[8px]">
              <div className="flex gap-[8px] font-[600] opacity-100">
                <div>{index + 1 + '. '}</div>
                <h1>{question.question}</h1>
              </div>
              <div className="indent-2 font-[400]  opacity-60">
                {question.answer}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
