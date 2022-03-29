package com.example.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.time.LocalDate;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		LocalDate date = LocalDate.now();
		System.out.println(date);
		SpringApplication.run(BackendApplication.class, args);
	}

}
