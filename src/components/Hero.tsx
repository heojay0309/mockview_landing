import Image from 'next/image';
const Hero = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font w-screen">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Interview is a
            <br className="hidden lg:inline-block" />
            Numbers Game
          </h1>
          <p className="mb-8 leading-relaxed">
            Technical interviews are nerve-racking, and can feel foregin despite
            hundreds of algorithm questions you have solved in preparation.
            Practice real-life technical interviews and PWN your upcoming
            interviews with MockView.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Practice for Free
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src="/about1.png"
            width={720}
            height={600}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
