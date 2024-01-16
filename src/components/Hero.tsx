const Hero = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font w-screen pt-5 px-5 bg-[url('/bgtest.png')] bg-center">
      <div className="flex pt-24 flex-col items-center justify-center">
        <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 items-center text-center">
          <h1 className="title-font md:text-3xl text-2xl mb-4 font-medium text-white text-center self-center">
            Practice For Real
            <br />
            Perfect Your Interview
          </h1>
          <p className="mb-8 leading-relaxed text-center">
            Perfect your interview skills by running realistic and authentic
            interviews! We&apos;ve got you covered from
            phone-screens-to-technical interviews for your success.
          </p>
          <button className="inline-flex text-white self-center bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 text-lg">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
