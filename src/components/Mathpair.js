import React from 'react'
import '../css/mathpair.css'
import { useState } from 'react';
let counter=0;
const Mathpair = () => {
    let opArr=["*","/","-","+"];
    const [flag,setFlag]=useState(true);
    const [operator,setOperator]=useState("")
    
    const [numbox,setNumbox]=useState([])
    let mathrules=document.querySelector('.Math_rules')
    const gameOver=()=>{
        const timerout=setTimeout(()=>{
         let time_bar=document.querySelector('.time_bar')
         alert("you scored: "+counter+"out of 12")
         time_bar.classList.remove("time_bar_animate")
         counter=0;
         setNumbox([])
         setFlag(true);
        },18000)
    }
    function genNum(){
        gameOver();
        let mathrules=document.querySelector('.Math_rules')
        let time_bar=document.querySelector('.time_bar')
        time_bar.classList.add("time_bar_animate")
        mathrules.style.top="";
        let numboxArr=[]
        let resboxArr=[]
        for(let i=0;i<6;i++){
            let a=Math.floor(Math.random()*40);
            let b=Math.floor(Math.random()*20);
            let op=opArr[Math.floor(Math.random()*4)];
        let result
        if(op==="+"){
            result=a+b;
            resboxArr.push({
                id:i,
                res:result
            })
          
        }else if(op==="-"){
            result=a-b;
            resboxArr.push({
                id:i,
                res:result
            })
           
        }
        else if(op==="*"){
            result=a*b;
            resboxArr.push({
                id:i,
                res:result
            })
        }
        else{
            if(b==0)
             b=1;
            result=parseFloat(a/b).toFixed(2);
            resboxArr.push({
                id:i,
                res:result
            })
            
        }
            numboxArr.push({
                id:i,
                num1:a,
                num2:b,
                opr:op,
               
            })
        }
       for(let i=0;i<6;i++){
        numboxArr.push(resboxArr[i])
       } 

       // for shffling the array

    //    numboxArr=[...numboxArr,...resboxArr].sort(()=>Math.random-0.5).map((e)=>({...e,key:Math.floor(Math.random()*12)}))
       numboxArr.sort(()=>{
        return Math.random()-0.5
       })
      
        setNumbox(numboxArr)
        
    }
    const start=()=>{
        setFlag(false);
        let mathrules=document.querySelector('.Math_rules')
        mathrules.style.top="100px"
          
   
    }
    let arr=[]
    let box_ind=[]
   
    const checker=(e,ind)=>{
        // console.log(e)
        let box=document.querySelectorAll('.math_play'); 
        
        box[ind].style.background="rgb(83, 225, 51) "
        arr.push(e)
        box_ind.push(ind)
        if(arr.length>1){
            if(arr[0]==arr[1]){
                box[box_ind[0]].style.visibility="hidden"
                box[box_ind[1]].style.visibility="hidden"
                counter=counter+2;
            }else{
                box[box_ind[0]].style.background=""
                box[box_ind[1]].style.background=""
            }
              
            arr=[];
            box_ind=[]
        }

        
    }
  
  return (
       <section className='Mathpair_section'>
                <div className="mathtimer">
                      {/* <div className='span_time'>
                         <span>00</span>
                      </div> */}
                      <div className='time_bar_div' >
                         <h1 className='time_bar'></h1>
                      </div>
                </div>
          <div className="Math_rules">
              <h1>Rules</h1>
              <ul >
                  <li>Click on the OK button to begin the game</li>
                  <li>Game will contain 12 boxes with some mathematical calculation</li>
                  <li>Click on the box and the box containing its result</li>
                  <li>If the boxes are matched they will disappear</li>
                  <li>After a correct match you will get a positive score</li>

              </ul>
              <button style={{ display: "block", margin: "2rem auto", }} onClick={genNum}>OK</button>
          </div>
                <div className='mpair_box'>
                        {
                           numbox.map((e,index)=>{
                            return(
                                <>
                                    <div  onClick={()=>checker(e.id,index)} className='math_play'>
                                        <p className='calc'>{e.num1}{e.opr}{e.num2}</p>
                                        
                                        <p className='result'>{e.res}</p>
                                    </div>
                                </>
                            )
                           })
                            
                        }
                </div>
                <div className='math_btn' >
                         {(flag)?<button onClick={start}>start</button>:" "}
                </div>
       </section>
  )
}

export default Mathpair