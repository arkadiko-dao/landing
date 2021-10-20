import React from 'react'
import { default as NextLink } from 'next/link'
import { RichText } from 'prismic-reactjs'

import PostDate from './PostDate'
import FirstParagraph from './FirstParagraph'
import { linkResolver } from '../../../../prismic-configuration'

/**
 * Post list item component
 */
const PostItem = ({ post }) => {
  const title = RichText.asText(post.data.title) ? RichText.asText(post.data.title) : 'Untitled'

  return (
    <li className="py-12">
      <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
        <dl>
          <dt className="sr-only">Published on</dt>
          <dd className="text-base font-medium text-gray-500">
            <time dateTime="">
              <PostDate date={post.data.date} />
            </time>
          </dd>
        </dl>
        <div className="space-y-5 xl:col-span-3">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight font-headings">
              <NextLink
                as={linkResolver(post)}
                href={linkResolver(post)}
              >
                <a className="inline-block text-gray-900 title-link">
                  <span>{title}</span>
                </a>
              </NextLink>
            </h2>
            <div className="prose text-gray-500 max-w-none">
              <div className="prose max-w-none">
                <FirstParagraph
                  sliceZone={post.data.body}
                  textLimit={300}
                />
              </div>
            </div>
          </div>
          <div className="text-base font-medium">
            <NextLink
              as={linkResolver(post)}
              href={linkResolver(post)}
            >
              <a className="text-sm text-indigo-600 hover:text-indigo-700">
                Read more →
              </a>
            </NextLink>
          </div>
        </div>
      </article>
    </li>
  )
}

export default PostItem
