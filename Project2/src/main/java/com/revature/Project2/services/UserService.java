package com.revature.Project2.services;

import com.revature.Project2.models.User;

import java.util.List;

public interface UserService {

    boolean createUser(User user);


    User getUserById(int id);


    List<User> getAllUsers();


    int updateUser(User user);


    boolean deleteUser(User user);
}
