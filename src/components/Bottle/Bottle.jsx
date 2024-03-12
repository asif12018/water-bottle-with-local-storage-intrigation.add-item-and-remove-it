/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './Bottle.css'

const Bottle = ({bottle,key,handleAddTocart}) => {
    const {name, img, price} = bottle;
    return (
        <div className="bottle">
            <h3>this is single bottle:{name}</h3>
            <img src={img} alt="" />
            <p>pirce: {price}</p>
            <button onClick={()=>{handleAddTocart(bottle)}}>Purchase</button>
        </div>
    );
};

export default Bottle;