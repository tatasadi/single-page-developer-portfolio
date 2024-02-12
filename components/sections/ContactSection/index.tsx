"use client"
import Paragraph from "../../common/Typography/Paragraph"
import Heading from "../../common/Typography/Heading"
import classNames from "classnames"
import Input from "../../common/Input"
import Textarea from "../../common/Textarea"
import Button from "../../common/Button"
import Logo from "../../common/Logo"
import SocialIcons from "../../common/SocialIcons"

interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

const ContactSection: React.FC<IProps> = ({ className, ...props }) => {
  return (
    <section
      className={classNames(
        className,
        "w-full bg-dark-grey px-4 py-[3.75rem] sm:px-8 sm:pb-10 lg:px-[10.3125rem] lg:pb-[5.75rem] lg:pt-[5.25rem]",
      )}
      {...props}
    >
      <div className="w-full">
        <div className="border-b border-white">
          <div className="mx-auto flex max-w-[27.8125rem] flex-col lg:max-w-none lg:flex-row lg:gap-[13.75rem]">
            <div className="flex flex-col gap-5 text-center lg:gap-9 lg:text-left">
              <Heading level={2} size="xl">
                Contact
              </Heading>
              <Paragraph>
                I would love to hear about your project and how I could help.
                Please fill in the form, and I’ll get back to you as soon as
                possible.
              </Paragraph>
            </div>
            <form className="mt-[3.125rem] flex w-full flex-col gap-8  pb-[5.4375rem] sm:mt-12 sm:pb-[5.75rem] lg:mt-0">
              <Input
                type="text"
                placeholder="Name"
                name="name"
                value=""
                onChange={() => {}}
              />
              <Input
                type="email"
                placeholder="Email"
                name="email"
                value=""
                onChange={() => {}}
              />
              <Textarea
                placeholder="Message"
                name="message"
                value=""
                onChange={() => {}}
              />
              <Button type="submit" className="ml-auto">
                Send Message
              </Button>
            </form>
          </div>
        </div>
        <div className="flex w-full flex-col items-center gap-5 pt-[2.4375rem] sm:flex-row sm:justify-between sm:pt-[1.875rem] lg:pt-[2.9375rem]">
          <Logo />
          <SocialIcons />
        </div>
      </div>
    </section>
  )
}

export default ContactSection
