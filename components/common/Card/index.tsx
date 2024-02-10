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
      <div className="group relative cursor-pointer">
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
        <div className="absolute inset-0 hidden flex-col items-center justify-center gap-12 bg-black/75 group-hover:flex">
          <Button type="link" href={projectUrl} target="_blank">
            View project
          </Button>
          <Button type="link" href={sourceCodeUrl} target="_blank">
            View code
          </Button>
        </div>
      </div>
      <Heading level={3} size="m" className="mt-5">
        {title}
      </Heading>
      <div className="mt-[0.4375rem] flex gap-[1.125rem]">
        {tags.map((tag) => (
          <Paragraph key={tag}>{tag}</Paragraph>
        ))}
      </div>
    </div>
  )
}

export default Card
