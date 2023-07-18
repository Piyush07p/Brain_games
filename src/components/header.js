import logo from '../images/brain_logo.avif'
const Header=()=>{

    const navb={
        display:"flex",
        borderBottom:"1px solid",
        justifyContent:"space-between",
        padding: "0 2rem",
        height:"6rem",
        width:"",
        margin:"2rem 0"

    }
    return(
        <>
          <div style={navb} >
              <img className='logo' style={{width:"6rem", height:"4.5rem", margin:"0rem 2rem",borderRadius:"6rem"}} src={logo} alt="logo" />
              <h1 style={{display:'flex',justifyContent:'center',marginLeft:"0 50%"}}>Brainer</h1>
          </div>
        </>
    )
}

export default Header;
