import React, { useState } from 'react'
import data from './Data';
import './Review.css'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Review() {
  return (
    <div className='container'>
        <div className='title'>
            <h2>Our Reviews</h2>
            <div className='underline'></div>
        </div>
        <Reviews />
    </div>
  )
}

function Reviews(){
    const[index,setIndex]=useState(0);
    const{name,job,image,text}=data[index];
    const checkNumber = (num)=>{
        if(num > data.length-1){
            return 0;
        }
        if(num < 0){
            return data.length-1;
        }
        return num;
    }
    const prevPerson = ()=>{
        setIndex((index)=>{
            let newIndex = index-1;
            return checkNumber(newIndex);
        })
    }
    const nextPerson = ()=>{
        setIndex((index)=>{
            let newIndex = index+1;
            return checkNumber(newIndex);
        })
    }
    const randomPerson=()=>{
        let randomNumber = Math.floor(Math.random()*data.length)
        setIndex(randomNumber);
    }
    return(
        <div className='review'>
            <div className='img-container'>
                <img src={image} alt={name} className="person-img" />
            </div>
            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>
            <div className='button-container'>
                <button className='prev-btn' onClick={prevPerson}>
                    <FaChevronLeft />
                </button>
                <button className='next-btn' onClick={nextPerson}>
                    <FaChevronRight  />
                </button>
            </div>
            <button className='random-btn' onClick={randomPerson}>
                Surprise me
            </button>
        </div>
    )
}
