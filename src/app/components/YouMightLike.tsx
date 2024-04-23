'use client'


import type { NextPage } from 'next'
import Link from 'next/link'
import { useState, useEffect, useCallback,  } from 'react'

import {fetchModDatas} from '@/services/article'

import { Col, Row, Tabs, } from 'antd';


import { ArticleLikeType } from '@/types'

import styles from '@/styles/blog.module.scss'


const Home: NextPage<{ }> = ({  }) => {
  
  const detailUrl = '/frontend/blog/edit'

 
  const [dataSource, setDataSource] = useState<Array<ArticleLikeType>>([])



  const getData = useCallback(async () => {
    
    let url = `/api/getArticleLike`

    const { data } = await fetchModDatas(url)

    setDataSource(data.items)


  }, [])
  

  useEffect(() => {
    getData()
  }, [ getData])

  return (
 
    <main >

      
        <Row className="pd-24 justify-center" gutter={16}>
          {dataSource[0] && dataSource.map(item => (
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} key={item.nid}>
          
              <div  className={styles.blog_list}>

                {/* blog_image */}
                {
                  item.image && 
                  <div className={styles.blog_image}>
                  <Link href={item.id ? `${detailUrl}/${item.id}` : '#'}><img alt={''} src={item.image} /></Link>
                  
                  </div>
                }


                {/* blog_text */}
                <div className={styles.blog_text}>
                <h4 >
                  <span>By {dataSource[0].author}</span>
                </h4>
                  
                  <div style={{maxHeight:"50px", overflowY:"hidden"}}>
                  
                  <Link href={item.id ? `${detailUrl}/${item.id}` : '#'}>
                    <p title={item.title}  className={styles.blog_title}>{item.title} </p>
                  </Link>

                    
                </div>
                  


              
                </div>
              </div>
            
            </Col>
          ))
            
          }
   
        </Row>



       

 
         
     </main>


  )
}

export default Home
