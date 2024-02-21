'use client';
import { useEffect } from 'react';
import { useFormStatus, useFormState } from 'react-dom';
import { waitlistSignup } from '@/app/actions';
import { useToast } from './ui/use-toast';
const initialState = {
  message: null,
};
const Waitlist = () => {
  let authAction: any = waitlistSignup;
  const { toast } = useToast();
  const [state, formAction] = useFormState(authAction, initialState);
  const { pending } = useFormStatus();
  useEffect(() => {
    if (state.message) {
      toast({
        title: state.message + ' !',
        description: (
          <pre className="font-semibold text-slate-600 text-xs">
            I hope you have a great day
          </pre>
        ),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.message]);
  return (
    <div className=" bg-white hover:animate-none animate-bounce-slow shadow-lg shadow-gray-400 items-start justify-between border border-transparent rounded-lg p-16">
      <h1 className="text-[32px] font-[600] leading-tight tracking-wider">
        Join waitlist for Early Access
      </h1>
      <div className="flex flex-col pt-8">
        <form action={formAction} className="flex flex-col items-center gap-6">
          <div className="mt-1 p-2 w-full flex items-start border border-gray-300 rounded-md shadow-sm focus-within:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <input
              placeholder="Enter your email address"
              type="email"
              required
              name="email"
              className="w-full outline-none pl-1"
            ></input>
          </div>
          <button
            type="submit"
            className="w-[40%] mt-2 text-black py-3 px-4 text-[13px] bg-yellow-300 font-semibold rounded-md hover:bg-blue-700 disabled:bg-blue-300"
            disabled={pending}
          >
            GET EARLY ACCESS
          </button>
        </form>
      </div>
    </div>
  );
};

export default Waitlist;

// <div
//   id="getWaitlistContainer"
//   data-waitlist_id="13863"
//   data-widget_type="WIDGET_1"
// >
//   <Helmet>
//     <link
//       rel="stylesheet"
//       type="text/css"
//       href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css"
//     />
//     {/* <script src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js"></script> */}
//   </Helmet>
// </div>
