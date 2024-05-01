'use client';
import React, { useRef, useState, useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { Source_Code_Pro } from 'next/font/google';

import { handleContactForm } from './action';

const source = Source_Code_Pro({ subsets: ['latin'] });

const FormButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="bg-[#2F67E6] border border-[#5D8EFE] md:px-[32px] md:py-[8px] px-[16px] py-[4px] hover:bg-opacity-90 text-white rounded-[4px] h-[40px] w-[119px] flex items-center justify-center"
      aria-disabled={pending}
    >
      <span className="text-[16px] leading-[24px] font-[600] text-center self-center">
        {pending ? 'Submitting' : 'Submit'}
      </span>
    </button>
  );
};

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
  const [lines, setLines] = useState([4]);

  useEffect(() => {
    if (state.message) {
      setMessage(state.message);
      setTimeout(() => setMessage(''), 5000);
      setEmailInput('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

    // Append the dummy div to the body to avoid any container style interference

    // Set the text content up to the selection

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
    // if (!inputRef.current) return;
    // const textarea = inputRef.current;
    // const caret = caretRef.current;
    // if (!textarea || !caret || !textarea.parentNode) return;

    // // Create a dummy div to calculate the position
    // const div = document.createElement('div');
    // div.style.position = 'absolute';
    // div.style.visibility = 'invisible';
    // div.style.whiteSpace = 'pre-wrap';
    // div.style.font = 'inherit';
    // // div.style.width = '800px';

    // // Append the dummy div to the parent of the textarea
    // textarea.parentNode.insertBefore(div, textarea.nextSibling);

    // // Set the text content up to the selection
    // div.textContent = textarea.value.substr(0, textarea.selectionStart);
    // div.style.height = `${textarea.scrollTop}px`; // Adjust for scroll

    // // Create a span at the end to get the position
    // const span = document.createElement('span');
    // span.textContent = '|';
    // div.appendChild(span);

    // // Position the caret
    // caret.style.left = `${span.offsetLeft}px`;
    // caret.style.top = `${span.offsetTop}px`;
    // // caret.style.height = `${span.offsetHeight}px`;
    // caret.style.visibility = 'visible'; // Make the caret visible

    // // Clean up by removing the dummy div from the DOM
    // textarea.parentNode.removeChild(div);
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

  const handleMessageLines = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const lines = e.target.value.split('\n');
    setLines(lines.map((_, index) => index + 4)); // Assuming line numbering starts at 4
    setCountRows(lines.length);
  };

  const handleClick = () => {
    updateCaretPosition();
  };

  return (
    <div
      className={`max-w-[1440px] ${source.className}  w-full min-h-[436px] max-h-none gap-[32px] flex flex-col text-white`}
    >
      <h1 className="font-[600] text-[48px] leading-[64px] tracking-[4%]">
        Contact Us
      </h1>
      <form
        action={formAction}
        className="flex flex-col gap-[32px] max-w-[800px]"
      >
        <div className="text-[16px] text-start text-white ease-in-out duration-300">
          {message}
        </div>
        <div className="gap-[8px] flex flex-col font-[500] text-[24px] leading-[36px] mb-[16px]">
          <div className="flex gap-[16px] items-center">
            <span className="leading-[28px]">1</span>
            <label className="opacity-50 leading-[24px] indent-4">
              #input your Email
            </label>
          </div>
          {/* <div className="flex gap-[16px] items-center"> */}
          <div className="flex gap-[16px] items-center">
            <span className="leading-[28px]">2</span>
            {/* <div className="flex gap-[16px] w-full relative group-focus"> */}
            <div className="flex gap-[16px] items-center relative h-full w-full">
              {/* <span className="absolute top-0 left-4">{'>'}</span> */}
              <span className="absolute top-0 left-4">{'>'}</span>

              <input
                ref={emailInputRef}
                type="email"
                id="email"
                name="email"
                required
                // value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className={`bg-transparent h-full caret-transparent relative resize-none ml-[32px]  cursor-text max-h-none overflow-visible outline-none appearance-none flex-1 w-full `}
              />
              <span
                ref={caretRefsEmail}
                className="cursor ml-[32px] mt-[28px]"
              ></span>
            </div>
          </div>
          <div className="flex gap-[16px] items-center">
            <span className="leading-[28px]">3</span>
            <span className="opacity-50 leading-[24px] indent-4">
              #input your Message
            </span>
          </div>
          <div className="flex gap-[16px] items-center relative h-full w-full max-h-none">
            {/* <div className="flex gap-[4px] w-full relative group-focus  indent-4">
            </div> */}
            <div className="flex flex-col absolute top-0 max-h-none">
              {lines.map((line) => {
                return (
                  <span key={line} className="text-white">
                    {line}
                  </span>
                );
              })}
            </div>
            <span className="absolute top-0 left-12">{'>'}</span>
            <textarea
              ref={inputRef}
              rows={countRows + 1}
              wrap="soft"
              onChange={(e) => handleMessageLines(e)}
              onFocus={(e) => handleMessageLines(e)}
              onClick={handleClick}
              className={`bg-transparent h-full caret-transparent relative resize-none ml-[64px] cursor-text max-h-none overflow-visible outline-none appearance-none flex-1 w-full `}
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
