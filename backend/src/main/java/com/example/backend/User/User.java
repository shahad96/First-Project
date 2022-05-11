package com.example.backend.User;


import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String role;

    @Column(nullable = false)
    @Length(max = 50, min = 2)
    @NotBlank
    private String fullName;

    @Column(nullable = false, unique = true)
    @Length(max = 15, min = 2)
    @NotBlank
    private String username;

    @Column(nullable = false, unique = true)
    @Length(max = 150, min = 4)
    @Email
    @NotBlank
    private String email;

    private String password;

    private String status;

    public User() {
    }

    public User(Long id, String role, String fullName, String username, String email, String password, String status) {
        this.id = id;
        this.role = role;
        this.fullName = fullName;
        this.username = username;
        this.email = email;
        this.password = password;
        this.status = status;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
