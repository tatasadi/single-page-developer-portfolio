import classNames from "classnames"
import Logo from "../../common/Logo"
import SocialIcons from "../../common/SocialIcons"
import Heading from "../../common/Typography/Heading"
import Paragraph from "../../common/Typography/Paragraph"
import Image from "next/image"
import imageProfileDesktop from "../../../public/images/image-profile-desktop.webp"
import imageProfileTablet from "../../../public/images/image-profile-tablet.webp"
import imageProfileMobile from "../../../public/images/image-profile-mobile.webp"
import Button from "../../common/Button"

interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

const HeroSection: React.FC<IProps> = ({ className, ...props }) => {
  return (
    <section className={classNames(className, "")} {...props}>
      <div className="relative lg:px-[10.3125rem]">
        <div className="absolute z-10 flex w-full flex-col items-center gap-5 pt-5 sm:relative sm:flex-row sm:justify-between sm:px-[1.875rem] sm:pt-[1.875rem]">
          <Logo />
          <SocialIcons />
        </div>
        <div className="flex w-full justify-center sm:justify-end">
          <picture className="relative top-0 z-0 sm:absolute">
            <source
              srcSet={imageProfileDesktop.src}
              media="(min-width: 1024px)"
              width={445}
              height={720}
            />
            <source
              srcSet={imageProfileTablet.src}
              media="(min-width: 640px) and (max-width: 1023px)"
              width={322}
              height={600}
            />
            <source
              srcSet={imageProfileMobile.src}
              media="(max-width: 639px)"
              width={174}
              height={383}
              className="mx-auto"
            />
            <Image
              src={imageProfileDesktop}
              alt="Adam Keyes"
              width={445}
              height={720}
            />
          </picture>
        </div>
      </div>
      <div className="relative z-10 mx-4 mb-20 mt-10 flex flex-col items-center gap-6 text-center sm:mb-[3.75rem] sm:ml-8 sm:mr-[18.1875rem] sm:mt-[5.625rem] sm:items-start sm:gap-0 sm:text-left lg:ml-[10.3125rem] lg:mr-[35.375rem] lg:mt-[7.9375rem]">
        <Heading level={1} size="xl">
          Nice to meet you! I&apos;m{" "}
          <span className="border-b-4 border-green sm:border-b-[0.375rem]">
            Adam Keyes
          </span>
          .
        </Heading>
        <Paragraph className="max-w-[27.8125rem] sm:mb-[2.125rem] sm:mt-[4.125rem]">
          Based in the UK, I’m a front-end developer passionate about building
          accessible web apps that users love.
        </Paragraph>
        <Button type="button">Contact Me</Button>
      </div>
    </section>
  )
}

export default HeroSection
