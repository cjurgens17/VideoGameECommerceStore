package com.revature.Project2.repos;


import com.revature.Project2.models.Cart;
import com.revature.Project2.models.Products;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public interface CartRepo extends JpaRepository<Cart, Integer> {

    @Modifying
    @Query(value = "UPDATE cart SET items=?1 WHERE cart_id=?2", nativeQuery = true)
    public Integer update(String items, int id);
}
