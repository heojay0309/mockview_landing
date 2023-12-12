import Image from 'next/image';

const About = () => {
  return (
    <div id="about">
      <section className="text-gray-400 bg-gray-900 body-font w-screen">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-indigo-400 bg-gray-800 flex-shrink-0">
              <svg
                viewBox="-1 -9 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                // className="w-4 h-4 ml-2"
              >
                <path d="M15,0 L7,0"></path>
                <path d="M15,5 L7,5"></path>
              </svg>
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-white text-lg title-font font-medium mb-2">
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-white text-lg title-font font-medium mb-2">
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="sm:w-32 order-first sm:order-none sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full text-indigo-400 bg-gray-800 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="sm:w-16 sm:h-16 w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-indigo-400 bg-gray-800 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
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
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-white text-lg title-font font-medium mb-2">
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <button className="flex mx-auto mt-20 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Try Now!
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
