import React from "react"
import Heading from "../../components/Heading"
import Link from "next/link"

interface Props {
  title: string
  slug: string
  date: string
}

export default function BlogCard({ title, slug, date }: Props) {
  return (
    <Link href={slug}>
      <a className="blogCard">
        <Heading level={3} className="blogCard__title">
          {title}
        </Heading>
        <p className="blogCard__date">{date}</p>
      </a>
    </Link>
  )
}
