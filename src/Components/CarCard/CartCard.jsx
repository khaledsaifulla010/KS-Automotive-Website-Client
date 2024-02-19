

const CartCard = ({brandCar}) => {
    const {img,model,price,rating} = brandCar;
    return (
        <div>
            <h1>{model}</h1>
        </div>
    );
};

export default CartCard;