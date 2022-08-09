package com.revature.Project2.services;

import com.revature.Project2.models.User;

import java.util.List;

public interface UserService {

    boolean createUser(User user);


    User getUserByUsername(String username, String password);


//    User getUserById(int id);

//    User getUserByUsername(String username);

//    User getUserByUsernamePassword(String username, String password);

    List<User> getAllUsers();


    int updateUser(User user);


    boolean deleteUser(User user);

    User getUserByUsernamePassword(String username, String password);
}