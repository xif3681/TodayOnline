
'use client'
import NavList from '@/app/components/NavList'

import { UserRouter, } from '@/types'

import { useState, useEffect, useCallback } from 'react'

import { fetchModDatas} from '@/services/article'


const frontFixNav: Array<UserRouter> = [];


export default function Home() {

  const [frontPages, setFrontPages] = useState<Array<UserRouter>>([

  ])

  const getData = useCallback(async () => {
    let url = `/api/getNavs`

    const { data } = await fetchModDatas(url)
    const datac = data.map((item: any) => {
      return {
        name: item.title,
        id: item.field_id,
        path:`article/${item.field_id}`
      }
    })
    setFrontPages(datac)
  }, [])

  useEffect(() => {
    getData()
  }, [ getData])


  return (
    <>
      
      <NavList pages={frontPages} fixNav={frontFixNav}></NavList>
      
    </>

  

  )
}
