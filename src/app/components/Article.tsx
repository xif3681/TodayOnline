'use client'

import type { NextPage } from 'next'

import { Col, Row, Avatar,} from 'antd';

import Sidebar from '@/app/components/Sidebar'

import BlogDetail from '@/app/components/Detail'

import { useState, useCallback, useEffect } from 'react';

import { ArticleType } from '@/types'

import { fetchModDatas } from '@/services/article'


const Home: NextPage = () => {
  const [dataSource, setDataSource] = useState<Array<ArticleType>>([])

    
  const getData = useCallback(async () => {
    let url = `/api/getArticles`

    const { data } = await fetchModDatas(url)
  
    setDataSource(data)


  }, [])

  useEffect(() => {
    getData()
  }, [ getData])


  return (
   
    <main className="flex min-h-screen flex-col main_container" style={{ maxWidth: '1400px', margin: "0 auto" }}>

        <Row className="pd-24 justify-center" gutter={24}>
    
          <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 16 }} >
            <BlogDetail dataSource={dataSource}></BlogDetail>
 
          </Col>
              
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 8 }} >
    
          <Sidebar dataSource={dataSource}></Sidebar>
        </Col>
        </Row>
      
     </main>


  )
}

export default Home
