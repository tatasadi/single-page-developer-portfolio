import classNames from "classnames"
import React from "react"

type InputProps = {
  name: string
  placeholder: string
  type: string
  value: string
  onChange: any
  errors?: string[]
  className?: string
}

const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  type,
  value,
  onChange,
  errors,
  className = "",
}) => {
  const inputClasses = (errors?.length ?? 0) > 0 ? "border-red" : "border-white"

  return (
    <div
      className={classNames(
        "flex flex-col items-end gap-[0.375rem]",
        className,
      )}
    >
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className={classNames(
          "hover:boder-green w-full border-b bg-transparent pb-[1.0625rem] pl-6 font-medium uppercase leading-[1.625rem] -tracking-[0.01388rem] text-white placeholder:opacity-50 focus:border-green focus:outline-none focus:ring-0",
          inputClasses,
        )}
        value={value}
        onChange={onChange}
      />
      {(errors?.length ?? 0) > 0 && (
        <p className="text-xs font-medium -tracking-[0.01044rem] text-red">
          {errors?.[0] ?? ""}
        </p>
      )}
    </div>
  )
}

export default Input
