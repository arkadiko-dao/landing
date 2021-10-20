import React from 'react';
import { default as NextLink } from 'next/link';

/**
 * Post back button component
 */
const BackButton = () => (
  <NextLink href="/blog">
    <a className="text-indigo-600 hover:text-indigo-700" href="/">← Back to the blog</a>
  </NextLink>
)

export default BackButton;
