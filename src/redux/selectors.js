export const selectCategories = (state) => state.pet.categories.all || [];
export const selectCategoriesLoading = (state) => state.pet.categories.isLoading;
export const selectCategoriesError = (state) => state.pet.categories.error;
export const selectCurrentCategory = (state) => state.pet.categories.current;

export const selectProducts = (state) => state.pet.products.all;
export const selectProductsLoading = (state) => state.pet.products.isLoading;
export const selectProductsError = (state) => state.pet.products.error;
export const selectProductByCategory = (state) => state.pet.products.byCategory;
export const selectCurrentProduct = (state) => state.pet.products.current;


export const selectCartItems = (state) => state.cart.items;
export const selectTotalQuantity = (state) => state.cart.totalQuantity;
export const selectTotalAmount = (state) => state.cart.totalAmount;

export const selectFilters = (state) => state.pet.filters;

export const selectFilteredProducts = (state) => {
  const { products, filters } = state.pet;
  let filtered = [...products.all]; 


  if (filters.priceRange.from) {
    filtered = filtered.filter(
      (p) => p.price >= Number(filters.priceRange.from)
    );
  }
  if (filters.priceRange.to) {
    filtered = filtered.filter((p) => p.price <= Number(filters.priceRange.to));
  }


  if (filters.discountedOnly) {
    filtered = filtered.filter((p) => p.discont_price);
  }


  switch (filters.sortBy) {
    case "price-high-low":
      filtered.sort(
        (a, b) => (b.discont_price || b.price) - (a.discont_price || a.price)
      );
      break;
    case "price-low-high":
      filtered.sort(
        (a, b) => (a.discont_price || a.price) - (b.discont_price || b.price)
      );
      break;
    default:
      break;
  }

  return filtered;
};
