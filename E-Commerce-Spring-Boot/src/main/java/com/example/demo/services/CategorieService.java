package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Categorie;
import com.example.demo.repository.CategorieRepository;

@Service
public class CategorieService {
	
	 @Autowired
	 private CategorieRepository categorieRepository;
	 
	  public List<Categorie> findAll() {
	        return categorieRepository.findAll();
	  }
	  
	  public Categorie findById(int id) {
	        return categorieRepository.findById(id).orElse(null);
	  }

}
