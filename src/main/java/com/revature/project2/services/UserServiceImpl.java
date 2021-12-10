package com.revature.project2.services;

import com.revature.project2.entities.User;
import com.revature.project2.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository repository;

    @Override
    public User addUser(User user) {
        return repository.save(user);
    }

    @Override
    public List<User> getAllUsers() {
        return repository.findAll();
    }

    @Override
    public User getUserById(long id) {
        return repository.getById(id);
    }

    @Override
    public User getUserByUsername(String username) {
        return repository.findUserByUsername(username);
    }

    @Override
    public void deleteUser(long id) {
        repository.deleteById(id);
    }

    @Override
    public User updateUser(long id, User updateUser) {
        User user = repository.findById(id).get();
        user.setUsername(updateUser.getUsername());
        user.setPassword(updateUser.getPassword());
        user.setFirstName(updateUser.getFirstName());
        user.setLastName(updateUser.getLastName());
        return repository.save(user);
    }
}
