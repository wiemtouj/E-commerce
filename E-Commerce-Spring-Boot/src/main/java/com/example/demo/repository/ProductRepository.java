package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.example.demo.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Integer>{
	 List<Product> findByCategorie_Id(Long categoryId);

}
