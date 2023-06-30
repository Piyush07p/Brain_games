import logo from '../images/brain_logo.avif'
const Header=()=>{
    return(
        <>
          <div style={{display:"flex"}}>
              <img className='logo' style={{width:"7rem", height:"5rem", margin:"1rem 3rem"}} src={logo} alt="logo" />
              <h1 style={{display:'flex',justifyContent:'center',marginLeft:"0 50%"}}>Brainer</h1>
          </div>
        </>
    )
}

export default Header;
