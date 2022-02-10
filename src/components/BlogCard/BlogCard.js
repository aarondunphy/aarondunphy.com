import React from 'react';
import Heading from "../../components/Heading"
import Link from "next/link"

export default function BlogCard({
  title,
  slug,
  date,
}) {
  return (
    <Link href={ slug }>
      <a className="inline-block hover:text-indigo-600">
        <Heading level={3} style={{marginBottom: 5}}>
          { title }
        </Heading>
        <p className="mb-0 text-xs">{date}</p>
      </a>
    </Link>
  );
}
