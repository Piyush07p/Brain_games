import React from 'react'
import {useState,useEffect,useRef} from 'react'
import '../css/hidden.css'
import logo1 from '../images/sheep.jpg'
import logo2 from '../images/lion.jpg'
import logo3 from '../images/tiger.png'
import logo4 from '../images/dogg.jpg'
import logo5 from '../images/catt.jpg'
import logo6 from '../images/tort.jpg'
import logo7 from '../images/peng.jpg'
import logo8 from '../images/rabb.jpg'
import logo9 from '../images/qmark.jpg'

const Hidden = () => {

const [flag,setFlag]=useState(true);
const [images,setImages]=useState([logo1,logo2,logo3,logo4,logo5,logo6,logo7,logo8,logo9]);
let randNum=[1,2,3,4,5,6,7,8,9];
const change1=useRef("")
const change2=useRef("")
const change3=useRef("")
const change4=useRef("")
 
const rmvbtn=()=>{
   
    setFlag(false);
    change1.current.src=images[Math.floor(Math.random()*9)];
    change2.current.src=images[Math.floor(Math.random()*9)]
    change3.current.src=images[Math.floor(Math.random()*9)]
    change4.current.src=images[Math.floor(Math.random()*9)]
    // setrandomimg(randNum) // calling the setrandomimg function
}
// useEffect(()=>{
//   let newArr=[];
//   while(randNum.length<10){
//       const rand=Math.floor(Math.random()*randNum.length);
//       if(!newArr.includes(randNum[rand])){
//           newArr.push(randNum[rand])
//       }
//   }
// },[rmvbtn])
const addbtn=()=>{
    setFlag(true)
}
    return (
        <section className="hidden_sec">
              <div className="hidden_timer">
                            <h1>00</h1>
                            <h1>score:<span>00</span></h1>
              </div>
              <div className="game_area">
                    <div className="img1">
                        <img ref={change1} src={images[randNum[0]]} alt=""/>
                    </div>
                    <div className="img1">
                        <img ref={change2} src={images[randNum[1]]} alt=""/>
                    </div>
                    <div className="img1">
                        <img ref={change3} src={images[randNum[2]]} alt=""/>
                    </div>
                    <div className="img1">
                        <img ref={change4} src={images[randNum[3]]} alt=""/>
                    </div>
              </div>
              <div className="hidden_btn">
                 {
                   flag? <button onClick={rmvbtn}>
                      GO
                    </button>
                    :
                    <div >
                       <button style={{fontSize:"1rem"}} onClick={addbtn} > back</button>  
                     <div className="game_area">
                     <div className="img1">
                        <img   src={images[randNum[0]]} alt=""/>
                    </div>
                    <div className="img1">
                        <img src={images[randNum[1]]} alt=""/>
                    </div>
                    <div className="img1">
                        <img src={images[randNum[2]]} alt=""/>
                    </div>
                    <div className="img1">
                        <img src={images[randNum[3]]} alt=""/>
                    </div>
                     </div>
                    </div>
                 }
              </div>
        </section>
    )
}

export default Hidden
