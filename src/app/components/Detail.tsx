
'use client'
import type { NextPage } from 'next'

import { Tag, Input, Button, Space, message } from 'antd';

import Avatar from '@mui/material/Avatar';

import dayjs from 'dayjs';

import TwitterIcon from '@mui/icons-material/Twitter';

import FacebookIcon from '@mui/icons-material/Facebook';

import { ArticleType } from '@/types'

import styles from '@/styles/blog.module.scss'

import Link from 'next/link'

import {  useRouter} from 'next/navigation'

import { useState, useCallback, useEffect } from 'react';

const Page: NextPage<{ dataSource: Array<ArticleType> }> = ({ dataSource }) => {

  const router = useRouter()

  const [email, setEmail] = useState<string>('')
  
  const handleUpdate = (value: any) => {

    setEmail(value)
   
  };

  const goPage = (path: string) => {
    router.push(path)
  }

  const subscript = useCallback(async () => {
    if (!email) {
      message.error('Input Your Email !')
      return
    }
    message.success(`Your Email: ${email} subscript Success!`)

    
  }, [ ]) 

  
  return (
    <div className={styles.blog_detail}>
      {
        dataSource[0] && (
          <div style={{ maxWidth: "800px", margin: '0 auto' }}>


            {/* title */}
            <h4 className="text-center fw-medium fs-20 pd-24" dangerouslySetInnerHTML={{__html:dataSource[0].title}}></h4>

            {/* author */}
            {dataSource[0].byline_detail.map(item =>  <Avatar alt="Remy Sharp" src={item.hero_media.media_image} key={item.id}/>)}
         
            <div className="pd-24">
              <h4>BY {dataSource[0].author }</h4>
              <h4>Published {dayjs(dataSource[0].publishdate ).format('MMMM DD,YYYY')}</h4>
              <h4>Updated { dayjs(dataSource[0].lastupdated).format('MMMM DD,YYYY')} </h4>
            </div>


            {/* image */}
            <div >
              <img src={dataSource[0].image.media_image} alt={dataSource[0].image.description} style={{width: '100%'}} />
            </div>

            <div dangerouslySetInnerHTML={{__html:dataSource[0].image.description}} className="pd-24" />
        

            {/* tldr */}
            <div dangerouslySetInnerHTML={{__html:dataSource[0].tldr}} className="pd-24"/>

            {/* <div dangerouslySetInnerHTML={ 
              {__html:dataSource[0].brief}
            } className="pd-24" /> */}



           {/* content */}
            <div className="pd-24">
              {dataSource[0].content.map((item, index) => index ==0 &&<div key={item.id}>
                <h2>{item.title}</h2>
                <div dangerouslySetInnerHTML={ 
                  {__html:item.body}
                } />
    
              </div>)}
           
            </div>

            {/* byline_detail */}
            <div className="pd-24">
            <h2 className="text_transform">about author: </h2>
              {dataSource[0].byline_detail.map(item => <div key={item.id} className='flex'>
                <Avatar alt="Remy Sharp" src={item.hero_media.media_image} key={item.id} style={{width: '80px',height: '80px'}}/>
                <div style={ {marginLeft: '14px'}}>
                <h2>{item.title}</h2>
                <div dangerouslySetInnerHTML={ 
                  {__html:item.summary}
                } />

                </div>
 
    
              </div>)}
           
            </div>

            {/* topics */}
            <div className="pd-24">
              <h2 className="text_transform">RELATED TOPICS</h2>
              {dataSource[0].topics.map(item =>  <Tag color="default" key={item.id}>{item.name}</Tag>)}

            </div>


            
            {/* Share */}
            <div className="pd-24">
              <h4>
                <span className="share-link-text">Share This: </span>
              </h4>
          
                <a className="twitter-share-button share-link-btn "
                    href={`https://twitter.com/intent/tweet?text=${dataSource[0].title}&url=${location.href}`}
                  data-size="large" target="_blank">
                   <TwitterIcon></TwitterIcon> Tweet
                  
                </a>
             
                <a className="share-link-btn " href={`https://www.facebook.com/sharer/sharer.php?u=${location.href}`} target="_blank" rel="noopener">
                <FacebookIcon></FacebookIcon> Facebook
                </a>
      
            </div>

            {/* category */}
            {dataSource && dataSource[0] && dataSource[0].category.map(item => <>
                
            <Link className={`${styles.blog_cate} flex justify-space-between `} href={`article/${item.landing_page}`} key={item.id} target="_blank">
              <div >
                <span>Read more of the latest in</span>
                <span className={`${styles.b_category} text_transform`}>{item.name}</span>
            
            
              </div>
              <div>
                <span className={`${styles.link_explore} text_transform`}>
                    Explore now &gt;
                </span>
              </div>

            </Link>
              
            </>)}
          

      

            {/* subscription */}

            <div className="flex justify-space-between pd-24">
              <div className={`${styles.subscription_block} `}>

                {dataSource[0].content.map((item, index) => index == 1 && <div key={item.id}>
                
                  <h2 className={styles.subscription_title}>{item.title}</h2>
                  <div className="flex justify-space-between px-12">
                    <div dangerouslySetInnerHTML={ 
                      {__html:item.body}
                    } />
                    <img src={item.newsletter_image} alt="" />

                  </div>
                  <Space.Compact style={{ width: '100%' }}>
                    <Input placeholder={item.placeholder} onChange={e => handleUpdate( e.target.value)} />
                    <Button type="primary" danger onClick={() =>subscript()}>{ item.label}</Button>
                  </Space.Compact>

                  <p className="px-12">
                    {item.sub_description}
                  </p>
      
              </div>
          
              )}

              </div>


              <div className={`${styles.whatsapp} pd-24`}>
                <Link rel="stylesheet" href="https://www.whatsapp.com/channel/0029VaEGYYBCnA8212FmWA3Z?v=1" target="_blank">
                  <img src="https://onecms-res.cloudinary.com/image/upload/v1705599712/mediacorp/tdy/image/2024/01/19/whatsapp_3.png" alt=""></img>
                </Link>
              </div>
            </div>



          </div>
        )
      }

    
    </div>
  )
}

export default Page;



