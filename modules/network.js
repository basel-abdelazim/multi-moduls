// network.js  
export async function fetchProducts() {  
    try {  
        const response = await fetch('https://fakestoreapi.com/products');  
        if (!response.ok) {  
            throw new Error('Network response was not ok');  
        }  
        const products = await response.json();  
        return products;  
    } catch (error) {  
        console.error('Failed to fetch products:', error);  
        return [];  
    }  
}