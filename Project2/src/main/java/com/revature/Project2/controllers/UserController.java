package com.revature.Project2.controllers;

import com.revature.Project2.models.ClientMessage;
import com.revature.Project2.models.User;
import com.revature.Project2.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.revature.Project2.utils.ClientMessageUtils.*;

@CrossOrigin
@RestController
@RequestMapping("/app")
public class UserController {

    @Autowired
    private UserService userService;


    @PostMapping(value = "login", consumes = {MediaType.APPLICATION_JSON_VALUE})
    public User getByUsername(@RequestBody User user){
        System.out.println(user);
        String username = user.getUsername();
        String password= user.getPassword();
        System.out.println("This is the username" + username + "password: " + user.getPassword());
        return userService.getUserByUsername(username, password);


    @PostMapping(value = "/login", consumes = {MediaType.APPLICATION_JSON_VALUE})
    public User getUserByUsernamePassword(@RequestBody String username, String password)
            {
                    System.out.println("This is the username" + username + " with this password:" + password);
                    return userService.getUserByUsernamePassword(username,password);

            }







    @GetMapping("users")


    public List<User> getAll(){
        return userService.getAllUsers();
    }

    @PostMapping("/user")
    @ResponseStatus(HttpStatus.OK)
    public ClientMessage createUser(@RequestBody User user){
        return userService.createUser(user) ? CREATION_SUCCESSFUL : CREATION_FAILED;
    }

    @PutMapping("/user")
    public ClientMessage updateUser(@RequestBody User user){
        return userService.updateUser(user) >0? UPDATE_SUCCESSFUL : UPDATE_FAILED;

    }

    @DeleteMapping("/user")
    public ClientMessage deleteUser(@RequestBody User user){
        return userService.deleteUser(user) ? DELETION_SUCCESSFUL : DELETION_FAILED;
    }
}