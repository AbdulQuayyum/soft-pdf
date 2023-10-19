'use client'

import React, { useEffect } from 'react'
import { TbArrowBigUpLines } from 'react-icons/tb'

const BackToTop = () => {
  useEffect(() => {
    const handleScroll = () => {
      const backToTop = document.querySelector('.back-to-top')
      if (typeof window !== 'undefined' && window.scrollY >= 560) {
        backToTop?.classList.add('show-back-to-top')
      } else {
        backToTop?.classList.remove('show-back-to-top')
      }
    }

    // Add event listener when component mounts
    window.addEventListener('scroll', handleScroll)

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []) // Empty dependency array ensures the effect runs once on mount

  return (
    <a
      href="#"
      className="back-to-top"
      onClick={(e) => {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }}
    >
      <TbArrowBigUpLines size={24} className="back-to-top-icon" />
    </a>
  )
}

export default BackToTop
