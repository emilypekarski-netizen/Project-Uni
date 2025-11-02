package com.example.drainadoption.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.drainadoption.model.Drain;

@Repository
public interface DrainRepository extends JpaRepository<Drain, Long> {
}