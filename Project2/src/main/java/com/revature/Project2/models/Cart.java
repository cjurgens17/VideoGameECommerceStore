package com.revature.Project2.models;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "cartz")
@Data
public class Cart {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cart_id")
    private int id;

    @Column(name = "items")
    private String items;

    @Column(name = "itemnum")
    private int itemNum;

    public Cart(){
        super();
    }

    public Cart(int id, String items, int itemNum) {
        this.id = id;
        this.items = items;
        this.itemNum = itemNum;
    }

    public Cart(String items, int itemNum) {
        this.items = items;
        this.itemNum = itemNum;
    }
}
