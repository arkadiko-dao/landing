import React from 'react'
import { RichText } from 'prismic-reactjs'

/**
 * Quote slice component
 */
const Quote = ({ slice }) => (
  <div className="container post-part single">
    <blockquote className="block-quotation">
      {RichText.asText(slice.primary.quote)}
    </blockquote>
  </div>
)

export default Quote
