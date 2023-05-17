import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { FC, useState } from "react";
import { useAppDispatch } from "../../../hooks/useActions";
import { apiProducts } from "../../../store/api-products/apiProducts";
import { useResponsive } from "../../../utils/responsive/ResponsiveContext";
import AllProductsMobileFilter from "../all-products-mobile-filter/AllProductsMobileFilter";
import { ProductsFilterTitle } from "../AllProducts.styled";
import { labels } from "./allProducts.data";

const AllProductsFilter: FC = () => {
  const dispatch = useAppDispatch();
  const [selectedLabels, setSelectedLabels] = useState(labels);
  const { isSm } = useResponsive();

  const handleLabelChange = (labelId: number) => {
    const updatedLabels = selectedLabels.map((label) => {
      if (label.id === labelId) {
        return {
          ...label,
          selected: !label.selected,
        };
      }
      return label;
    });
    setSelectedLabels(updatedLabels);

    const selectedCategories = updatedLabels
      .filter((label) => label.selected)
      .map((label) => label.category);

    if (selectedCategories.length === 0) {
      dispatch(apiProducts([""]));
    } else {
      dispatch(apiProducts(selectedCategories));
    }
  };

  return (
    <>
      {isSm ? (
        <div>
          <div style={{ marginBottom: "48px" }}>
            <ProductsFilterTitle component="h3" variant="accent5">
              Product type
            </ProductsFilterTitle>
            <FormGroup>
              {selectedLabels.map((label) => (
                <FormControlLabel
                  key={label.id}
                  control={
                    <Checkbox
                      checked={label.selected}
                      onChange={() => handleLabelChange(label.id)}
                    />
                  }
                  label={label.label}
                />
              ))}
            </FormGroup>
          </div>
        </div>
      ) : (
        <AllProductsMobileFilter />
      )}
    </>
  );
};

export default AllProductsFilter;
