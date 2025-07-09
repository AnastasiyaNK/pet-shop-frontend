import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { requeestCategoryAll, requeestCategoryById, requeestProductById, requeestProductsAll } from "../services/api";


export const fetchCategoriesAll = createAsyncThunk(
    'pet/categoriessAll',
    async (_, thunkApi) => {
        try {
            const categoriesAll = await requeestCategoryAll();
            return categoriesAll;
            
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
            
        }
    }
)

export const fetchCategoryById = createAsyncThunk(
  "pet/categoryById",
    async (categoryId, thunkApi) => {
        try {
            const categoryById = await requeestCategoryById(categoryId);
            return categoryById;
        
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        
      }
  }
);

export const fetchProductsAll = createAsyncThunk(
    'pet/productsAll',
    async (_, thunkApi) => {
        try {
            const productsAll = await requeestProductsAll()
            return productsAll;
            
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
            
        }
    }
)

export const fetchProductById = createAsyncThunk(
  "pet/productByAId",
  async (productId, thunkApi) => {
    try {
      const productByAId = await requeestProductById(productId);
      return productByAId;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);


const INITIAL_STATE = {
  categories: {
    all: [],
    current: null,
    isLoading: false,
    error: null,
  },
  products: {
    all: [],
    byCategory: [],
    current: null,
    isLoading: false,
    error: null,
  },
  filters: {
    priceRange: { from: '', to: '' },
    discountedOnly: false,
    sortBy: 'default'
  }
};



const petSlice = createSlice({
  name: "pet",
  initialState: INITIAL_STATE,
  reducers: {
    setPriceFilter: (state, action) => {
      state.filters.priceRange = action.payload;
    },
    setDiscountedFilter: (state, action) => {
      state.filters.discountedOnly = action.payload;
    },
    setSortFilter: (state, action) => {
      state.filters.sortBy = action.payload;
    },
     resetFilters: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoriesAll.pending, (state) => {
        state.categories.isLoading = true;
        state.categories.error = null;
      })
      .addCase(fetchCategoriesAll.fulfilled, (state, action) => {
        state.categories.isLoading = false;
        state.categories.all = action.payload;
      })
      .addCase(fetchCategoriesAll.rejected, (state, action) => {
        state.categories.isLoading = false;
        state.categories.error = action.payload;
      })

      // ---------- categoryById ---------- //

      .addCase(fetchCategoryById.pending, (state) => {
        state.categories.isLoading = true;
        state.products.isLoading = true;
        state.categories.error = null;
      })
      .addCase(fetchCategoryById.fulfilled, (state, action) => {
        state.categories.isLoading = false;
        state.products.isLoading = false;
        state.categories.current = action.payload.category;
        state.products.byCategory = action.payload.data;
      })
      .addCase(fetchCategoryById.rejected, (state, action) => {
        state.categories.isLoading = false;
        state.products.isLoading = false;
        state.categories.error = action.payload;
      })

      // ---------- productsAll ---------- //

      .addCase(fetchProductsAll.pending, (state) => {
        state.products.isLoading = true;
        state.products.error = null;
      })
      .addCase(fetchProductsAll.fulfilled, (state, action) => {
        state.categories.isLoading = false;
        state.products.all = action.payload;
      })
      .addCase(fetchProductsAll.rejected, (state, action) => {
        state.products.isLoading = false;
        state.products.error = action.payload;
      })
      // ---------- productById ---------- //

      .addCase(fetchProductById.pending, (state) => {
        state.products.isLoading = true;
        state.products.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
         state.products.isLoading = false;
        state.products.current = action.payload[0];
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.products.isLoading = false;
        state.products.error = action.payload;
      });
  },
});
export const {
  setPriceFilter,
  setDiscountedFilter,
  setSortFilter
} = petSlice.actions;
export const petReducer = petSlice.reducer;
