import { FormEvent } from 'react';

const Contact = () => {
  const handleSubmit = async (event: any) => {
    event.preventDefault(); // Prevents the default form submission

    // FormData API to capture the form data
    const formData = new FormData(event.target);

    try {
      const response = await fetch(
        `https://formspree.io/f/${process.env.FORMSPREE_URL}`,
        {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json',
          },
        }
      );

      // Handle the response from Formspree
      if (response.ok) {
        // You could clear the form or show a success message
        console.log('Form submitted successfully!');
      } else {
        // There was an error submitting the form
        console.log('Form submission failed!');
      }
    } catch (error) {
      // Handle the error here if fetch itself fails (e.g. network error)
      console.log('Network error:', error);
    }
  };

  return (
    <section className="relative w-full flex flex-col gap-[16px] ">
      <div className="flex flex-col items-start">
        <span className="font-[400] text-[16px] leading-[24px] text-start md:text-start ">
          Thank you for your interest. Feel free to contact us for any inquiries
          and we will get back to you as soon as possible.
        </span>
      </div>
      <div className="w-full">
        <form
          action={'https://formspree.io/f/xjvngdwp'}
          className="flex flex-col"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div className="flex w-full flex-col md:flex-row justify-evenly md:gap-[16px] gap-[8px]">
            <div className="relative w-full">
              <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className=" w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            {/* <div className="p-2 w-1/2"> */}
            <div className="relative w-full">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-400"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="peer w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                Please provide a valid email address.
              </p>
              {/* </div> */}
            </div>
          </div>
          <div className="w-full">
            <div className="relative">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-400"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
          </div>
          <div className="p-2 w-full">
            <button className="flex mx-auto  bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
