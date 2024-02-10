import Image from "next/image"
import iconFrontendMentor from "/public/images/icon-frontend-mentor.svg"
import iconGithub from "/public/images/icon-github.svg"
import iconLinkedin from "/public/images/icon-linkedin.svg"
import iconTwitter from "/public/images/icon-twitter.svg"
import classNames from "classnames"

const Icon = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="h-5 w-5 sm:h-[1.5625rem] sm:w-[1.5625rem]">
      <Image src={src} alt={alt} layout="responsive" />
    </div>
  )
}

const SocialIcons = ({ className = "" }: { className?: string }) => {
  return (
    <div className={classNames("flex items-center gap-[1.875rem]", className)}>
      <Icon src={iconGithub} alt="GitHub" />
      <Icon src={iconFrontendMentor} alt="Frontend Mentor" />
      <Icon src={iconLinkedin} alt="LinkedIn" />
      <Icon src={iconTwitter} alt="Twitter" />
    </div>
  )
}

export default SocialIcons
