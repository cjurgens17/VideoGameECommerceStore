package com.revature.Project2.services;

import com.revature.Project2.models.User;

import java.util.List;

public interface UserService {

    boolean createUser(User user);


    User getUserByUsername(String username);


//    User getUserById(int id);

//    User getUserById(String username);

    List<User> getAllUsers();


    int updateUser(User user);


    boolean deleteUser(User user);
}
