package com.revature.Project2.controllers;

import com.revature.Project2.models.Cart;
import com.revature.Project2.models.ClientMessage;
import com.revature.Project2.services.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.revature.Project2.utils.ClientMessageUtils.*;

//CrossOrigin if CORS Exception
@RestController
@RequestMapping("app")
public class CartController {

    @Autowired
    private CartService cartService;

    @GetMapping(value ="/cart") //consumes = {MediaType.APPLICATION_JSON_VALUE})
    public Cart getById(@RequestParam int id) {

        return cartService.getCartById(id);
    }

    @GetMapping("carts")
    public List<Cart> getAll(){

        return cartService.getAllCarts();
    }

    @PostMapping("cart")
    @ResponseStatus(HttpStatus.I_AM_A_TEAPOT)
    public ClientMessage createCart(@RequestBody Cart cart){
        return cartService.createCart(cart) ? CREATION_SUCCESSFUL : CREATION_FAILED;
    }

    @PutMapping("cart")
    public ClientMessage updateCart(@RequestBody Cart cart){
        return cartService.updateCart(cart) >0? UPDATE_SUCCESSFUL : UPDATE_FAILED;

    }

    @DeleteMapping("cart")
    public ClientMessage deleteCart(@RequestBody Cart cart){
        return cartService.deleteCart(cart) ? DELETION_SUCCESSFUL : DELETION_FAILED;
    }
}
