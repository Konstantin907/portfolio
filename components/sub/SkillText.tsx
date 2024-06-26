"use client"

import React from 'react'

import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center mt-[280px]'>
<motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[10px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-8 w-8" />
          <h1 className="Welcome-text text-[20px]">
            Think better with Next js 14
          </h1>
        </motion.div>
        <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[40px] text-white font-medium mt-[10px] text-center mb-[15px]'
        >
            Making apps with modern technologies
        </motion.div>
        <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive text-[30px] text-gray-200 mb-8 mt-[10px] text-center'
        >
            Never miss a task, deadline or idea
        </motion.div>
    </div>
  )
}

export default SkillText