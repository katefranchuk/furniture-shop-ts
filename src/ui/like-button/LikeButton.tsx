import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useActions";
import { IProduct } from "../../interface/iproduct.interface";
import {
  addItems,
  removeItems,
  selectLikeItemById,
} from "../../store/slices/favouritesSlice";
import { AddToFavouriteBtnStyled } from "./LikeButton.styled";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface LikeButtnProps {
  product: IProduct;
  onClick?: (value: string) => void;
}

const LikeButton: FC<LikeButtnProps> = ({ product, onClick }) => {
  const dispatch = useAppDispatch();
  const likeItem = useAppSelector(selectLikeItemById(product.id));
  const isAddedLike = likeItem ? likeItem.count : 0;

  const onClickLike = () => {
    const liked: IProduct = {
      ...product,
    };
    dispatch(addItems(liked));

    if (isAddedLike) {
      dispatch(removeItems(product.id));
    }
  };

  return (
    <AddToFavouriteBtnStyled onClick={onClickLike}>
      {isAddedLike ? <AiFillHeart /> : <AiOutlineHeart />}
    </AddToFavouriteBtnStyled>
  );
};

export default LikeButton;
