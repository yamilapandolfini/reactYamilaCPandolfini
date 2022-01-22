import React from 'react';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";

const CartWidget = () =>{

    return(
        <div>
            <Badge color="secondary" badgeContent={0}>
            <ShoppingCartIcon />{" "}
            </Badge>
        </div>
  );
    
}

export default CartWidget;