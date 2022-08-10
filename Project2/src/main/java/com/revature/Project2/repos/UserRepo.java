package com.revature.Project2.repos;

import com.revature.Project2.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public interface UserRepo extends JpaRepository<User, Integer> {

    @Modifying
    @Query(value = "UPDATE userz SET firstname=?1, lastname=?2, username=?3, pass_word=?4 WHERE user_id=?5", nativeQuery = true)
    public int update(String firstname, String lastname, String username, String password, int id);



    @Query(value = "SELECT * FROM userz WHERE username=?1 AND pass_word=?2", nativeQuery = true)
    public User findByUsername(String username, String password);


    @Query(value = "SELECT * FROM userz WHERE username=?1 AND pass_word=?2", nativeQuery = true)
    public User findByUsernamePassword(String username, String password);




}
