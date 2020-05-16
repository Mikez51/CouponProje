package com.proji;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:4200")
@SpringBootApplication
public class ProjiApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProjiApplication.class, args);
		System.out.println("b");
	

	}
}