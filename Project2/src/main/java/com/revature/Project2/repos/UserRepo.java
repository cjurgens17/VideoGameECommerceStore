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
    @Query(value = "UPDATE userz SET username=?1 WHERE user_id=?2", nativeQuery = true)
    public int update(String username, int id);

    @Query(value = "SELECT * FROM userz WHERE username=?1", nativeQuery = true)
    public User findByUsername(String username);




}
