'use client'

import type { NextPage } from 'next'

import Link from 'next/link'

import { useState, useEffect, useCallback,  } from 'react'

import { Col, Row } from 'antd';

import styles from '@/styles/header.module.scss'

import Box from '@mui/material/Box';

const Home: NextPage = ({ }) => { 
  const [dataSourch, setDataSourch] = useState<Array<any>>([])
  const [serviceType, setServiceType] = useState([])

  useEffect(() => {
    setDataSourch([
      {
        phone: '+65 94486872',
        WhatsApp: '94486872',
        Facebook: 'https://www.facebook.com/shuqi.luo.98?mibextid=LQQJ4d',
        Instagram: 'https://www.instagram.com/lizzy.jupiter?igsh=bmZ3c3RyMzQyMTlv&utm_source=qr'
      }
    ])
  }, [])


  return (
    <>
      
      <div className={styles.colivingFooter}>
        

       
                    
          <div className="main_container">
              <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, flexDirection: 'column' }}>
                <Row>
                  <Col xs={{span: 12 }} sm={{ span: 12 }} md={{ span: 8 }}>

                    <h4 className="h4-p10">
                        <Link href="/">Home</Link>
                    </h4>
                

            
                {
                  
                  dataSourch && dataSourch[0] && 
                  <>
                  <h4 className="h4-p10">
                    <Link href={`tel:${dataSourch[0].phone}`} target="_blank">Call {dataSourch[0].phone}</Link>
                  </h4>
                  <h4 className="h4-p10">
                  <Link href={`https://wa.me/${dataSourch[0].WhatsApp}`} target="_blank">WhatsApp us</Link>
                  </h4>
                  </>

                  }
        
                      
                  </Col>
                    
                  <Col xs={{span: 12 }} sm={{ span: 12 }} md={{ span: 8 }}>
                        
                      {/* <h4 className="h4-p10">
                      <Link href="/frontend/service">Our Services </Link>
                        </h4> */}
                        {
                          serviceType && serviceType.map((item: any) => {
                            return (
                              <h4 key={item._id}  className="h4-p10">
                              <span >{item.name} </span>
                              </h4>
                            )
                            
                          })
                        }
                  </Col>
                            
                  <Col xs={{span: 12 }} sm={{ span: 12 }} md={{ span: 8 }}>
                      <h4 className="h4-p10">
                        Social Media 
                        
                      </h4>
                      {
                        dataSourch[0] && dataSourch[0].Facebook && 
                        <h4 className="h4-p10">
                          <Link href={dataSourch[0].Facebook} target="_blank">Facebook</Link>
                        </h4>
                      }

                      {
                        dataSourch[0] && dataSourch[0].Instagram && 
                        <h4 className="h4-p10">
                          <Link href={dataSourch[0].Instagram} target="_blank">Instagram</Link>
                        </h4>
                      }
                      {
                        dataSourch[0] && dataSourch[0].Twitter && 
                        <h4 className="h4-p10">
                          <Link href={dataSourch[0].Twitter} target="_blank">Twitter</Link>
                        </h4>
                      }
                      {
                        dataSourch[0] && dataSourch[0].YouTube && 
                        <h4 className="h4-p10">
                          <Link href={dataSourch[0].YouTube} target="_blank">YouTube</Link>
                        </h4>
                      }
                      {
                        dataSourch[0] && dataSourch[0].TikTok && 
                        <h4 className="h4-p10">
                          <Link href={dataSourch[0].TikTok} target="_blank">TikTok</Link>
                        </h4>
                      }
                      
                  </Col>    

              
                </Row>
              </Box>
              
              <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' }, flexDirection: 'column' }}>
                <Row>
                  <Col xs={{span: 12 }} sm={{ span: 12 }} md={{ span: 8 }}>
 
                    <h4 className="h4-p10">
                        <Link href="/">Home</Link>
                    </h4>

                    {
                      dataSourch[0] && dataSourch[0].phone && 
                      <h4 className="h4-p10">
            
                      <Link href={`tel:${dataSourch[0].phone}`} target="_blank">Call {dataSourch[0].phone}</Link>
                    </h4>
                    }
                    {
                      dataSourch[0] && dataSourch[0].WhatsApp && 
                      <h4 className="h4-p10">
                      <Link href={`https://wa.me/${dataSourch[0].WhatsApp}`} target="_blank">WhatsApp us</Link>
                      </h4>
                    }

      
                  </Col>
                
                  <Col xs={{span: 12 }} sm={{ span: 12 }} md={{ span: 8 }}>
                      <h4 className="h4-p10">
                        Social Media 
                        
                      </h4>
                      {
                        dataSourch[0] && dataSourch[0].Facebook && 
                        <h4 className="h4-p10">
                          <Link href={dataSourch[0].Facebook} target="_blank">Facebook</Link>
                        </h4>
                      }

                      {
                        dataSourch[0] && dataSourch[0].Instagram && 
                        <h4 className="h4-p10">
                          <Link href={dataSourch[0].Instagram} target="_blank">Instagram</Link>
                        </h4>
                      }
                      {
                        dataSourch[0] && dataSourch[0].Twitter && 
                        <h4 className="h4-p10">
                          <Link href={dataSourch[0].Twitter} target="_blank">Twitter</Link>
                        </h4>
                      }
                      {
                        dataSourch[0] && dataSourch[0].YouTube && 
                        <h4 className="h4-p10">
                          <Link href={dataSourch[0].YouTube} target="_blank">YouTube</Link>
                        </h4>
                      }
                      {
                        dataSourch[0] && dataSourch[0].TikTok && 
                        <h4 className="h4-p10">
                          <Link href={dataSourch[0].TikTok} target="_blank">TikTok</Link>
                        </h4>
                      }
                      
                  </Col>    

            
                </Row>

            </Box>
            
 
          {
            dataSourch[0] && dataSourch[0].Copyright &&
            <>
            <hr className="h4-p10"></hr> 
            <h4 className="h4-p10">{dataSourch[0].Copyright}</h4>
            </>
          }

          
          </div>
        


      </div>
    </>
  )
}

export default Home
