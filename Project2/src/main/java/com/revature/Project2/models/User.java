package com.revature.Project2.models;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "userz")
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

    @Column(name = "username", columnDefinition = "VARCHAR(15) UNIQUE NOT NULL")
    private String username;

    @Column(name = "pass_word", nullable = false)
    private String password;

    @OneToOne(cascade = {CascadeType.ALL})
    @JoinColumn(name = "user_cart", referencedColumnName = "cart_id")
    private Cart cart;

    public User(){

        super();
    }


    public User(int id, String firstName, String lastName, String username, Cart cart, String password) {

        super();
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
        this.cart = cart;
        this.password = password;
    }


    public User(String firstName, String lastName, String username, Cart cart, String password) {

        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
        this.cart = cart;
        this.password = password;
    }

    public User(String username, String password) {
        super();
        this.username = username;
        this.password = password;
    }




}
