import React from "react";
import css from "./Filter.module.css";
import { Checkbox, Col, Input, Row, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "../../redux/selectors";
import {
  setDiscountedFilter,
  setPriceFilter,
  setSortFilter,
} from "../../redux/petSlice";

const { Option } = Select;

const Filter = ({ withoutDiscount = false}) => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
 

  const handlePriceChange = (e, type) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    const newPriceRange = { ...filters.priceRange, [type]: value };
    dispatch(setPriceFilter(newPriceRange));
  };

  const handleDiscountedChange = (e) => {
    dispatch(setDiscountedFilter(e.target.checked));
  };

  const handleSortChange = (value) => {
    dispatch(setSortFilter(value));
  };

  return (
    <div className={css.filterSection}>
      <Row gutter={16} align="middle">
        <Col>
          <div className={css.filterGroup}>
            <label className={css.label}>Price</label>
            <div className={css.priceInputs}>
              <Input
                placeholder="from"
                value={filters.priceRange.from}
                onChange={(e) => handlePriceChange(e, "from")}
                style={{ width: 112 }}
              />

              <Input
                placeholder="to"
                value={filters.priceRange.to}
                onChange={(e) => handlePriceChange(e, "to")}
                style={{ width: 112 }}
              />
            </div>
          </div>
        </Col>
        {!withoutDiscount && (
          <Col>
            <div className={css.filterGroup}>
              <label className={css.label}>Discounted items</label>
              <Checkbox
                checked={filters.discountedOnly}
                onChange={handleDiscountedChange}
                className={css.customCheckbox}
              />
            </div>
          </Col>
        )}

        <Col>
          <div className={css.filterGroup}>
            <label className={css.label}>Sorted</label>
            <Select
              value={filters.sortBy}
              style={{ width: 180 }}
              onChange={handleSortChange}
            >
              <Option value="default">By default</Option>
              <Option value="price-high-low">Price: high-low</Option>
              <Option value="price-low-high">Price: low-high</Option>
            </Select>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Filter;
