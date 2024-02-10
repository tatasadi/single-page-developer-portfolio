import classNames from "classnames"
import React from "react"

type TextareaProps = {
  name: string
  placeholder: string
  value: string
  onChange: any
  errors?: string[]
  className?: string
}

const Textarea: React.FC<TextareaProps> = ({
  name,
  placeholder,
  value,
  onChange,
  errors,
  className = "",
}) => {
  const TextareaClasses = (errors?.length ?? 0) > 0 ? "border-red" : "border-white"

  return (
    <div
      className={classNames(
        "flex flex-col items-end gap-[0.375rem]",
        className,
      )}
    >
      <textarea
        name={name}
        placeholder={placeholder}
        className={classNames(
          "hover:boder-green border-b bg-transparent pl-6 font-medium uppercase leading-[1.625rem] -tracking-[0.01388rem] text-white placeholder:opacity-50 focus:border-green focus:outline-none focus:ring-0 min-h-[6.6875rem] resize-none",
          TextareaClasses,
        )}
        value={value}
        onChange={onChange}
        rows={3}
      />
      {(errors?.length ?? 0) > 0 && (
        <p className="text-xs font-medium -tracking-[0.01044rem] text-red">
          {errors?.[0] ?? ""}
        </p>
      )}
    </div>
  )
}

export default Textarea
