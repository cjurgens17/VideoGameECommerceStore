package com.revature.Project2.models;


import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "products")
@Data
public class Products {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
    private int productId;

    @Column(name = "product_name", unique = true)
    private String productName;

    @Column(name = "quantity")
    private int quantity;

    public Products(){
        super();
    }

    public Products(int productId, String productName, int quantity) {
        super();
        this.productId = productId;
        this.productName = productName;
        this.quantity = quantity;
    }

    public Products(String productName, int quantity) {
        this.productName = productName;
        this.quantity = quantity;
    }
}
