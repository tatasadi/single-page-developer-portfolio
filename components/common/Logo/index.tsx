import classNames from "classnames"

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <p
      className={classNames(
        className,
        "text-[1.5rem] font-bold leading-8 -tracking-[0.02081rem] text-white sm:text-[2rem] sm:-tracking-[0.02775rem]",
      )}
    >
      adamkeyes
    </p>
  )
}

export default Logo
