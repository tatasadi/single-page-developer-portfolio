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
        "text-lg font-medium leading-7 text-grey",
        className,
      )}
    >
      {children}
    </p>
  )
}

export default Paragraph
