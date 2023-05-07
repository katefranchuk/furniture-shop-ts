import { FC } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/useActions";
import { IProduct } from "../../interface/iproduct.interface";
import {
  addItem,
  removeItem,
  selectCartItemById,
} from "../../store/slices/cartSlice";
import ButtonGray from "../button-gray/ButtonGray";
import LikeButton from "../like-button/LikeButton";
import {
  Card,
  CardBottom,
  CardHeading,
  CardImageBlock,
} from "./ProductItem.styled";

interface IProductItem {
  product: IProduct;
}

const ProductItem: FC<IProductItem> = ({ product }) => {
  const dispatch = useAppDispatch();
  const cartItem = useAppSelector(selectCartItemById(product.id));
  const addedCount = cartItem ? cartItem.count : 0;

  const onAddButtonClick = () => {
    const item: IProduct = {
      ...product,
    };
    dispatch(addItem(item));

    if (addedCount) {
      dispatch(removeItem(product.id));
    }
  };

  return (
    <Card>
      <CardImageBlock>
        <LikeButton product={product} />
        <img src={product.image} alt="product" />
      </CardImageBlock>
      <Link to={`/info/${product.id}`}>
        <CardHeading variant="accent5" component="h4">
          {product.title}
        </CardHeading>
      </Link>
      <CardBottom>
        <span>£{product.price}</span>
        <ButtonGray
          children={addedCount ? "In Cart" : "Add to cart"}
          onClick={onAddButtonClick}
        />
      </CardBottom>
    </Card>
  );
};

export default ProductItem;
