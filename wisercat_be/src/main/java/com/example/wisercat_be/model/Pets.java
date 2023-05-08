package com.example.wisercat_be.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Pets {
    @Id
    @GeneratedValue
    Long id;
    String name;
    Long code;
    String type;
    String furcolor;
    String country;
}
