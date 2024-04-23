'use client'


import type { NextPage } from 'next'

import {  Tabs, } from 'antd';

import type {  TabsProps } from 'antd';

import YouMightLike from '@/app/components/YouMightLike'

import { ArticleType } from '@/types'

const Home: NextPage<{dataSource: Array<ArticleType>}> = ({ dataSource })  => {

  const items: TabsProps['items'] = [
    {
      label: `YOU MIGHT LIKE`,
      key: '11',
      children: <YouMightLike ></YouMightLike>,
    },
    {
      label: `TRENDING`,
      key: '12',
      children:  <YouMightLike ></YouMightLike>,
    },
  ]


  return (
 
    <main >

    <Tabs
        defaultActiveKey="11"
        type="card"
        size={'small'}
        items={items}
      />

         
     </main>


  )
}

export default Home
