const Hero = () => {
  return (
    <section
      id="hero"
      className="text-white lg:text-[100px] py-10 pt-28 lg:p-0 text-md relative body-font"
    >
      <div className="flex flex-col items-start justify-end">
        <div className="flex flex-col items-center text-center">
          <h1 className=" flex flex-col shadow-xl lg:mb-64 font-bold lg:text-[150px] text-2xl text-center ">
            <span className="lg:mb-28">Practice For Real</span>
            {/* <br /> */}
            <span>Perfect Your Interview</span>
          </h1>
          <p className=" leading-relaxed  text-center">
            Perfect your interview skills by running realistic and authentic
            interviews! We&apos;ve got you covered from
            phone-screens-to-technical interviews for your success.
          </p>
          {/* <button className=" text-white self-center bg-indigo-500 mt-10 py-2 px-6 focus:outline-none hover:bg-indigo-600 text-[50px] rounded-lg">
            Get Started
          </button> */}
        </div>
      </div>
    </section>
    // <section className="text-gray-400 relative body-font w-screen pt-5 px-5 h-[600px]">
    //   <div className="flex pt-24 flex-col items-center justify-center">
    //     <div className="lg:flex-grow md:w-1/2 tracking-[-0.03em] flex flex-col md:items-start md:text-left mb-16 items-center text-center">
    //       <h1 className=" md:text-3xl shadow-xl  leading-snug text-2xl mb-4 font-medium text-white text-center self-center">
    //         Practice For Real
    //         <br />
    //         Perfect Your Interview
    //       </h1>
    //       <p className="mb-8 leading-relaxed  text-center">
    //         Perfect your interview skills by running realistic and authentic
    //         interviews! We&apos;ve got you covered from
    //         phone-screens-to-technical interviews for your success.
    //       </p>
    //       <button className="inline-flex text-white self-center bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 text-lg">
    //         Get Started
    //       </button>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Hero;
