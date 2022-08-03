package com.revature.Project2.models;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "user")
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private int id;

    @Column(name = "firstname")
    private String firstName;

    @Column(name = "lastname")
    private String lastName;

    @Column(name = "username", unique = true)
    private String username;

    @ManyToOne(cascade = {CascadeType.ALL})
    @JoinColumn(name = "user_cart", referencedColumnName = "c_id")
    private Cart cart;

    public User(){
        super();
    }

    public User(int id, String firstName, String lastName, String username, Cart cart) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.cart = cart;
    }

    public User(String firstName, String lastName, String username, Cart cart) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.cart = cart;
    }
}
