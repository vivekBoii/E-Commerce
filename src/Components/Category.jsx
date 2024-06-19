import React from 'react'
import responsive from '../Assets/Icons/responsive.png'
import cream from '../Assets/Icons/cream.png'
import Grocery from '../Assets/Icons/grocery.png'
import home from '../Assets/Icons/working-at-home.png'
import toys from '../Assets/Icons/toys.png'
import sports from '../Assets/Icons/sports.png'
import { useNavigate } from 'react-router-dom'


export default function Category() {
    const navigateTo = useNavigate();
    return (
        <div className='mb-10 py-4'>
            <div className='mx-32 py-3 md:text-left sm:text-center text-center '>
                <h1 className='text-2xl font-bold text-red-500'>Categories</h1>
            </div>
            <div className='md:mx-32 mx-0 py-3 md:text-left sm:text-center text-center '>
                <h1 className='text-4xl font-bold color-red-500'>Browse By Category</h1>
            </div>

            <div className=' py-3 flex-wrap xl:mx-32  flex-row flex gap-10 justify-center mx-0 sm:mx-0 md:mx-10 lg:mx-10'>
                <div className='card  flex flex-wrap flex1-row justify-center gap-6'>
                    <div onClick={()=> navigateTo("/product?category=electronics")} className='gfg sm:p-10 p-6   sm:pb-7 pb-3 border-2 rounded-lg hover:text-white hover:bg-red-500 hover:cursor-pointer '>
                        <img src={responsive} alt="" style={{ height: "100px" }} className='image'/>
                        <div className='flex justify-center pt-4'>
                            <h1>Electronics</h1>
                        </div>
                    </div>
                    <div onClick={()=> navigateTo("/product?category=Grocery")} className='gfg sm:p-10 p-6   sm:pb-7 pb-3 border-2 rounded-lg hover:text-white hover:bg-red-500 hover:cursor-pointer '>
                        <img src={Grocery} alt="" style={{ height: "100px" }} className='image'/>
                        <div className='flex justify-center pt-4'>
                            <h1>Groceries</h1>
                        </div>
                    </div>
                    <div onClick={()=> navigateTo("/product?category=Health")} className='gfg sm:p-10 p-6   sm:pb-7 pb-3 border-2 rounded-lg hover:text-white hover:bg-red-500 hover:cursor-pointer '>
                        <img src={cream} alt="" style={{ height: "100px" }} className='image'/>
                        <div className='flex justify-center pt-4'>
                            <h1>Beauty</h1>
                        </div>
                    </div>
                    <div onClick={()=> navigateTo("/product?category=HomenLifestyle")} className='gfg sm:p-10 p-6   sm:pb-7 pb-3 border-2 rounded-lg hover:text-white hover:bg-red-500 hover:cursor-pointer '>
                        <img src={home} alt="" style={{ height: "100px" }} className='image'/>
                        <div className='flex justify-center pt-4'>
                            <h1>LifeStyle</h1>
                        </div>
                    </div>
                    <div onClick={()=> navigateTo("/product?category=Sports")} className='gfg sm:p-10 p-6   sm:pb-7 pb-3 border-2 rounded-lg hover:text-white hover:bg-red-500 hover:cursor-pointer '>
                        <img src={sports} alt="" style={{ height: "100px" }} className='image'/>
                        <div className='flex justify-center pt-4'>
                            <h1>Sports</h1>
                        </div>
                    </div>
                    <div onClick={()=> navigateTo("/product?category=toys")} className='gfg sm:p-10 p-6   sm:pb-7 pb-3 border-2 rounded-lg hover:text-white hover:bg-red-500 hover:cursor-pointer ' >
                        <img src={toys} alt="" style={{ height: "100px"}} className='image'/>
                        <div className='flex justify-center pt-4'>
                            <h1>Toys</h1>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
