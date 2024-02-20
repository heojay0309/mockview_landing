import { GiArtificialIntelligence } from 'react-icons/gi';

const About = () => {
  return (
    <div id="about" className="relative overflow-x-clip">
      <section className="text-gray-400 bg-transparent body-font ">
        <div className=" px-5 py-24  ">
          <div className="text-center mt-6 mb-10 sm:mt-0 border-gray-800 border-b-2 features lg:w-3/5 mx-auto px-5 py-12">
            <div className="flex justify-center flex-col items-center text-gray-400 gap-5">
              <div className="rounded-full bg-gray-800 sm:w-32 sm:h-32 h-20 w-20 inline-flex justify-center items-center text-indigo-400">
                <GiArtificialIntelligence size={80} />
              </div>
              <h2 className="text-white text-lg title-font leading-snug font-medium mb-2">
                Tailored Just For You
              </h2>
              <p className="leading-relaxed text-base ">
                MockView presents a unique, AI-driven interview experience where
                each session is crafted by advanced algorithms, ensuring that no
                two interviews are ever the same. This personalized approach
                allows us to adapt to your specific needs and skills, providing
                a fresh and distinct challenge every time.
              </p>
            </div>
          </div>

          <div
            data-direction="right"
            className="flex items-center lg:w-3/5 mx-auto features border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col"
          >
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-indigo-400 bg-gray-800 flex-shrink-0">
              <svg
                viewBox="-1 -9 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15,0 L7,0"></path>
                <path d="M15,5 L7,5"></path>
              </svg>
            </div>
            <div className="flex-grow sm:text-left  text-center mt-6 sm:mt-0">
              <h2 className="text-white leading-snug  text-lg title-font font-medium mb-2">
                Be Calm, Solve Algos
              </h2>
              <p className="leading-relaxed text-base">
                Algothrim problems are crucial in interviews because they
                provide tangible evidence of a candidate&apos;s ability to solve
                problems and build functional solutions, demonstrating their
                technical competence and readiness for the role. Additionally,
                showcasing coding proficiency helps interviewers assess a
                candidate&apos;s critical thinking, logic, and attention to
                detail, which are essential qualities in many technical
                positions.
              </p>
              <a className="mt-3 text-indigo-400 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="flex items-center lg:w-3/5 mx-auto features border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-white leading-snug  text-lg title-font font-medium mb-2">
                Technical Speaking
              </h2>
              <p className="leading-relaxed text-base">
                Technical speaking is important in interviews as it allows
                candidates to effectively communicate complex ideas and
                solutions, demonstrating not only their technical knowledge but
                also their ability to convey intricate concepts clearly to a
                diverse audience, including those who may not have a technical
                background.
              </p>
              <a className="mt-3 text-indigo-400 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className=" sm:w-32 order-first sm:order-none sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full text-indigo-400 bg-gray-800 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="sm:w-16 sm:h-16 w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
          </div>
          <div
            data-direction="right"
            className="features flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col"
          >
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-indigo-400 bg-gray-800 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                viewBox="0 0 100 100"
                className="sm:w-24 sm:h-24 w-16 h-16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="
                    M70,16
                    c0,20,-10,30,-20,30
                    c10,0,20,10,20,30
                    c0,-20,10,-30,20,-30
                    c-10,0,-20,-10,-20,-30
                    z
                    M30,0
                    c0,20,-10,30,-20,30
                    c10,0,20,10,20,30
                    c0,-20,10,-30,20,-30
                    c-10,0,-20,-10,-20,-30
                    z
                    M43,42
                    c0,20,-10,30,-20,30
                    c10,0,20,10,20,30
                    c0,-20,10,-30,20,-30
                    c-10,0,-20,-10,-20,-30
                    z
                    "
                ></path>
              </svg>
            </div>

            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0 ">
              <h2 className="text-white leading-snug  text-lg title-font font-medium mb-2">
                Post-Interview Feedback
              </h2>
              <p className="leading-relaxed text-base">
                Feedback is crucial in enhancing interview skills as it provides
                insightful perspectives on areas of strength and improvement,
                enabling candidates to refine their approach, communication, and
                overall presentation to better align with the expectations of
                potential employers.
              </p>
              <a className="mt-3 text-indigo-400 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          {/* <button className="flex mt-10 items-center mx-auto  text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Try Now!
          </button> */}
        </div>
      </section>
    </div>
  );
};

export default About;
