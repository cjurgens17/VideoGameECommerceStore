package com.revature.Project2.services;

import com.revature.Project2.models.User;
import com.revature.Project2.repos.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Service
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    public UserServiceImpl(UserRepo userRepo) {
        this.userRepo = userRepo;
    }


    @Override
    public boolean createUser(User user) {
        int primaryKey = userRepo.save(user).getId();
        return (primaryKey > 0) ? true : false;
    }


    @Override
    public User getUserByUsernamePassword(String username, String password) {
        System.out.println("Look Here: " + username + " with a password of:" + password);
        return userRepo.findByUsername(username, password);
    }


    @Override
    public User getUserByUsername(String username, String password) {
        System.out.println("Look Here: " + username);
        return userRepo.findByUsername(username, password);

    }

//    @Override
//    public User getUserById(int id) {
//        return null;
//    }

//    @Override
//    public User getUserById(String username) {
//        return userRepo.findByUsername(username);
//    }

    @Override
    public List<User> getAllUsers() {
        return userRepo.findAll();
    }

    @Override
    public int updateUser(User user) {
            return userRepo.update(user.getFirstName(), user.getLastName(), user.getUsername(), user.getPassword(), user.getId());
        }

        @Override
        public boolean deleteUser (User user){
            userRepo.delete(user);
            return true;
        }

    }


