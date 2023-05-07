import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useAppDispatch } from "../../../hooks/useActions";
import { apiProducts } from "../../../store/api-products/apiProducts";
import { labels } from "../all-products-filter/allProducts.data";
import { AllProductsMobileFilterWrapper } from "./AllProductsMobileFilter.styled";

const AllProductsMobileFilter: FC = () => {
  const dispatch = useAppDispatch();
  const [selectedLabels, setSelectedLabels] = useState(labels);

  const handleLabelChange = (selectedLabel: string) => {
    const updatedLabels = labels.map((label) => {
      if (label.label === selectedLabel) {
        return {
          ...label,
          selected: true,
        };
      } else {
        return {
          ...label,
          selected: false,
        };
      }
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

  useEffect(() => {
    setSelectedLabels(labels);
  }, [selectedLabels]);

  return (
    <AllProductsMobileFilterWrapper>
      <FormControl sx={{ m: 1, width: "100%" }} size="small">
        <InputLabel>Categories</InputLabel>
        <Select>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {labels.map((label) => (
            <MenuItem
              key={label.id}
              value={label.label}
              onClick={() => handleLabelChange(label.label)}
            >
              {label.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, width: "100%" }} size="small">
        <InputLabel>Price</InputLabel>
        <Select>
          <MenuItem>Thirty</MenuItem>
        </Select>
      </FormControl>
    </AllProductsMobileFilterWrapper>
  );
};

export default AllProductsMobileFilter;
