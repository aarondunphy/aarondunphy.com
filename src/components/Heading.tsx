import React from "react"

interface Props {
  level: 1 | 2 | 3 | 4 | 5 | 6
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export default function Heading({ level, children, className, style }: Props) {
  if (level === 1) {
    return (
      <h1 style={style} className={className}>
        {children}
      </h1>
    )
  }

  if (level === 2) {
    return (
      <h2 style={style} className={className}>
        {children}
      </h2>
    )
  }

  if (level === 3) {
    return (
      <h3 style={style} className={className}>
        {children}
      </h3>
    )
  }

  if (level === 4) {
    return (
      <h4 style={style} className={className}>
        {children}
      </h4>
    )
  }

  if (level === 5) {
    return (
      <h5 style={style} className={className}>
        {children}
      </h5>
    )
  }

  return (
    <h6 style={style} className={className}>
      {children}
    </h6>
  )
}
