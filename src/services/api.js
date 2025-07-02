import axios from "axios";


export const petInstance = axios.create({
  baseURL: "http://localhost:3333",
});

export const requeestCategoryAll = async () => {
    const { data } = await petInstance.get("/categories/all");
    return data;
    
} 
export const requeestCategoryById = async categoryId => {
  const { data } = await petInstance.get(`/categories/${categoryId}`);
  return data;
}; 

export const requeestProductsAll = async () => {
    const { data } = await petInstance.get("/products/all");
    return data;

}
export const requeestProductById = async (productId) => {
  const { data } = await petInstance.get(`/products/${productId}`);
  return data;
};




// - Оформление заказа: `POST /order/send`
// - Оформление заявки на купон: `POST /sale/send`
