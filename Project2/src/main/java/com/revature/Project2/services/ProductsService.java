package com.revature.Project2.services;

import com.revature.Project2.models.Products;

import java.util.List;

public interface ProductsService {

    boolean createProducts(Products products);

    Products getProductsById(int id);

    List<Products> getAllProducts();

    int updateProducts(Products products);

    boolean deleteProducts(Products products);
}
