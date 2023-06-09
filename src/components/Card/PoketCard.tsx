
import "./PoketCard.css";
const PoketCard : React.FC<{pokemon:any}> = ({pokemon}) => {

    // const handleCard = (name) => {
    //     window.location.href=`/pokemon/${name}`;
    // };

    const capitalizeFirstLetter = (name:string) => {
        // converting first letter to uppercase
        return name.charAt(0).toUpperCase() + name.slice(1);
    };

    return(
    <article className="content-card" 
    // onClick={()=>handleCard(name)}
    >
        <figure className="fig-card">
            <img src={pokemon.displayImage} alt="" className="img-card" />
       </figure>
            <div className="inf-card">
                <h2 className="inter-bold name-card">{capitalizeFirstLetter(pokemon.name)}</h2>
                <h3 className="inter-medium number-card">#{pokemon.id}</h3>
            </div>
        </article>
    )
}

export default PoketCard