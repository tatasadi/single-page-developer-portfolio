import Image from "next/image"
import React from "react"
import Heading from "../Typography/Heading"
import Paragraph from "../Typography/Paragraph"
import Button from "../Button"

interface CardProps {
  imgName: string
  imgAlt: string
  title: string
  tags: string[]
  projectUrl: string
  sourceCodeUrl: string
}

const Card: React.FC<CardProps> = ({
  imgName,
  imgAlt,
  title,
  tags,
  projectUrl,
  sourceCodeUrl,
}) => {
  return (
    <div>
      <div className="group relative">
        <picture>
          <source
            srcSet={`/images/thumbnail-${imgName}-small.webp`}
            type="image/webp"
            media="(max-width: 799px)"
          />
          <source
            srcSet={`/images/thumbnail-${imgName}-large.webp`}
            type="image/webp"
            media="(min-width: 800px)"
          />
          <Image
            src={`/images/thumbnail-${imgName}-large.webp`}
            alt={imgAlt}
            width={545}
            height={400}
          />
        </picture>
        <div className="hidden cursor-pointer lg:block">
          <div className="absolute inset-0 hidden flex-col items-center justify-center gap-12 bg-black/75 group-hover:flex">
            <Button
              isLink
              href={projectUrl}
              target="_blank"
              aria-label={`View ${imgName}`}
            >
              View project
            </Button>
            <Button
              isLink
              href={sourceCodeUrl}
              target="_blank"
              aria-label={`${imgName} Source code`}
            >
              View code
            </Button>
          </div>
        </div>
      </div>
      <Heading level={3} size="m" className="mt-5">
        {title}
      </Heading>
      <div className="mt-[0.4375rem] flex gap-[1.125rem]">
        {tags.map((tag) => (
          <Paragraph key={tag} className="uppercase">
            {tag}
          </Paragraph>
        ))}
      </div>
      <div className="mt-5 flex items-center gap-[1.875rem] sm:gap-8 lg:hidden">
        <Button
          isLink
          href={projectUrl}
          target="_blank"
          aria-label={`View ${imgName}`}
        >
          View project
        </Button>
        <Button
          isLink
          href={sourceCodeUrl}
          target="_blank"
          aria-label={`${imgName} Source code`}
        >
          View code
        </Button>
      </div>
    </div>
  )
}

export default Card
