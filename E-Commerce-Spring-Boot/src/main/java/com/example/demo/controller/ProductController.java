package com.example.demo.controller;

import java.util.List;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Product;
import com.example.demo.repository.ProductRepository;
import com.example.demo.services.ProduitService;

@CrossOrigin
@RestController 
@RequestMapping("/api/products")
public class ProductController {
	
    private static final Logger logger = Logger.getLogger(ProductController.class.getName());

	
	 @Autowired
	    private ProduitService produitService;

	 

	    @GetMapping("/{id}")
	    public Product getProduitById(@PathVariable int id) {
	        return produitService.findById(id);
	    }

	    @PostMapping
	    public Product createProduit(@RequestBody Product produit) {
	        return produitService.save(produit);
	    }

	    @PutMapping("/{id}")
	    public Product updateProduit(@PathVariable int id, @RequestBody Product updatedProduit) {
	        Product existingProduit = produitService.findById(id);
	        if (existingProduit != null) {
	            existingProduit.setNom(updatedProduit.getNom());
	            existingProduit.setDescription(updatedProduit.getDescription());
	            existingProduit.setPrix(updatedProduit.getPrix());
	            existingProduit.setCategorie(updatedProduit.getCategorie());
	            return produitService.save(existingProduit);
	        }
	        return null;
	    }

	    @DeleteMapping("/{id}")
	    public void deleteProduit(@PathVariable int id) {
	        produitService.deleteById(id);
	    }
	    
	    @GetMapping
	    public List<Product> getProductsByCategorie(@RequestParam(name = "categorieId", required = false) Long categorieId ) {
	        logger.info("Received categoryId: " + categorieId);
	        
	            return produitService.getProductsByCategorie(categorieId);
	        
	    }
	    
	 
}
