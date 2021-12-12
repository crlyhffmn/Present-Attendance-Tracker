package com.revature.project2.services;

import com.revature.project2.entities.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {
    User addUser(User user);
    List<User> getAllUsers();
    User getUserById(long id);
    User getUserByEmail(String email);
    void deleteUser(long id);
    User updateUser(long id, User user);
}
