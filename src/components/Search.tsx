import Image from 'next/image'
import React from 'react'
import IconSearch from '@/assets/icon-search.svg'


export default function Search() {
  return (
    <div className="flex gap-2 items-center">
        <Image
        src={IconSearch}
        alt='icone de procura'
        />
        <input type="text" className='bg-transparent rounded-full pr-3 ml-1 pl-1' placeholder='Procure pelo arquivo' />
    </div>
  )
}
