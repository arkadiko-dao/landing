import React, { Fragment } from 'react'
import DefaultImage from './DefaultImage'
import FullWidthImage from './FullWidthImage'

/**
 * Image caption slice component
 */
const ImageCaption = ({ slice }) => {

  const imageComponent =
    slice.slice_label === 'image-full-width' ?
    <FullWidthImage slice={slice} /> :
    <DefaultImage slice={slice} />

  return (
    <Fragment>
      {imageComponent}
    </Fragment>
  )
}

export default ImageCaption
