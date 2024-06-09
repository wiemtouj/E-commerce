package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Categorie;
import com.example.demo.services.CategorieService;

@CrossOrigin
@RestController
@RequestMapping("/api/categories")
public class CategorieController {
	
	 @Autowired
	 private CategorieService categorieService;
	 
	 @GetMapping
	 public List<Categorie> getAllCategories() {
	        return categorieService.findAll();
	 }
	 
	 @GetMapping("/{id}")
	    public Categorie getCategorieById(@PathVariable int id) {
	        return categorieService.findById(id);
	    }
	 
	 @PostMapping
	    public Categorie createCategorie(@RequestBody Categorie categorie) {
	        return categorieService.save(categorie);
	    }
	 
	 @PutMapping("/{id}")
	    public Categorie updateCategorie(@PathVariable int id, @RequestBody Categorie updatedCategorie) {
	        Categorie existingCategorie = categorieService.findById(id);
	        if (existingCategorie != null) {
	            existingCategorie.setNom(updatedCategorie.getNom());
	            existingCategorie.setDescription(updatedCategorie.getDescription());
	            return categorieService.save(existingCategorie);
	        }
	        return null;
	    }
	 

	    @DeleteMapping("/{id}")
	    public void deleteCategorie(@PathVariable int id) {
	        categorieService.deleteById(id);
	    }

}
