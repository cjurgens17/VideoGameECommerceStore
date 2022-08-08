package com.revature.Project2.services;

import com.revature.Project2.models.Cart;
import com.revature.Project2.repos.CartRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
@Transactional
public class CartServiceImpl implements CartService {

    @Autowired
    private CartRepo cartRepo;

    @Autowired
    public CartServiceImpl(CartRepo cartRepo){

        this.cartRepo = cartRepo;
    }

    @Override //list of products
    public boolean createCart(Cart cart) {
        int primaryKey = cartRepo.save(cart).getId();
        return (primaryKey > 0) ? true: false;
    }

    @Override
    public Cart getCartById(int id) {
        try{

            Optional<Cart> target = cartRepo.findById(id);
            Cart cart = target.get();
            return cart;

        }catch(NoSuchElementException e){

            //log the error
            System.out.println(e.getLocalizedMessage());

        }

        return null;

    }


    @Override
    public List<Cart> getAllCart() {
        return cartRepo.findAll();
    }

    @Override
    public Integer updateCart(Cart cart) {
        return cartRepo.update(cart.getItems(), cart.getId());
    }

    @Override
    public boolean deleteCart(Cart cart) {

        cartRepo.delete(cart);
        return true;
    }
}
