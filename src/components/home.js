
import Braingames from '../sub_compo/checksum'
import Header from './header';
import '../css/home.css'
const Home=(props)=>{
    return(
        <>
          <Header/>
            <section className="home_sec" >
               {/* <Braingames title="New Cell" route="/cell"/> */}
               <Braingames title="Color match" route="/Colormatch"/>
               {/* <Braingames title="Hidden key" route="/hidden"/> */}
               <Braingames title="Flip & Match" route="/Flip"/>
               <Braingames title="Different color" route="/Diffcolor"/>

            </section>
        </>
    )
}

export default Home;
