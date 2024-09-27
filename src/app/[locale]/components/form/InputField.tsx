import React, { HTMLInputTypeAttribute, useState } from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface InputFieldProps {
  id: string;
  label: string;
  type: HTMLInputTypeAttribute;
  register: UseFormRegister<any>;
  errors: FieldErrors;
  showToggle?: boolean;
  autocomplete?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type,
  register,
  errors,
  showToggle,
  autocomplete,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = showToggle && showPassword ? "text" : type;

  return (
    <div className="mb-4">
      <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor={id}>
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={inputType}
          {...register(id)}
          autoComplete={autocomplete}
          className={`focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none ${errors[id] ? "border-red-500" : ""}`}
        />
        {showToggle && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 flex items-center px-3 text-sm text-gray-600"
          >
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </button>
        )}
      </div>
      {errors[id] && typeof errors[id]?.message === "string" && (
        <p className="text-xs italic text-red-500">{errors[id]?.message}</p>
      )}
    </div>
  );
};

export default InputField;
