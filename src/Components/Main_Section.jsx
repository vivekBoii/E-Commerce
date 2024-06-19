import React, { Component } from 'react'
import add from '../Assets/images/add1.jpeg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import Carouse from './Carousel_Slider.jsx'
export default class Main_Section extends Component {

    render() {

        return (
            <>
                <div className='flex md:flex-row bg-brown-200 h-auto'>
                    <div className="left md:flex  justify-center pt-10 border-r-2 border-gray-300 hidden sm:hidden md:visible lg:visible xl:visible" style={{ width: "350px", height: "500px" }}>
                        <div className="flex flex-col ">
                            <a href="http://localhost:5174/product?category=womenfashion" className='hover:text-red-500'><h1 className='py-1 font-semibold'>New</h1></a>
                            <a href="http://localhost:5174/product?category=menfaashion" className='hover:text-red-500'><h1 className='py-1 font-semibold'>Ethnic Set</h1></a>
                            <a href="http://localhost:5174/product?category=electronics" className='hover:text-red-500'><h1 className='py-1 font-semibold'>Tops</h1></a>
                            <a href="http://localhost:5174/product?category=homelifestyle" className='hover:text-red-500'><h1 className='py-1 font-semibold'>Kurti Set </h1></a>
                            <a href="http://localhost:5174/product?category=medicine" className='hover:text-red-500'><h1 className='py-1 font-semibold'>Ambrella Set </h1></a>
                            <a href="http://localhost:5174/product?category=sports" className='hover:text-red-500'><h1 className='py-1 font-semibold'>Nayra Set </h1></a>
                            <a href="http://localhost:5174/product?category=toys" className='hover:text-red-500'><h1 className='py-1 font-semibold'>Pant</h1></a>
                            <a href="http://localhost:5174/product?category=grocery" className='hover:text-red-500'><h1 className='py-1 font-semibold'>Dupatta</h1></a>
                            {/* <a href="http://localhost:5174/product?category=health" className='hover:text-red-500'><h1 className='py-1 font-semibold'>Health & Beauty</h1></a> */}
                        </div>
                    </div>

                    <div className="right  p-5" style={{ width: "1150px" }}>

                        <Carouse />

                    </div>

                </div>

                

            </>
        )
    }
}
