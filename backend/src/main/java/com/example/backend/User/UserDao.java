package com.example.backend.User;

import com.example.backend.Materials.Materials;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserDao extends JpaRepository<User, Long> {

// using query to search for user bu it`s name or username or email
    @Query(value ="SELECT * FROM users WHERE full_name LIKE %?1% or username LIKE %?1% or email LIKE %?1%" +
            " and status = 'active'"
            ,nativeQuery = true)
    public List<User> findUserByFullNameOrUsernameOrEmail(String key);


    @Query(value ="SELECT * FROM users WHERE status = 'active'"
            ,nativeQuery = true)
    public List<User> findActiveUser();

    public User findByUsername(String username);


}
