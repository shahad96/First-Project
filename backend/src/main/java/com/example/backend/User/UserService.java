package com.example.backend.User;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service
public class UserService implements UserDetailsService {

    private UserDao userDao;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserService(UserDao userDao, PasswordEncoder passwordEncoder) {
        this.userDao = userDao;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user= userDao.findByUsername(username);
        if(user == null){
            System.out.println("user does not exist");
            throw new UsernameNotFoundException("user does not exist");
        }
        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();

        authorities.add(new SimpleGrantedAuthority(user.getRole()));


        return new org.springframework.security.core.userdetails.User(user.getUsername(),user.getPassword(),authorities);
    }

    public void addUser(User user){

        if(this.userDao.findByUsername(user.getUsername()) == null){
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            this.userDao.save(user);}
    }

    public List<User> searchUser(String key){

        return this.userDao.findUserByFullNameOrUsernameOrEmail(key);
    }

    public List<User> gtActiveUsers(){

        return this.userDao.findActiveUser();
    }

    public List<User> gtAllUsers(){

        return this.userDao.findAll();
    }

    public  List<User> deleteUser(String id){

        Long user_id = Long.parseLong(id);
        User user = this.userDao.getById(user_id);
        user.setStatus("محذوف");
        this.userDao.save(user);

        return this.userDao.findAll();
    }

    public User getUser(String id){
        Long user_id = Long.parseLong(id);
        return this.userDao.getById(user_id);
    }
}
