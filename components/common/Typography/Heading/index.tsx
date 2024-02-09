import classNames from "classnames"
import React from "react"

type HeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6
  size: "m" | "l" | "xl"
  className?: string
  children: React.ReactNode
}

const Heading: React.FC<HeadingProps> = ({
  level,
  size,
  className,
  children,
}) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements

  const sizeClasses =
    size === "m"
      ? "text-[1.5rem] leading-8"
      : size === "l"
        ? "text-[2rem] leading-[2.5rem] -tracking-[0.0625rem] md:text-[3rem] md:leading-[3.5rem] md:-tracking-[0.09375rem]"
        : "text-[2.5rem] leading-[2.5rem] -tracking-[0.071rem] sm:text-[4.5rem] sm:leading-[4.5rem] sm:-tracking-[0.12781rem] lg:text-[5.5rem] lg:leading-[5.5rem] lg:-tracking-[0.15625rem]"

  return (
    <HeadingTag
      className={classNames("font-bold text-white", sizeClasses, className)}
    >
      {children}
    </HeadingTag>
  )
}

export default Heading
