import {useRef,useEffect,useState} from 'react'
import '../css/clrmatch.css'
// import {scorepopup, gopopup,start,stop,correct,wrong, changeColor} from '../js/Colrmatch.js'
const Colormatch=()=>{

    let arr=["red","green","blue","yellow","black","purple","pink"];
    let colors=useRef(" ")
    let timer=document.querySelector('.time')
    // let scores=document.querySelector('.scores')
    const  [scores,setScores]=useState(0)
    var corr=false;
    var count=0; 
    const[iter,setIter]=useState(0);


    // change_color function-->

    const [num,setNum]=useState("");
    const [randomclr,setRandomclr]=useState("");

        function changeColor(){ 
        setNum(arr[Math.floor(Math.random() * arr.length)])
        setRandomclr(arr[Math.floor(Math.random() * arr.length)])
    
        //    colors.current.style.color=randomclr
        //    timer.style.background=randomclr
        console.log(num);
        console.log(randomclr);

        if (num === randomclr)
            corr = true;

        setIter(iter+1);

    }
 


    const correct = () => {
        if (corr) {
            setScores(++count);
        }
        else {
            setScores(--count);
        }
        corr = false;
    }

    const wrong = () => {
        if (!corr) {
            setScores(++count);
        }
        else {
            setScores(--count);
        }
        corr = false;

    }


// start the game--------

let startgame='';

const Start=()=>{
//    timer.style.animation = "timebar 1.3s linear infinite"
   setScores(0);
   count=0;
   setIter(0); 
   // setinterval  is called
   
  
    startgame=setInterval(changeColor,1300)
  
   
}

// stop the game-------

const stop=()=>{
     clearInterval(startgame);
     scorepopup();
  }

  let popup=document.querySelector(".show_score div")
  let finalscore=document.querySelector(".finalscore")
  let iteration=document.querySelector(".iteration")
     function scorepopup(){
            finalscore.innerHTML=count;
            iteration.innerHTML=iter;
            popup.style.visibility="visible"
     }

   function gopopup(){
     popup.style.visibility="hidden"
   } 
    
    const stopbtn=useRef(" ")
    // let stopbtn = document.querySelector(".stopbtn");
    
    // stopbtn .addEventListener("click", () => {
    //     timer.style.animation = ""
    // })

    
    return(
        <>
            <section>
                <div className="show_score">
                    <div>
                        <span>you scored: </span><span className="finalscore">{scores}</span>
                        <br />
                        <span>No. of iteration: </span> <span className="iteration">{iter}</span>
                        <br />
                        <button onClick={gopopup}>Ok</button>
                    </div>
                </div>

                <div className="timer">
                    <div>
                        <p ref={timer} className="time"></p>
                    </div>
                </div>

                <div className="main_box">
                    <div className="gamebox">
                        <h1 ref={colors}  className="color">{num}</h1>
                    </div>
                </div>
                <div className="score">
                    <span>score:</span>
                    <h1 className="scores">{scores}</h1>
                </div>
                <div className="btn">
                    <button onClick={wrong}>wrong</button>
                    <button onClick={correct}>correct</button>
                </div>
                <div className="start">
                    <button className="startbtn"  onClick={Start}>start</button>
                    <button className="stopbtn"  onClick={stop}>stop</button>
                </div>

            </section>
           
        </>
    )
}

export default Colormatch;