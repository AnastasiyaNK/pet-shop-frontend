export const selectCategories = (state) => state.pet.categories.all;
export const selectCategoriesLoading = (state) => state.pet.categories.isLoading;
export const selectCategoriesError = (state) => state.pet.categories.error;

export const selectProducts = (state) => state.pet.products.all;
export const selectProductsLoading = (state) => state.pet.products.isLoading;
export const selectProductsError = (state) => state.pet.products.error;
