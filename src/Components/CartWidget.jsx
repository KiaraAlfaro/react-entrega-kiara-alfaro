import React from "react";

import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";

import { useCartContext } from "../context/CartContext";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function CartWidget() {

  const {totalProducts} = useCartContext();
    return (

      <Link to='/Cart'>
        <IconButton aria-label="cart">
        <StyledBadge badgeContent={<span>{totalProducts() || '' }</span>} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
        </IconButton>
      </Link>
    );
  }