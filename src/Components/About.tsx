'use client'

import React, { useState } from 'react'

import CardDesign from './CardDesign'
import MaxWidthWrapper from './MaxWidthWrapper'
import {
  automatic,
  easy,
  productive,
  search,
  understanding,
} from '../Assets/Index'

const data = [
  {
    id: 1,
    imgUrl: understanding,
    title: 'Document Understanding',
    desc:
      'Users can gain a deeper understanding of the content within PDF documents by asking specific questions, helping them extract relevant information efficiently.',
  },
  {
    id: 2,
    imgUrl: automatic,
    title: 'Automation of Information Retrieval',
    desc:
      'Instead of manually scanning through documents, users can automate the process of extracting information by posing questions to the system.',
  },
  {
    id: 3,
    imgUrl: search,
    title: 'Search Efficiency',
    desc:
      'Asking questions rather than manually searching through lengthy documents can save time and improve overall user efficiency.',
  },
  {
    id: 4,
    imgUrl: productive,
    title: 'Increased Productivity',
    desc:
      'Users can quickly find the information they need, leading to increased productivity and potentially reducing the time spent on manual document analysis.',
  },
  {
    id: 5,
    imgUrl: easy,
    title: 'Easy To Use',
    desc:
      'By addressing the pain points associated with document analysis, Soft-PDF platform can enhance user satisfaction by introducing an easy process for document understanding.',
  },
]

const About = () => {
  const [active, setActive] = useState(2)

  return (
    <MaxWidthWrapper>
      <div className="mx-auto flex mt-24 flex-col">
        <span className="mb-5 text-4xl lg:text-5xl py-6 flex items-center justify-center font-extrabold text-[#000]">
          Why Should you use Soft-PDF?
        </span>
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[60vh] gap-5">
          {data.map((item, index) => (
            <CardDesign
              key={item.id}
              {...item}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default About
