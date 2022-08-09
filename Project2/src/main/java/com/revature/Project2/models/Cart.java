package com.revature.Project2.models;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "cartz")
@Data
public class Cart {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cart_id")
    private int id;

    @Column(name = "items")
    private  String items;

    @Column(name = "itemnum")
    private int itemNum;

    @Column(name = "total")
    private int total;



    public Cart(){
        super();
    }

    public Cart(int id, String items, int itemNum, int total) {
        this.id = id;
        this.items = items;
        this.itemNum = itemNum;
        this.total = total;
    }

    public Cart(String items, int itemNum, int total) {
        this.items = items;
        this.itemNum = itemNum;
        this.total = total;
    }
}
