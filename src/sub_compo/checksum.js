import {NavLink} from 'react-router-dom'
import '../css/home.css'
const Braingames=(props)=>{
    return(
        <>
            
             <div className="Brain_box">
                   <h1>{props.title}</h1>
                  <NavLink to={props.route}> <button className="goto_btn">go to</button></NavLink>
             </div>
        </>
    )
}

export default Braingames
