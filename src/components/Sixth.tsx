'use client';
import React, { useRef, useState, useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { Source_Code_Pro } from 'next/font/google';

import { handleContactForm } from './action';

const source = Source_Code_Pro({ subsets: ['latin'] });
interface IRowCounts {
  [key: number]: number;
}
const FormButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="bg-[#2F67E6] border border-[#5D8EFE] md:px-[32px] md:py-[8px] px-[16px] py-[4px] hover:bg-opacity-90  rounded-[4px] h-[40px] w-[119px] flex items-center justify-center"
      aria-disabled={pending}
    >
      <span className="text-[16px] leading-[24px] font-[600] text-center self-center">
        {pending ? 'Submitting' : 'Submit'}
      </span>
    </button>
  );
};

/* 

  {
    

  }




*/

const Sixth = () => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [emailInput, setEmailInput] = useState<string>('');
  const emailInputRef = useRef<HTMLInputElement>(null);
  const caretRefsEmail = useRef<HTMLSpanElement>(null);
  const caretRef = useRef<HTMLSpanElement>(null);
  const [message, setMessage] = useState<string>('');
  const [state, formAction] = useFormState(handleContactForm, {
    message: '',
  });
  const [countRows, setCountRows] = useState(0);
  const [lines, setLines] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ]);
  const [arr, setArr] = useState<number[]>([]);

  const cacheLines = useRef<IRowCounts>({});

  useEffect(() => {
    if (state.message) {
      setMessage(state.message);
      setTimeout(() => setMessage(''), 5000);
      setEmailInput('');
    }
  }, [state]);

  useEffect(() => {
    const handleScroll = () => updateCaretPosition();
    const textarea = inputRef.current;

    if (textarea) {
      textarea.addEventListener('scroll', handleScroll);
      textarea.addEventListener('click', updateCaretPosition);
      textarea.addEventListener('keyup', updateCaretPosition);

      return () => {
        textarea.removeEventListener('scroll', handleScroll);
        textarea.removeEventListener('click', updateCaretPosition);
        textarea.removeEventListener('keyup', updateCaretPosition);
      };
    }
  }, []);

  const updateCaretPosition = () => {
    const textarea = inputRef.current;
    const caret = caretRef.current;
    if (!textarea || !caret) return;

    const position = textarea.selectionStart;
    // Create a dummy div to calculate the position
    const div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.visibility = 'hidden';
    div.style.whiteSpace = 'pre-wrap';
    div.style.wordWrap = 'break-word';
    div.style.width = textarea.offsetWidth + 'px';
    div.style.font = getComputedStyle(textarea).font;

    div.textContent = textarea.value.substr(0, position);

    // Create a span at the end to get the position
    const span = document.createElement('span');
    span.textContent = textarea.value.substr(position) || '.';
    // span.textContent = '|';
    div.appendChild(span);

    document.body.appendChild(div);
    // Calculate position based on the dummy div
    const { offsetLeft, offsetTop } = span;
    // Position the caret
    caret.style.left = `${offsetLeft}px`;
    caret.style.top = `${offsetTop}px`;
    caret.style.visibility = 'visible'; // Make the caret visible
    // Clean up by removing the dummy div from the DOM
    document.body.removeChild(div);
  };

  const getTextWidth = (text: string, font: string): number => {
    let canvas = document.createElement('canvas');
    let context = canvas.getContext('2d');
    if (context) {
      context.font = font;
      return context.measureText(text).width;
    }
    return 0;
  };

  useEffect(() => {
    const updateCaretPosition = () => {
      if (emailInputRef.current && caretRefsEmail.current) {
        const textWidth = getTextWidthEmail(
          emailInput,
          getComputedStyle(emailInputRef.current).font
        );
        caretRefsEmail.current.style.transform = `translateX(${textWidth}px)`;
      }
    };

    updateCaretPosition();
  }, [emailInput]);

  const handleEmailChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmailInput(e.target.value);
    updateCaretPositionEmail();
  };

  useEffect(() => {
    const handle = setInterval(updateCaretPositionEmail, 100); // Update caret position periodically
    return () => clearInterval(handle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emailInput]);

  const updateCaretPositionEmail = () => {
    if (emailInputRef.current) {
      const textWidth = getTextWidthEmail(
        emailInput,
        getComputedStyle(emailInputRef.current).font
      );
      if (caretRefsEmail.current)
        caretRefsEmail.current.style.transform = `translateX(${textWidth}px)`;
    }
  };

  const getTextWidthEmail = (text: string, font: string): number => {
    let canvas = document.createElement('canvas');
    let context = canvas.getContext('2d');
    if (context) {
      context.font = font;
      return context.measureText(text).width;
    }
    return 0;
  };

  useEffect(() => {
    if (!cacheLines.current) {
      return;
    }
    const checkRows = async () => {
      setLines([...lines, lines[lines.length - 1] + 1]);
      if (cacheLines.current) cacheLines.current[countRows] = 1;
      return;
    };
    console.log('countRows', countRows, cacheLines.current);
    if (countRows !== 0 && countRows % 45 === 0) {
      if (!cacheLines.current[countRows]) {
        cacheLines.current[countRows] = 0;
      }
      if (cacheLines.current[countRows] === 1) {
        console.log('cache', cacheLines);
        setLines((prev) => {
          console.log('prev', prev);
          cacheLines.current[countRows] = 0;
          return prev.slice(0, lines.length - 1);
          // return prev;
        });
        return;
      } else {
        checkRows();
      }
    }
  }, [countRows]);

  const handleMessageLines = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log('e', e);

    const text = e.target.value;
    console.log('text', text);
    if (text.endsWith('\n') || text.endsWith('\r\n')) {
      console.log('entered');
      setLines([...lines, lines[lines.length - 1] + 1]);
    }
    setCountRows(text.length);
  };

  const handleClick = () => {
    updateCaretPosition();
  };

  useEffect(() => {
    for (let i = 0; i < 30; i++) {
      setArr([...arr, i + 1]);
    }
  }, []);

  const makeLines = (num: number) => {
    // const
    for (let i = 0; i < num; i++) {
      return <div>{i}</div>;
    }
  };
  function autoAdjustHeight() {
    const textarea = document.getElementById('message');

    if (!textarea) return;

    // Reset the height to 'auto' to allow the scrollHeight to represent the true height needed
    textarea.style.height = 'auto';

    // Set the height to the scrollHeight to expand or shrink the textarea
    textarea.style.height = `${textarea.scrollHeight}px`;
  }

  return (
    <div
      className={`${source.className} w-full max-w-[800px] h-full  justify-center max-h-none gap-[32px] flex flex-col  py-[64px]`}
    >
      <h1 className="font-[600] text-[48px] leading-[64px] tracking-[4%]">
        Contact Us
      </h1>
      <form
        action={formAction}
        id="formHeight"
        className="flex flex-col gap-[32px] max-w-[800px] flex-1 relative"
      >
        <div className="text-[16px] text-start absolute ease-in-out duration-300">
          {message}
        </div>
        <div className=" flex flex-col font-[500] text-[24px] leading-[40px] bg-black">
          <div className="flex gap-[16px] items-center">
            <span className="leading-[40px]">1</span>
            <label className="opacity-50 leading-[24px] indent-4">
              #input your Email
            </label>
          </div>
          {/* <div className="flex gap-[16px] items-center"> */}
          <div className="flex gap-[16px] relative items-center">
            <span className="leading-[28px]">2</span>
            <div className="flex gap-[16px] items-center  h-full w-full ">
              <span className="absolute top-0 left-11">{'>'}</span>
              <input
                ref={emailInputRef}
                type="email"
                id="email"
                name="email"
                required
                onChange={(e) => setEmailInput(e.target.value)}
                className={`bg-transparent  caret-transparent relative resize-none ml-[34px]  cursor-text max-h-none overflow-visible outline-none appearance-none flex-1 w-full `}
              />
              <span
                ref={caretRefsEmail}
                className="cursor ml-[32px] mt-[28px]"
              ></span>
            </div>
          </div>
          <div className="flex gap-[16px] items-center">
            <span className="leading-[40px]">3</span>
            <span className="opacity-50 leading-[24px] indent-4">
              #input your Message
            </span>
          </div>
          {/* <div className="flex gap-[16px] items-center relative h-full w-full "> */}

          <div className="flex relative w-full flex-1 flex-grow">
            {/* <div className="flex gap-[4px] w-full relative group-focus  indent-4">
            </div> */}

            <div className="flex flex-col h-full overflow-hidden absolute gap-[0px]">
              {lines.map((line, index) => {
                return (
                  <span key={index} className="leading-[40px]">
                    {line + 3}
                  </span>
                );
              })}
            </div>
            <span className="absolute left-11 w-full">{'>'}</span>

            {/* <span className="absolute  top-[-4px] left-11 w-full">{'>'}</span> */}
            <textarea
              ref={inputRef}
              id="message"
              rows={1}
              cols={45}
              name="message"
              onChange={(e) => autoAdjustHeight()}
              // onChange={(e) => handleMessageLines(e)}
              // onFocus={(e) => handleMessageLines(e)}
              // onClick={handleClick}
              className={`bg-transparent caret-transparent relative resize-none ml-[64px] cursor-text max-h-none overflow-visible outline-none appearance-none flex-1 w-full `}

              // className="bg-blue-400 resize-none cursor-text ml-[64px] outline-none appearance-none w-full "
              // className={`bg-transparent bg-blue-400 resize-none  cursor-text outline-none appearance-none w-full `}
            ></textarea>
            <span ref={caretRef} className="cursor ml-[64px] mt-[28px]"></span>
          </div>
        </div>
        <FormButton />
      </form>
    </div>
  );
};
export default Sixth;
