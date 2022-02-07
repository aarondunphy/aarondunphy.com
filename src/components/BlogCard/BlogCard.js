import React from 'react';
import Heading from "../../components/Heading"
import { Link } from "gatsby"

export default function BlogCard({
  title,
  slug,
  date,
}) {
  return (
    <Link to={ slug } className="inline-block hover:text-indigo-600">
      <Heading level={3} style={{marginBottom: 5}}>
        { title }
      </Heading>
      <p className="mb-0 text-xs">{date}</p>
    </Link>
  );
}
