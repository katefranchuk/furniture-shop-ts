import { FC } from "react";
import {
  PreviewBanner,
  PreviewHeading,
  PreviewDescription,
  PreviewLeft,
  PreviewRight,
  PreviewSection,
  PreviewContainer,
} from "./Preview.styled";
import chair from "../../assets/img/preview-images/chair.jpg";
import { useResponsive } from "../../utils/responsive/ResponsiveContext";
import ProductsLink from "../../ui/products-link/ProductsLink";

const Preview: FC = () => {
  const { isMd, isSm } = useResponsive();

  return (
    <PreviewSection>
      <PreviewContainer maxWidth={"lg"}>
        <PreviewBanner>
          <>
            {isSm ? (
              <PreviewLeft>
                <div>
                  <PreviewHeading variant="accent1" component="h1">
                    The furniture brand for the future, with timeless designs
                  </PreviewHeading>
                  <ProductsLink
                    to={"/products"}
                    isTransparent
                    isWhite
                    title={"View Collections"}
                  />
                </div>
                <PreviewDescription variant="text1" component="p">
                  A new era in eco friendly furniture with Avelon, the French
                  luxury retail brand with nice fonts, tasteful colors and a
                  beautiful way to display things digitally using modern web
                  technologies.
                </PreviewDescription>
              </PreviewLeft>
            ) : (
              <PreviewLeft>
                <div>
                  <PreviewHeading variant="accent1" component="h1">
                    The furniture brand for the future, with timeless designs
                  </PreviewHeading>
                  <PreviewDescription variant="text1" component="p">
                    A new era in eco friendly furniture with Avelon, the French
                    luxury retail brand with nice fonts, tasteful colors and a
                    beautiful way to display things digitally using modern web
                    technologies.
                  </PreviewDescription>
                  <ProductsLink
                    to={"/products"}
                    isTransparent
                    isWhite
                    title={"View Collections"}
                  />
                </div>
              </PreviewLeft>
            )}
          </>
          {isMd && (
            <PreviewRight>
              <img
                src={chair}
                alt="Chair"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </PreviewRight>
          )}
        </PreviewBanner>
      </PreviewContainer>
    </PreviewSection>
  );
};

export default Preview;
