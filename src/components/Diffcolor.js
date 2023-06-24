import React from 'react'
import { useState } from 'react'
import '../css/diffcolor.css'
const Diffcolor = () => {
     const [clrbox,setClrbox]=useState([{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10},{id:11},{id:12},{id:13},{id:14},{id:15},{id:16},{id:17},{id:18},{id:19},{id:20} ])

     const [start,setStart]=useState("start")
     let score=document.querySelector(".score_num")
     let bgclr=document.querySelectorAll('.diff_box')
     let randbox=''
     let count=0;
     let cnt=true;
     const starter=()=>{

          setStart("stop")
          let a=Math.floor(Math.random()*255) 
          let b=Math.floor(Math.random()*255)
          let c=Math.floor(Math.random()*255)
          let color=`rgb(${a},${b},${c})`
          randbox=Math.floor(Math.random()*20)
          for(let i=0;i<bgclr.length;i++){
              if(i!=randbox){
               bgclr[i].style.background=color ; 
              }else{
               bgclr[randbox].style.background=`rgb(${a},${b},${c-25})`
              }
          }
     }
     const checker=(e)=>{
         if(randbox===e-1){
          count=count+10;
          score.innerHTML=count
          starter();
         }
         else{
          count=count-10
          score.innerHTML=count
          starter();
         }
     }
  return (
       <section className='diff-sec'>
          <div className="scores">
               <h1>Score <span className='score_num'>0</span></h1>
          </div>
               <div className='diff_parent'> 
               {
                    clrbox.map((e)=>{
                         return(
                            <> 
                              <div onClick={()=>checker(e.id)} className='diff_box'>
                                 
                              </div>
                            </>
                        )
                    })
                }
               
               </div>
               <button onClick={starter}>{start}</button>
       </section>
  )
}

export default Diffcolor