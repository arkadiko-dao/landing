import React from 'react';
import { RichText } from 'prismic-reactjs';
import { linkResolver, customLink } from '../../../../prismic-configuration';

/**
 * Text slice component
 */
const Text = ({ slice }) => (
  <RichText
    render={slice.primary.text}
    linkResolver={linkResolver}
    serializeHyperlink={customLink}
  />
)

export default Text
