package com.revature.project2.controllers;

import com.revature.project2.entities.User;
import com.revature.project2.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class UserController {

    @Autowired
    private UserService service;

    @PostMapping("/users")
    public User saveUser(@RequestBody User user) {
        return service.addUser(user);
    }

    @GetMapping("/users")
    public List<User> getUsers() {
        return service.getAllUsers();
    }

    @GetMapping("/users/{id}")
    public User getUserById(@PathVariable("id") long id) {
        return service.getUserById(id);
    }

    @GetMapping("/users/{email}")
    public User getUserByEmail(@PathVariable("email") String email) {
        return service.getUserByEmail(email);
    }

    @DeleteMapping("/users/{id}")
    public String deleteUser(@PathVariable("id") long id) {
        service.deleteUser(id);
        return "record deleted successfully";
    }

    @PutMapping("users/{id}")
    public String updateUser(@PathVariable("id") long id, @RequestBody User updateUser) {
        service.updateUser(id, updateUser);
        return "record updated successfully";
    }
}
