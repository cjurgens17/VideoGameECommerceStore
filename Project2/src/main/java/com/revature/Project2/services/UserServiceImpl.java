package com.revature.Project2.services;

import com.revature.Project2.models.User;
import com.revature.Project2.repos.CartRepo;
import com.revature.Project2.repos.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    public UserServiceImpl(UserRepo userRepo){
        this.userRepo = userRepo;
    }


    @Override
    public boolean createUser(User user) {
        int primaryKey = userRepo.save(user).getId();
        return (primaryKey > 0) ? true: false;
    }

    @Override
    public User getUserById(int id) {
        return userRepo.findById(id);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepo.findAll();
    }

    @Override
    public int updateUser(User user) {
        return userRepo.update(user.getUsername(), user.getId());
    }

    @Override
    public boolean deleteUser(User user) {
        userRepo.delete(user);
        return true;
    }
}
