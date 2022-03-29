package com.example.backend.Materials;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MaterialDao extends JpaRepository<Materials, Long> {
}
