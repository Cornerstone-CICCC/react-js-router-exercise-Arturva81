[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/U_-0W4mm)
# React JS - Router Exercise

**Goal:** To understand how to create and use routes in React.

## Instructions

1. Set up your React project by running `npm create vite@latest route-practice`.
2. Install the React Router DOM package by running `npm i react-router-dom`.
3. Create these routes and pages:

    - Home `/`
    - About `about`
    - Contact `contact-us`

4. Create routes and pages for products:

    - ProductsLayout `products` *(outlet)*
        - ProductsList *(index)*
        - ProductDetail `:id`
  
5. Pull and display the product data from [https://dummyjson.com/products](https://dummyjson.com/products) for the product list. You can choose which properties to show. Make each product clickable so that they redirect to the product detail page. E.g. `/products/1`

6. On the product detail page, extract the `id` using `useParams()` hook and retrieve the specific product information using a `useEffect` from [https://dummyjson.com/products/1](https://dummyjson.com/products/1) where **1** is the dynamic id. Display whatever properties you'd like to show on the page.

7. Create a 404 page for your React app so that if a user tries to access an invalid route, they will get a not found error.
