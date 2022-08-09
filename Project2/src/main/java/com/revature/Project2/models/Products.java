package com.revature.Project2.models;


import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "products")
@Data
public class Products implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
    private int productId;

    @Column(name = "product_name", unique = true)
    private String productName;

    @Column(name = "quantity")
    private int quantity;

    @Column(name = "price")
    private int price;

    @ManyToOne(cascade = {CascadeType.ALL})
    @JoinColumn(name = "products_cart", referencedColumnName = "cart_id")
    private Cart cart;



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

    public Products(int quantity, int productId) {
        this.productId = productId;
        this.quantity = quantity;
    }
}
