import {useState} from 'react'
import '../css/cell.css';
import cell_data from '../dataset/cell_data'
const Newcell=()=>{
  
   const [cell,newCell]=useState(cell_data);
   let gridbox=document.querySelector(`.cell_box`);
    let idval=1
   const startcell=()=>{
      
      let cell_interval=setInterval(()=>{
         idval= cell_data[Math.floor(Math.random()*49)].id;
         console.log(idval)
      },2000)
   }
  
   return(
       <>
          <section className="cell_section">
          <div className="main_cell">
                 {
                     cell.map((e)=>{
                        return(
                           <>
                              <div key={e.id} className={`cell_box`} id={`${e.id===idval?"cell_box_clr":""}`}>
                                    {e.id}
                              </div> 
                           </>
                        )
                     })
                 }
                 </div>

                 <div>
                      <button className="cell_btn" onClick={startcell}> start</button>
                 </div>
                 <div className="cell_score">
                     <h1>Score:<span>00</span></h1>
                 </div>
          </section>
       </>
   )
}

export default Newcell;

