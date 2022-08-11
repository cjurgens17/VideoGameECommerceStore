package com.revature.Project2.controllers;


import com.revature.Project2.models.ClientMessage;
import com.revature.Project2.models.Products;
import com.revature.Project2.services.ProductsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.revature.Project2.utils.ClientMessageUtils.*;
@CrossOrigin(origins = {})
@RestController
@RequestMapping("/app")
public class ProductsController {

    @Autowired
    private ProductsService productsService;


    @GetMapping("product")
    public Products getById(@RequestParam int id) {
        return productsService.getProductsById(id);
    }

    @GetMapping("products")
    public List<Products> getAll(){

        return productsService.getAllProducts();
    }

    @PostMapping("product")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public ClientMessage createProducts(@RequestBody Products products){
        return productsService.createProducts(products) ? CREATION_SUCCESSFUL : CREATION_FAILED;
    }

    @PutMapping("product")
    public ClientMessage updateProducts(@RequestBody Products products){
        int quantity = products.getQuantity();
        int productId = products.getProductId();
        System.out.println("The quantity is: " + quantity);
        System.out.println("The id is: " + productId);
        return productsService.updateProducts(products) >0? UPDATE_SUCCESSFUL : UPDATE_FAILED;

    }

    @PutMapping("productDelete")
    public ClientMessage updateProductsDelete(@RequestBody Products products){
        int quantity = products.getQuantity();
        int productId = products.getProductId();
        System.out.println("The quantity is: " + quantity);
        System.out.println("The id is: " + productId);
        return productsService.updateProductsDelete(products) >0? UPDATE_SUCCESSFUL : UPDATE_FAILED;

    }

    @DeleteMapping("product")
    public ClientMessage deleteProducts(@RequestBody Products products){
        return productsService.deleteProducts(products) ? DELETION_SUCCESSFUL : DELETION_FAILED;
    }


}
