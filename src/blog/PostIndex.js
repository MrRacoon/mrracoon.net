import { keyBy } from 'lodash/fp'

import ReactFromScratch from './ReactFromScratch'

export const PostList = [
  {
    id: 'reactFromScratch',
    title: 'React from Scratch',
    author: 'Erik Sutherland',
    date: '7-26-2016',
    content: ReactFromScratch
  }
]

export const PostMap = keyBy('id', PostList)
