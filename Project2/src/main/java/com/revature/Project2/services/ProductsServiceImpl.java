package com.revature.Project2.services;


import com.revature.Project2.models.Products;
import com.revature.Project2.repos.ProductsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ProductsServiceImpl implements ProductsService {

    @Autowired
    private ProductsRepo productsRepo;

    @Autowired
    public ProductsServiceImpl(ProductsRepo productsRepo){
        this.productsRepo = productsRepo;
    }


    @Override
    public boolean createProducts(Products products) {
        int primaryKey = productsRepo.save(products).getProductId();

        return (primaryKey > 0) ? true : false;
    }

    @Override
    public Products getProductsById(int id) {
        return productsRepo.findbyId(id);
    }

    @Override
    public List<Products> getAllProducts() {

        return productsRepo.findAll();
    }

    @Override
    public int updateProducts(Products products) {
        return productsRepo.update(products.getQuantity()-1,products.getProductId());
    }

    @Override
    public int updateProductsDelete(Products products) {
        return  productsRepo.update(products.getQuantity()+1,products.getProductId());
    }

    @Override
    public boolean deleteProducts(Products products) {
        productsRepo.delete(products);
        return true;
    }
}
