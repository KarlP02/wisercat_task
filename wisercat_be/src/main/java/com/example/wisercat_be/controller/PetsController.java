package com.example.wisercat_be.controller;

import com.example.wisercat_be.model.Pets;
import com.example.wisercat_be.repository.PetsRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PetsController {
    @Autowired
    PetsRepository petsRepository;

    @GetMapping("pets")
    public List<Pets> getPets() { return petsRepository.findAll(); }

    @GetMapping("pets/{index}")
    public Pets getPets(@PathVariable Long index) { return petsRepository.findById(index).get(); }

    @DeleteMapping("pets/{index}")
    public List<Pets> deletePet(@PathVariable Long index) {
        petsRepository.deleteById(index);
        return petsRepository.findAll();
    }


    @PostMapping("pets")
    public void addPet(@RequestBody Pets pets) { petsRepository.save(pets); }

    @PutMapping("pets/{index}")
    public void editPet(@PathVariable Long index, @RequestBody Pets pets) throws EntityNotFoundException {
        Pets editable = petsRepository.findById(index).orElseThrow(() -> new EntityNotFoundException("No pet found"));
        editable.setName(pets.getName());
        editable.setCode(pets.getCode());
        editable.setType(pets.getType());
        editable.setFurcolor(pets.getFurcolor());
        editable.setCountry(pets.getCountry());

        petsRepository.save(editable);
    }
}
