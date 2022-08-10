package com.revature.Project2.controllers;

import com.revature.Project2.models.Cart;
import com.revature.Project2.models.ClientMessage;
import com.revature.Project2.services.CartService;
//import org.hibernate.mapping.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

//import java.util.List;

import java.util.List;

import static com.revature.Project2.utils.ClientMessageUtils.*;

@CrossOrigin(origins = {})
@RestController
@RequestMapping("/app")
public class CartController {

    @Autowired
    private CartService cartService;

    @GetMapping(value ="/cart", consumes = {MediaType.APPLICATION_JSON_VALUE})
    public @ResponseBody Cart getById(@RequestParam int id)  {

        return cartService.getCartById(id);
    }

    @GetMapping("/carts")
    public @ResponseBody List<Cart> getAll(){

        return cartService.getAllCart();
    }


    @PostMapping("createCart")
    public ClientMessage createCart(@RequestBody Cart cart){
        return cartService.createCart(cart) ? CREATION_SUCCESSFUL : CREATION_FAILED;
    }

    @PutMapping("/cart")
    public ClientMessage updateCart(@RequestBody Cart cart){
        return cartService.updateCart(cart) >0? UPDATE_SUCCESSFUL : UPDATE_FAILED;

    }

    @DeleteMapping("/cart")
    public ClientMessage deleteCart(@RequestBody Cart cart){
        return cartService.deleteCart(cart) ? DELETION_SUCCESSFUL : DELETION_FAILED;
    }
}
