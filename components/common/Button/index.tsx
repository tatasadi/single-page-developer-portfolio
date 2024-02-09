import classNames from "classnames"
import React, { ReactNode } from "react"

interface ButtonProps {
  className?: string
  children: ReactNode
  type: "button" | "link"
  href?: string
  target?: string
}

const Button: React.FC<ButtonProps> = ({
  className,
  children,
  type,
  ...props
}) => {
  const classes = classNames(
    "border-b-2 border-green pb-[0.625rem] pr-[0.1875rem] font-bold uppercase leading-[1.625rem] tracking-[0.14288rem] text-white hover:text-green",
    className,
  )

  if (type === "link") {
    return (
      <a className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button
