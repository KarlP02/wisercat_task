package com.example.wisercat_be.repository;

import com.example.wisercat_be.model.Pets;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PetsRepository extends JpaRepository<Pets, Long> {
}
