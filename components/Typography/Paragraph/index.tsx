import classNames from "classnames"
import React, { ReactNode } from "react"

interface ParagraphProps {
  className?: string
  children: ReactNode
}

const Paragraph: React.FC<ParagraphProps> = ({ className, children }) => {
  return (
    <p
      className={classNames(
        className,
        "text-lg font-medium leading-7 text-yellow-600",
      )}
    >
      {children}
    </p>
  )
}

export default Paragraph
