package com.example.backend.User;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path="user")
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }


    @PostMapping("/post")
    public void addUser(@RequestBody User user){

        this.userService.addUser(user);

    }


    @GetMapping("/search/{key}")
    public List<User> searchUser(@PathVariable String key){

        return this.userService.searchUser(key);
    }


    @GetMapping("/getActive")
    public List<User> gtActiveUsers(){

        return this.userService.gtActiveUsers();
    }

    @GetMapping("/get")
    public List<User> gtAllUsers(){

        return this.userService.gtAllUsers();
    }

    @DeleteMapping("/delete/{id}")
    public List<User> deleteUser(@PathVariable String id){
       return this.userService.deleteUser(id);
    }

    @GetMapping("/{id}")
    public User getUser(@PathVariable String id){
        return this.userService.getUser(id);
    }
}
