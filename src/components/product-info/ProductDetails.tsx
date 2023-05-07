import { Container } from "@mui/material";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useActions";
import { IProduct } from "../../interface/iproduct.interface";
import {
  addItem,
  removeItem,
  selectCartItemById,
} from "../../store/slices/cartSlice";
import {
  addItems,
  removeItems,
  selectLikeItemById,
} from "../../store/slices/favouritesSlice";
import ButtonGray from "../../ui/button-gray/ButtonGray";
import ControlBtn from "../../ui/controls-btn/ControlBtn";
import {
  DetailsFooter,
  DetailsFotterButtonsBlock,
  DetailsInner,
  DetailsLeftColumn,
  DetailsProductText,
  DetailsProductTitle,
  DetailsRightColumn,
  DetailsSection,
} from "./ProductDetails.styed";

interface IProductDetailsProps {
  details: IProduct;
}

const ProductDetails: FC<IProductDetailsProps> = ({ details }) => {
  const dispatch = useAppDispatch();
  const likeItem = useAppSelector(selectLikeItemById(details.id));
  const isAddedLike = likeItem ? likeItem.count : 0;
  const cartItem = useAppSelector(selectCartItemById(details.id));
  const addedCount = cartItem ? cartItem.count : 0;

  const onClickLike = () => {
    const liked: IProduct = {
      ...details,
    };
    dispatch(addItems(liked));

    if (isAddedLike) {
      dispatch(removeItems(details.id));
    }
  };

  const onAddButtonClick = () => {
    const item: IProduct = {
      ...details,
    };
    dispatch(addItem(item));

    if (addedCount) {
      dispatch(removeItem(details.id));
    }
  };

  return (
    <DetailsSection>
      <Container maxWidth={"lg"}>
        <DetailsInner>
          <DetailsLeftColumn>
            <img src={details.image} alt="product" />
          </DetailsLeftColumn>
          <DetailsRightColumn>
            <div style={{ marginBottom: "52px" }}>
              <DetailsProductTitle variant="accent4" component="h2">
                {details.title}
              </DetailsProductTitle>
              <span>{details.price}</span>
            </div>
            <div style={{ marginBottom: "52px" }}>
              <DetailsProductText variant="text3" component="p">
                Product Description
              </DetailsProductText>
              <DetailsProductText variant="text3" component="p">
                {details.description}
              </DetailsProductText>
            </div>
            <DetailsFooter>
              <ControlBtn
                count={details.count}
                productId={details.id}
                onPlus={() => details.id}
                onMinus={() => details.id}
              />
              <DetailsFotterButtonsBlock>
                <ButtonGray
                  children={addedCount ? "In Cart" : "Add to Cart"}
                  isWhite
                  isBgDark
                  onClick={onAddButtonClick}
                />
                <ButtonGray
                  children={isAddedLike ? "In Favourite" : "Add to Favourite"}
                  onClick={onClickLike}
                />
              </DetailsFotterButtonsBlock>
            </DetailsFooter>
          </DetailsRightColumn>
        </DetailsInner>
      </Container>
    </DetailsSection>
  );
};

export default ProductDetails;
