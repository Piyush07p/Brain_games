import flipdata from '../dataset/flipdata'
import {useState,useRef,useEffect} from 'react'
import '../css/flipMatch.css'
let flipper=25;
const Flipandmatch=()=>{
    // let shuffle =Array.from(flipdata).sort(compare()=>0.5-Math.random())

    //shuffling the images in random order 
    const shuffle=(arr)=>{
      for(let i=arr.length-1;i>0;i--){
          let j=Math.floor(Math.random()*(i+1))
          let temp=arr[i]
          arr[i]=arr[j]
          arr[j]=temp;
      }
      return arr
    }
    shuffle(flipdata)
     // calling the shuffle function
    // let flip_sec=document.querySelector('.flip_sec');
    // flip_sec.addEventListener('click',(event)=>{
    //     let curCard=event.target;
    //     curCard.classList.add('flip_animation')
    // })
    const [flipbox,setFlipbox]=useState(flipdata)
    let clickcount=0;
    let firstcard="";
    let seccard="";
    let prev="";
    let divs="";
    let setInt;
    let flipCount=0;
   

    let start="start"
    let stop="stop"
    let front_card=document.querySelector('.front_card')
    const resetgame=()=>{
        
        firstcard="";
        seccard="";
        clickcount=0;
         setInt=setInterval((e)=>{
            prev.style.transform="";
            divs.style.transform="";
           

        },600)
      
    }
    
    
    const flipchange=(e,index)=>{
          let flip_count=document.querySelector('.flip_left')
          flipper=flipper-1;
          flip_count.innerHTML=flipper;

          
         clearInterval(setInt);
         divs=document.querySelectorAll('.flip_box')[index]
         
         if(clickcount<3){
            divs.style.transform="rotateY(180deg)"
            divs.style.transition="1s ease all"
            clickcount++;
            if(clickcount===1){
                firstcard=flipdata[index].name; 
                prev=divs;   //assigning the  reference of previous card flipped
                 
            }else{
                seccard=flipdata[index].name;

              }
            if(firstcard&&seccard){
                if(firstcard===seccard){
                    flipCount++;
                    divs.style.background="rgba(0,0,0,0.8)";
                    prev.style.background="rgba(0,0,0,0.8)";
                    resetgame();
                }else{
                    resetgame();
                }
            }
           
            if(!flipper){
                let flip_count=document.querySelector('.flip_left')
                flipper=25;
                flipCount=0
                flip_count.innerHTML=flipper;
                setTimeout(()=>{
                    alert("game is over ,better luck next time")
                    
                    for(let i=0;i<12;i++){
                        let divs=document.querySelectorAll('.flip_box')[i]
                        divs.style.background="rgb(114, 10, 170)"
                    }
                },1000)
              }
              else{
                    if(flipCount==6){
                        let flip_count=document.querySelector('.flip_left')
                        flipper=25;
                        flip_count.innerHTML=flipper;
                        flipCount=0
                       setTimeout(() => {
                        alert("you played well click OK to play again")
                        for(let i=0;i<12;i++){
                            let divs=document.querySelectorAll('.flip_box')[i]
                            divs.style.background="rgb(114, 10, 170)"
                        }
                       }, 1000);
                    }
              }
         }
    }
    const[timer,setTimer]=useState(0)
    const[startTimer,setStartTimer]=useState(false);

    
   
    return(
        <>
            <h1>Flip & <span style={{color:"rgba(255,23,43)"}}>Match</span> </h1>
            <span className='flip_span' >flip left: <span className='flip_left'>25</span></span>
             
            <section className="flip_sec">
                  {
                      flipbox.map((e,index)=>{
                          
                          return(
                              <>
                                 <div onClick={()=>flipchange(e.id,index)} className="flip_box">
                                        <div className="front_card">

                                        </div>
                                        <div className="back_card">
                                         <img src={e.img} />
                                        </div>
                                 </div> 
                              </>
                          )
                      })
                  } 
                  {/* <button  onClick={()=> shuffle(flipdata)}>start</button> */}
            </section>
        </>
    )
}

export default Flipandmatch;
