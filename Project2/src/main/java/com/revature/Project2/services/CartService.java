package com.revature.Project2.services;

import com.revature.Project2.models.Cart;

import java.util.List;

public interface CartService {


    boolean createCart(Cart cart);


    Cart getCartById(int id);


    List<Cart> getAllCart();


    Integer updateCart(Cart cart);


    boolean deleteCart(Cart cart);
}
