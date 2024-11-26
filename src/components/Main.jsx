import React from 'react';
import f33 from '../assets/f33.png';
import f79 from '../assets/f79.png';
import f78 from '../assets/f78.png';
import f48 from '../assets/f48.png';
import f100 from '../assets/f100.png';
import f55 from '../assets/f55.png'
import LineGraph from './LineGraph';
import main from '../assets/main.png'

function Main() {
  return (
    <div className='w-full bg-[#F7F7F7]'>
        <div className='  container max-w-[1440px] mx-auto mt-3 pt-10 px-[64px]'>
        <div className='flex items-center gap-[10px]'>
            <div className='w-[13px] h-[43px] bg-[#0956AF] '></div>
            <h1 className='text-4xl font-semibold '>Билим тести</h1>
            <div className='w-[1050px] h-[4px] bg-[#DEE2E6]'></div>
        </div>

        <div className='mt-8 flex flrx-row justify-between'>
            <div className='flex flex-row flex-wrap max-w-[644px] gap-6 items-center justify-center'>
                <div className='w-[198px] justify-center items-center flex gap-2 flex-col'>
                    <img src={f33} alt="" />
                    <p className='text-[#495057] text-center text-base'>Конституциявий-хукукий саводхонлик</p>
                </div>
                <div className='w-[198px] justify-center items-center flex gap-2 flex-col'>
                    <img src={f79} alt="" />
                    <p className='text-[#495057] text-center text-base'>Ахборот-коммуникация технологиялари</p>
                </div>
                <div className='w-[198px] justify-center items-center flex gap-2 flex-col'>
                    <img src={f78} alt="" />
                    <p className='text-[#495057] text-center text-base'>Ахборот-коммуникация технологиялари</p>
                </div>

                <div className='w-[198px] justify-center items-center flex gap-2 flex-col'>
                    <img src={f48} alt="" />
                    <p className='text-[#495057] text-center text-base'>Узбек тили ва адабиёти</p>
                </div>
                <div className='w-[198px] justify-center items-center flex gap-2 flex-col'>
                    <img src={f100} alt="" />
                    <p className='text-[#495057] text-center text-base'>Узбекистон тарихи ва маданияти</p>
                </div>
                <div className='w-[198px] justify-center items-center flex gap-2 flex-col'>
                    <img src={f55} alt="" />
                    <p className='text-[#495057] text-center text-base'>Аклий салохияти ва мантикий фикрлаш</p>
                </div>
            </div>

            <div>
                <LineGraph></LineGraph>
                <span className='text-[#0956AF] block mt-6 text-5xl font-semibold'>78%</span>
                <div className='w-[333px]  h-[45px] bg-green-700 rounded-lg'></div>
            </div>
            <img src={main} alt="" />
        </div>

    </div>
    </div>
  )
}

export default Main