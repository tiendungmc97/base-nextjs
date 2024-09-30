"use client";
import React, { useState, useRef } from "react";

export default function TwoFactorAuth() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const isKeyboardAction = useRef(false);

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pasteData = e.clipboardData.getData("text");
    const sanitizedData = pasteData.slice(-6); // Get the last 6 characters
    if (/^\d{6}$/.test(sanitizedData)) {
      const newCode = sanitizedData.split("");
      setCode(newCode);
      inputRefs.current[5]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    switch (e.key) {
      case "Enter":
        verifyCode();
        break;
      case "ArrowLeft":
        focusPreviousInput(index);
        break;
      case "ArrowRight":
        focusNextInput(index);
        break;
      case "Backspace":
        handleBackspace(index);
        break;
      default:
        if (/^\d$/.test(e.key)) {
          handleDigitInput(e.key, index);
        } else {
          e.preventDefault();
        }
        break;
    }
  };

  const verifyCode = () => {
    const codeString = code.join("");
    if (codeString.length === 6) {
      alert("2FA Verified Successfully!");
    }
  };

  const focusPreviousInput = (index: number) => {
    if (index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const focusNextInput = (index: number) => {
    if (index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (index: number) => {
    isKeyboardAction.current = true;
    const newCode = [...code];
    newCode[index] = "";
    setCode(newCode);
    focusPreviousInput(index);
  };

  const handleDigitInput = (key: string, index: number) => {
    if (/^\d$/.test(key)) {
      const newCode = [...code];
      newCode[index] = key;
      setCode(newCode);
      focusNextInput(index);
    }
  };

  return (
    <div className="flex flex-col items-center text-black">
      <p className="mb-4 text-lg font-semibold">Enter the 6-digit code:</p>
      <div className="flex items-center gap-2 text-black">
        {code.map((digit, index) => (
          <input
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            value={digit}
            type="number"
            onPaste={handlePaste}
            onKeyDown={(e) => handleKeyDown(e, index)}
            maxLength={1}
            readOnly
            className="h-10 w-10 rounded border border-gray-300 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ))}
      </div>
    </div>
  );
}
