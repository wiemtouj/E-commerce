package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {"com.example.demo"})
public class ECommerceSpringBootApplication {

	public static void main(String[] args) {
		SpringApplication.run(ECommerceSpringBootApplication.class, args);
	}

}
