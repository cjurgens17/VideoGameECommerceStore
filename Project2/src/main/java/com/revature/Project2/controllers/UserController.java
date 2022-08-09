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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    @PostMapping(value = "login", consumes = {MediaType.APPLICATION_JSON_VALUE})
    public User getByUsernamePass(@RequestBody String username, String password){
        System.out.println("This is the username" + username);
        return userService.getUserByUsernamePass(username);
>>>>>>> 2a261e916f258641b2bdd4f2d786aeb00f20ca77
=======
>>>>>>> 75390e01887831b23e35951f72bd22dab039416b
=======
>>>>>>> 75390e01887831b23e35951f72bd22dab039416b

    @PostMapping(value = "/login", consumes = {MediaType.APPLICATION_JSON_VALUE})
    public User getUserByUsername(@RequestBody String username)
            {
                 System.out.println("This is the username" + username );
                 return userService.getUserByUsername(username);


            }



    @GetMapping("/users")
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