# Products-API
[Link to deployment](https://products-api-production-7e40.up.railway.app/)

# Products API Documentation

Welcome to the Products API documentation. This API allows you to manage products in a database.

Base URL: `https://products-api-production-7e40.up.railway.app/`

## Endpoints

### 1. POST '/addproduct'
- **Purpose:** Adds a new product to the database.
- **Example:** 

### 2. GET '/getproducts'
- **Purpose:** Retrieves all products from the database.
- **Example:** `GET https://products-api-production-7e40.up.railway.app/getproducts`

### 3. PATCH '/updateproduct/:id'
- **Purpose:** Updates an existing product in the database based on its ID.
- **Example:** `PATCH https://products-api-production-7e40.up.railway.app/updateproduct/12345`

### 4. DELETE '/deleteproduct/:id'
- **Purpose:** Deletes a product from the database based on its ID.
- **Example:** `DELETE https://products-api-production-7e40.up.railway.app/deleteproduct/12345`

### 5. GET '/getfeatured'
- **Purpose:** Retrieves all featured products from the database.
- **Example:** `GET https://products-api-production-7e40.up.railway.app/getfeatured`

### 6. GET '/getfeatured/price/:pricelimit'
- **Purpose:** Retrieves featured products with prices less than a specified limit.
- **Example:** `GET https://products-api-production-7e40.up.railway.app/getfeatured/price/50`

### 7. GET '/getfeatured/rating/:ratinglimit'
- **Purpose:** Retrieves featured products with ratings greater than a specified limit.
- **Example:** `GET https://products-api-production-7e40.up.railway.app/getfeatured/rating/4.0`

