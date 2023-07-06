
import './Intro.css'
import pikachu from '../../img/pokemon-1.png';
const Intro = ()=>{
  
return (<div>
<section id="hero" className="hero">
    <div className="container position-relative">
      <div className="row gy-5" data-aos="fade-in">
        <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
          <h2>Welcome to <span>PokedexM</span></h2>
          <p>Your Ultimapte website to view your prefered Pokemons</p>
          <div className="d-flex justify-content-center justify-content-lg-start">
            <a href="#about" className="btn-get-started">Get Started</a>
          </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2">
          <img src={pikachu} className="img-fluid intro-img" alt=""/>
        </div>
      </div>
    </div>
<div/>
</section>              

</div>)}

export default Intro;
