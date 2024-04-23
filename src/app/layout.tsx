import type { Metadata } from 'next'

// import { Html, Head, Main, NextScript } from 'next/document';
// import Script from 'next/script';
import getConfig from "next/config"

import StyledComponentsRegistry from '@/lib/AntdRegistry';

import { UserProvider } from "@auth0/nextjs-auth0/client";

import UserHearder from "@/app/components/MainHearder"
import UserFooter from "@/app/components/MainFooter"

import { Inter } from 'next/font/google'

import { ConfigProvider } from 'antd';
import theme from '../lib/theme/themeConfig';

import { GoogleTagManager } from '@next/third-parties/google'


import '@/styles/globals.css'


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const inter = Inter({ subsets: ['latin'] })

const { serverRuntimeConfig } = getConfig()

export const metadata: Metadata = {
  title: serverRuntimeConfig['WebSiteName'],
  description: serverRuntimeConfig['WebSiteDescription'],
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <meta name="google-adsense-account" content="ca-pub-2100876588811975" />
      <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2100876588811975`}
          crossOrigin="anonymous"
        />

      </head>
      <body className={inter.className}>
        <UserProvider>
  
          <StyledComponentsRegistry>

            <ConfigProvider theme={theme}>

            <UserHearder></UserHearder>
              {children}

            <UserFooter></UserFooter>
              
            </ConfigProvider>

    
          </StyledComponentsRegistry>
       
        </UserProvider>
        
     
      </body>
      <GoogleTagManager gtmId="G-9VYQXJG0CP" />
     

    </html>
  )
}
