package com.revature.Project2.repos;

import com.revature.Project2.models.Products;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


@Repository
@Transactional
public interface ProductsRepo extends JpaRepository<Products, Integer> {

    @Modifying
    @Query(value = "UPDATE products SET quantity=?1 WHERE product_id=?2", nativeQuery = true)
    public int update(int quantity, int productId);



    @Query(value = "SELECT quantity FROM products WHERE product_id=?1", nativeQuery = true)
    public Products findbyId(int productId);




}
