import React from 'react';

export default function Heading({level, children, style}) {
  
  if(level === 1) {
    return (
      <h1 className="text-5xl font-bold mb-8" style={style}>{children}</h1>
    )
  }

  if(level === 2) {
    return (
      <h2 className="text-3xl font-bold mb-6" style={style}>{children}</h2>
    )
  }

  if(level === 3) {
    return (
      <h3 className="text-2xl font-bold mb-4" style={style}>{children}</h3>
    )
  }

  if(level === 4) {
    return (
      <h4 className="text-xl font-bold mb-8" style={style}>{children}</h4>
    )
  }

  if(level === 5) {
    return (
      <h5 className="text-lg font-bold mb-8" style={style}>{children}</h5>
    )
  }

  if(level === 6) {
    return (
      <h6 className="text-md font-bold mb-8" style={style}>{children}</h6>
    )
  }

}
