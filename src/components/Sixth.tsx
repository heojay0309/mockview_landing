'use client';
import { useRef, useState, useEffect } from 'react';
import { handleContactForm } from './action';
import { useFormState, useFormStatus } from 'react-dom';
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
  const [emailInput, setEmailInput] = useState<string>('');
  const emailInputRef = useRef<HTMLInputElement>(null);
  const [activeInput, setActiveInput] = useState<number | null>(null);
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const caretRefsEmail = useRef<HTMLSpanElement>(null);
  const caretRefs = useRef<HTMLSpanElement[]>([]);
  const [message, setMessage] = useState<string>('');

  const [state, formAction] = useFormState(handleContactForm, {
    message: '',
  });
  useEffect(() => {
    if (state.message) {
      setMessage(state.message);
      setTimeout(() => setMessage(''), 5000);
      setInputs([]);
      setEmailInput('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);
  const addInput = (currentId: number) => {
    setInputs((prev) => [...prev, { id: currentId + 1, value: '' }]);
  };

  const removeInput = (index: number) => {
    const updatedInputs = [...inputs];
    updatedInputs.splice(index, 1);

    updatedInputs.forEach((input, idx) => {
      input.id = 4 + idx; // This recalculates IDs starting from 4
    });

    setInputs(updatedInputs);

    setTimeout(() => {
      if (index > 0 && inputRefs.current[index - 1]) {
        inputRefs.current[index - 1].focus();
      } else if (inputRefs.current.length > 0) {
        inputRefs.current[0].focus();
      }
    }, 0);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (index - 4 === inputs.length - 1) {
        addInput(inputs[index - 4].id);
      }
    } else if (
      (e.key === 'Backspace' || e.key === 'Delete') &&
      inputs[index - 4].value === '' &&
      inputs.length > 1
    ) {
      e.preventDefault();
      removeInput(index - 4);
    }
  };

  const updateInputValue = (value: string, index: number) => {
    const newInputs = [...inputs];
    newInputs[index].value = value;
    setInputs(newInputs);
    updateCaretPosition(value, index);
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
  const handleFocus = (index: number) => {
    setActiveInput(index);
  };
  const updateCaretPosition = (text: string, index: number) => {
    if (caretRefs.current[index] && inputRefs.current[index]) {
      const textWidth = getTextWidth(
        text,
        getComputedStyle(inputRefs.current[index]).font
      );
      caretRefs.current[index].style.transform = `translateX(${textWidth}px)`;
    }
  };

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, inputs.length);
    caretRefs.current = caretRefs.current.slice(0, inputs.length);
  }, [inputs]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // This will prevent the form from submitting.
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

  const getTextWidthEmail = (text: string, font: string): number => {
    let canvas = document.createElement('canvas');
    let context = canvas.getContext('2d');
    if (context) {
      context.font = font;
      return context.measureText(text).width;
    }
    return 0;
  };

  return (
    <div className="max-w-[1440px]  mx-auto w-full min-h-[436px]  gap-[32px] flex flex-col text-white">
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
            <label className="opacity-50 leading-[24px]">
              #input your Email
            </label>
          </div>
          <div className="flex gap-[16px] items-center">
            <span className="leading-[28px]">2</span>
            <div className="flex gap-[4px] w-full relative group-focus">
              <span>{'>'}</span>
              <input
                ref={emailInputRef}
                type="email"
                id="email"
                name="email"
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="bg-transparent cursor-text outline-none border-0 appearance-none flex-1 w-full mr-32 caret-transparent"
              />
              <span
                ref={caretRefsEmail}
                className={`absolute bottom-0 left-5 h-[1em] border-b w-4 animate-blink border-white group-focus-visible`}
              ></span>
            </div>
          </div>
          <div className="flex gap-[16px] items-center">
            <span className="leading-[28px]">3</span>
            <span className="opacity-50 leading-[24px]">
              #input your Message
            </span>
          </div>
          {/* <div className="flex gap-[16px] items-center max-h-[648px] w-full"> */}
          {inputs.map((input, index) => (
            <div
              key={input.id}
              className="flex items-center gap-4 max-h-[648px] w-full"
            >
              <span className="leading-7">{input.id}</span>
              <div className="flex gap-1 w-full relative">
                <span
                  className={`${input.id === 4 ? 'visible' : 'invisible'} `}
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
                  // placeholder="_"
                  value={input.value}
                  onChange={(e) => {
                    e.preventDefault();
                    updateInputValue(e.target.value, index);
                  }}
                  onKeyDown={(e) => handleKeyDown(e, input.id)}
                  autoFocus
                  onFocus={() => handleFocus(index)}
                />
                <span
                  ref={(el) => (caretRefs.current[index] = el!)}
                  className={`absolute bottom-0 left-5 h-[1em] border-b  w-4 border-white ${
                    activeInput === index ? 'animate-blink' : 'hidden'
                  }`}
                ></span>
              </div>
            </div>
          ))}
        </div>
        <FormButton />
      </form>
    </div>
  );
};
export default Sixth;
