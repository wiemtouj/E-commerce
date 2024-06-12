package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Categorie;
import com.example.demo.entity.Product;
import com.example.demo.repository.ProductRepository;

@Service
public class ProduitService {
	
	@Autowired
    private ProductRepository produitRepository;
	
	
	
	 public Product findById(int id) {
	        return produitRepository.findById(id).orElse(null);
	    }

	    public Product save(Product produit) {
	        return produitRepository.save(produit);
	    }

	    public void deleteById(int id) {
	        produitRepository.deleteById(id);
	    }
	    
	    public List<Product> getProductsByCategorie(Long categorieId) {
	        return produitRepository.findByCategorie_Id(categorieId);
	    }

	    public List<Product> getAllProducts() {
	        return produitRepository.findAll();
	    }
	    
	    

}
