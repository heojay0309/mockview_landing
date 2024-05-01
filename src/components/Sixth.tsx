'use client';
import React, { useRef, useState, useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import getCaretCoordinates from 'textarea-caret';

import { handleContactForm } from './action';
import { Source_Code_Pro } from 'next/font/google';
const source = Source_Code_Pro({ subsets: ['latin'] });

type InputRow = {
  id: number;
  value: string;
};
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
  const [inputs, setInputs] = useState<InputRow[]>([{ id: 4, value: '' }]);
  const [inputText, setInputText] = useState('');
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [emailInput, setEmailInput] = useState<string>('');
  const emailInputRef = useRef<HTMLInputElement>(null);
  const [activeInput, setActiveInput] = useState<number | null>(null);
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const caretRefsEmail = useRef<HTMLSpanElement>(null);
  const caretRef = useRef<HTMLSpanElement>(null);
  const [message, setMessage] = useState<string>('');
  const [state, formAction] = useFormState(handleContactForm, {
    message: '',
  });
  const [caretPosition, setCaretPosition] = useState(0);

  const [countRows, setCountRows] = useState(0);
  const [textHeight, setTextHeight] = useState(`h-[32px]`);
  const [lines, setLines] = useState([4]);
  useEffect(() => {
    if (state.message) {
      setMessage(state.message);
      setTimeout(() => setMessage(''), 5000);
      setInputs([]);
      setEmailInput('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

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
    // const rows = e.target.value.split('\n').length;
    const text = e.target.value;
    const lines = text.split('\n');

    const style = window.getComputedStyle(e.target);
    const font = style.font; // includes font-family, font-size, etc.
    const width = e.target.clientWidth;

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (!context) return;
    context.font = font;

    let totalLines = 0;

    lines.forEach((line) => {
      const metrics = context.measureText(line);
      const textWidth = metrics.width;

      // Calculate how many times the line wraps
      const lineCount = Math.ceil(textWidth / width);
      totalLines += lineCount;
    });

    setCountRows(totalLines);
    setInputText(e.target.value);
  };
  useEffect(() => {
    const arr = [];
    for (let i = 0; i < countRows; i++) {
      arr.push(i);
    }
    setTextHeight(`h-[${32 * countRows}`);
    setLines(arr);
  }, [countRows]);

  const handleClick = () => {
    updateCaretPosition();
  };
  const updateCaretPosition = () => {
    if (!inputRef.current) return;
    const textarea = inputRef.current;
    const caret = caretRef.current;
    if (!textarea || !caret || !textarea.parentNode) return;

    // Create a dummy div to calculate the position
    const div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.visibility = 'hidden';
    div.style.whiteSpace = 'pre-wrap';
    div.style.font = 'inherit';

    // Append the dummy div to the parent of the textarea
    textarea.parentNode.insertBefore(div, textarea.nextSibling);

    // Set the text content up to the selection
    div.textContent = textarea.value.substr(0, textarea.selectionStart);
    div.style.height = `${textarea.scrollTop}px`; // Adjust for scroll

    // Create a span at the end to get the position
    const span = document.createElement('span');
    span.textContent = '|';
    div.appendChild(span);

    // Position the caret
    caret.style.left = `${span.offsetLeft}px`;
    caret.style.top = `${span.offsetTop - textarea.scrollTop}px`;
    // caret.style.height = `${span.offsetHeight}px`;
    caret.style.visibility = 'visible'; // Make the caret visible

    // Clean up by removing the dummy div from the DOM
    textarea.parentNode.removeChild(div);
  };
  useEffect(() => {
    if (!inputRef.current) return;
    const textarea = inputRef.current;
    const handleScroll = () => updateCaretPosition();
    textarea.addEventListener('scroll', handleScroll);
    textarea.addEventListener('click', updateCaretPosition);
    textarea.addEventListener('keyup', updateCaretPosition);

    return () => {
      textarea.removeEventListener('scroll', handleScroll);
      textarea.removeEventListener('click', updateCaretPosition);
      textarea.removeEventListener('keyup', updateCaretPosition);
    };
  }, []);

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
        <div className="gap-[8px] flex flex-col font-[500] text-[24px] leading-[36px]">
          <div className="flex gap-[16px] items-center">
            <span className="leading-[28px]">1</span>
            <label className="opacity-50 leading-[24px] indent-4">
              #input your Email
            </label>
          </div>
          <div className="flex gap-[16px] items-center">
            <span className="leading-[28px]">2</span>
            {/* <div className="flex gap-[16px] w-full relative group-focus"> */}
            <div className="flex gap-[16px] items-center relative h-full w-full max-h-none">
              <span className="absolute top-0 left-4">{'>'}</span>
              <input
                ref={emailInputRef}
                type="email"
                id="email"
                name="email"
                required
                // value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className={`bg-transparent h-full caret-transparent relative resize-none ml-[32px] cursor-text max-h-none overflow-visible outline-none appearance-none flex-1 w-full `}
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
            <span className="absolute top-0 left-11">{'>'}</span>
            <textarea
              ref={inputRef}
              rows={countRows + 1}
              cols={30}
              wrap="soft"
              onChange={(e) => handleMessageLines(e)}
              onFocus={(e) => handleMessageLines(e)}
              onClick={handleClick}
              className={`bg-transparent h-full caret-transparent relative resize-none ml-[64px] cursor-text max-h-none overflow-visible outline-none appearance-none flex-1 w-full `}
            ></textarea>
            <span ref={caretRef} className="cursor ml-[64px] mt-[28px]"></span>
            <div className="flex flex-col absolute top-0 max-h-none">
              {lines.map((line) => {
                return (
                  <span key={line} className="text-white">
                    {line + 4}
                  </span>
                );
              })}
            </div>
          </div>

          {/* <div className="flex gap-[16px] items-center max-h-[648px] w-full"> */}
          {/* {inputs.map((input, index) => (
            <div
              key={input.id}
              className="flex items-center gap-4 max-h-[648px] w-full"
            >
              <span className="leading-7">{input.id}</span>
              <div className="flex gap-1 w-full relative">
                <span
                  className={`${input.id === 4 ? 'visible' : 'invisible'} ${
                    input.id < 10 ? 'indent-4' : 'indent-0'
                  } `}
                >
                  {'>'}
                </span>
                <input
                  ref={(el) => (inputRefs.current[index] = el!)}
                  type="text"
                  id={`message${input.id}`}
                  name={`message${input.id}`}
                  required
                  className="bg-transparent cursor-text outline-none border-0 appearance-none flex-1 w-full mr-32 caret-transparent"
                  value={input.value}
                  onChange={(e) => {
                    e.preventDefault();
                    updateInputValue(e.target.value, index);
                  }}
                  onKeyDown={(e) => handleKeyDown(e, input.id)}
                  autoFocus
                  onClick={() => handleInputClickOrKeyUp(input.id)}
                  onKeyUp={() => handleInputClickOrKeyUp(input.id)}
                  onFocus={() => handleFocus(input.id)}
                />
                <span
                  ref={(el) => (caretRefs.current[index] = el!)}
                  className={`absolute bottom-0 ${
                    input.id < 10 ? 'left-[36px]' : 'left-5'
                  } h-[1em] border-b  w-4 border-white ${
                    activeInput === index ? 'animate-blink' : 'hidden'
                  }`}
                ></span>
              </div>
            </div>
          ))} */}
        </div>
        <FormButton />
      </form>
    </div>
  );
};
export default Sixth;
