import {useRef,useEffect,useState} from 'react'
import '../css/clrmatch.css'
let count=0; 

let timerbar;
let timer_div;

let flag=true;
let iter=-1;
const Colormatch=()=>{

    let arr=["red","green","blue","yellow","black","purple","pink","gray"];
    const [showbtn,setShowbtn]=useState(true)
   
  let [str,setStr]=useState("")
  const[randomclr,setRandomclr]=useState("")

    const changeColor=()=>{ 
         if(flag){
            outofgame()
            flag=false
         }
        let colors=document.querySelector('.color')
        let timerbar=document.querySelector('.timeBar')
         setRandomclr(arr[Math.floor(Math.random() * arr.length)])
         setStr(arr[Math.floor(Math.random() * arr.length)])
        
         colors.style.color=randomclr
         timerbar.style.background=randomclr

        iter=iter+1;

    }
 const checker=(clr,ind)=>{
    let scores=document.querySelector('.score_count')
       if(clr==str){
        count=count+1;
        scores.innerText = count ;
       }
       else{
        count=count-1;
        scores.innerText = count ;
       }
        changeColor()
 }
    function outofgame(){
        setTimeout(()=>{
        let startbtn=document.querySelector('.startbtn')
		alert(` your score is ${count} in ${iter} iteration`);
		count = 0 ;
        let timerbar=document.querySelector('.timeBar')
		timerbar.classList.remove("timeBarRun");
        let scores=document.querySelector('.score_count')
        scores.innerHTML="0"
		setShowbtn(true)
        setStr("")
        },16000)
	}

    let  startgame;

    const Start=()=>{
        count=0;
        setShowbtn(false)
        let timerbar=document.querySelector('.timeBar')
        let startbtn=document.querySelector('.startbtn')
        timerbar.classList.add("timeBarRun");
        flag=true;
        iter=-1;
       
        changeColor();
        
      
    }

 const [colrbox,setColrbox]=useState([{clr:"red"},{clr:"green"},{clr:"blue"},{clr:"yellow"},{clr:"black"},{clr:"purple"},{clr:"pink"},{clr:"gray"}])

    return(
        <>
            <section>
                {/* <div className="show_score">
                    <div>
                        <span>you scored: </span><span className="finalscore">0</span>
                        <br />
                        <span>No. of iteration: </span> <span className="iteration">{iter}</span>
                        <br />
                        <button >Ok</button>
                    </div>
                </div> */}

                <div className="timer">
                    <div className='timer-div'>
                        <p  className="timeBar"></p>
                    </div>
                </div>

                <div className="main_box">
                    <div className="gamebox">
                        <h1  className="color">{str}</h1>
                    </div>
                </div>
                <div className="score">
                    <span>score:</span>
                    <h1 className="score_count">0</h1>
                </div>
                <div className="choose_box">
                   
                    {
                        colrbox.map((e,index)=>{
                            return(
                                <>
                                    <div style={{background:e.clr}} className='choose_clr' onClick={()=>checker(e.clr,index)}>

                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                <div className="start">
                   {(showbtn)?<button className="startbtn"  onClick={Start}>start</button>:" "} 
                   
                </div>

            </section>
           
        </>
    )
}

export default Colormatch;