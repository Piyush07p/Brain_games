import {useRef,useEffect,useState} from 'react'
import '../css/clrmatch.css'
let count=0; 

let timerbar;
let timer_div;
const Colormatch=()=>{

    let arr=["red","green","blue","yellow","black","purple","pink"];
    
   
    const[iter,setIter]=useState(0);


  let [str,setStr]=useState("")
  const[randomclr,setRandomclr]=useState("")


    const changeColor=()=>{ 
        
        let colors=document.querySelector('.color')
        let timerbar=document.querySelector('.timeBar')
         setRandomclr(arr[Math.floor(Math.random() * arr.length)])
         setStr(arr[Math.floor(Math.random() * arr.length)])
        
         colors.style.color=randomclr
         timerbar.style.background=randomclr


        setIter(iter+1);

    }
 
    function outofgame(){
        let startbtn=document.querySelector('.startbtn')
		alert(`out, your score is ${count}`);
		count = 0 ;
		timerbar.classList.remove("timeBarRun");
		startbtn.style.display = "block" ;
	}


  
    const correct = () => {
        console.log(str);
        console.log(randomclr)
        console.log("---------")
        if (str == randomclr) {
            count++ ;
		    timerbar.classList.remove("timeBarRun");
			// tick.classList.add("clicked");
			setTimeout(() => {
				timerbar.classList.add("timeBarRun");
				// tick.classList.remove("clicked");
			},200);
            changeColor();
		}
		else{
			outofgame();
            
		}
    }

    const wrong = () => {
        
        if (str != randomclr) {
			changeColor();
			count++ ;
			timerbar.classList.remove("timeBarRun");
			// cross.classList.add("clicked");
			setTimeout(() => {
				timerbar.classList.add("timeBarRun");
				// cross.classList.remove("clicked");
			},200);
		}
		else{
			outofgame();
		}

    }


// start the game--------

let  startgame;

const Start=()=>{
    let timerbar=document.querySelector('.timeBar')
    let startbtn=document.querySelector('.startbtn')
    timerbar.classList.add("timeBarRun");
    changeColor();
    startbtn.style.display = "none" ;
  
}


var myInt = setInterval(() => {
     timerbar=document.querySelector('.timeBar')
     timer_div = document.querySelector('.timer-div');
     if(timer_div!==null&&timerbar!==null){
        let timeWidth = timerbar.offsetWidth ;
       let maxWidth=timer_div.offsetWidth 
       if (timeWidth >= maxWidth) {
        alert(`timeout, your score is ${count}`);
        timerbar.classList.remove("timeBar");
        setTimeout(() => {
            count = 0;
        },100) 
    }
    else{
        let scores=document.querySelector('.scores')
        scores.innerText = count ;
       
    }
     }
        
    

},2000  ); 


//   let popup=document.querySelector(".show_score div")
//   let finalscore=document.querySelector(".finalscore")
//   let iteration=document.querySelector(".iteration")
//      function scorepopup(){
//             finalscore.innerHTML=count;
//             iteration.innerHTML=iter;  
//             popup.style.visibility="visible"
//      }

//    function gopopup(){
//      popup.style.visibility="hidden"
//    } 

   document.onkeydown = function(e){
    if (e.keyCode == 39) {
        correct();
    }
    if (e.keyCode == 37) {
        wrong();
    }
}
    
    return(
        <>
            <section>
                <div className="show_score">
                    <div>
                        <span>you scored: </span><span className="finalscore">0</span>
                        <br />
                        <span>No. of iteration: </span> <span className="iteration">{iter}</span>
                        <br />
                        <button >Ok</button>
                    </div>
                </div>

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
                    <h1 className="scores">0</h1>
                </div>
                <div className="btn">
                    <button onClick={wrong}>wrong</button>
                    <button onClick={correct}>correct</button>
                </div>
                <div className="start">
                    <button className="startbtn"  onClick={Start}>start</button>
                   
                </div>

            </section>
           
        </>
    )
}

export default Colormatch;