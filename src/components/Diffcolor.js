import React, { useEffect } from 'react'
import { useState } from 'react'
import '../css/diffcolor.css'

let time_flag=true;

const Diffcolor = () => {
     const [clrbox,setClrbox]=useState([{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10},{id:11},{id:12},{id:13},{id:14},{id:15},{id:16},{id:17},{id:18},{id:19},{id:20} ])

     let rules=document.querySelector('.rules')
     let score=document.querySelector(".score_num")
     let bgclr=document.querySelectorAll('.diff_box')
     let iter=document.querySelector('.iter');
     var count=0;
     let randbox=''
     // let [score,setScore]=useState(0);
   
     let cnt=true;
     let iter_cnt=1;
     const [flag,setFlag]=useState(true)
     const [total,setTotal]=useState(0)
     

     const gameOver=()=>{
          const timerout=setTimeout(()=>{
          let time_bar=document.querySelector('.time_bar')
          let popup=document.querySelector('.popup');
          popup.style.top="90px"
          time_bar.classList.remove("time_bar_animate")
          let accur=document.querySelector('.accuracy');
          let total_scr=document.querySelector('#total_scr')
          let total=score.innerText;
          let rounds=iter.innerText;
          total_scr.innerText=total
          accur.innerHTML=Math.floor((total/rounds)*10)
          count=0;
         },30000)
     }
     const timebar=()=>{
          if(time_flag){
               gameOver()
               time_flag=false;
          }
          let time_bar=document.querySelector('.time_bar')
          time_bar.classList.add("time_bar_animate")
     }
     const starter=()=>{
       

          let rules=document.querySelector('.rules')
          if(flag){
               rules.style.top="100px"
          }
          
          setFlag(false)
     
          let a=Math.floor(Math.random()*255) 
          let b=Math.floor(Math.random()*255)
          let c=Math.floor(Math.random()*255)
          let color=`rgb(${a},${b},${c})`
          randbox=Math.floor(Math.random()*20)
          for(let i=0;i<bgclr.length;i++){
              if(i!=randbox){
               bgclr[i].style.background=color ; 
              }else{
               bgclr[randbox].style.background=`rgb(${a},${b-15},${c-20})`
              }
          }
     }
     
     const checker=(e)=>{
          
         if(randbox===e-1){
         
          iter.innerText=iter_cnt;
          iter_cnt++;
          starter();
          count=count+10;
          score.innerHTML=count;
         }
         else{
          
          iter.innerText=iter_cnt;
          iter_cnt++;
          starter();
          count=count-10
          score.innerHTML=count;
          
         }
         
     }
    
     const popdown=()=>{
          let popup=document.querySelector('.popup')
          popup.style.top=""
          // setFlag(true)
          count=0;
          score.innerHTML=count;
          iter_cnt=1
          iter.innerText=iter_cnt;
          time_flag=true;
          timebar()
          
     } 
     
     
  return (
       <section className='diff-sec'>
          <div className="popup">
               <div>
                    <h1 >You scored: <span id='total_scr'>0</span></h1>
                    <p>accuracy: <span className='accuracy'>0</span>%</p>
                    <button style={{display:"block",margin:"2rem auto" ,}} onClick={popdown}>play again</button>
               </div>
          </div>
          <div className="difftimer">
                      <div className='time_bar_div' >
                         <h1 className='time_bar'></h1>
                      </div>
                </div>
          <div className="rules">
               <h1>Rules</h1>
               <ul >
                    <li>Click Ok to begin the game</li>
                    <li>Game will contain 20 boxes with some background color</li>
                    <li>Out of 20 boxes any one box will have diff background color and rest are same</li>
                    <li>Click on the box with different bg color</li>
                    <li>If you choose correct box then you will earn 10 points else -10 points</li>

               </ul>
               <button  style={{display:"block",background:"#fff",color:"black",margin:"2rem auto" ,}} onClick={()=>{
                    rules.style.top=""
                    timebar()
                    starter()
               }}>OK</button>
          </div>
        
          <div className="scores">
            <h3>iteration: <span className='iter'>0</span></h3> 
            <h1>Score:<span className='score_num'>0</span> </h1>
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
               {
                    (flag)?<button  onClick={starter}>start</button>:" "
                    
               }
       </section>
  )
}

export default Diffcolor