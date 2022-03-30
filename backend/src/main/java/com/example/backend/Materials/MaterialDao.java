package com.example.backend.Materials;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

// Materials repository
@Repository
public interface MaterialDao extends JpaRepository<Materials, Long> {

//    using query to find materials that have part of the string title on it`s title
    @Query(value ="SELECT * FROM materials WHERE title LIKE %?1%",nativeQuery = true)
    public List<Materials> findMaterialsByTitle(String title);
}
