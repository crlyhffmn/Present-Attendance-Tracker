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
        return repository.findById(id).get();
    }

    @Override
    public User getUserByEmail(String email) {
        return repository.findUserByEmail(email);
    }

    @Override
    public void deleteUser(long id) {
        repository.deleteById(id);
    }

    @Override
    public User updateUser(long id, User updateUser) {
        User user = repository.findById(id).get();
        user.setEmail(updateUser.getEmail());
        user.setPassword(updateUser.getPassword());
        user.setFirstName(updateUser.getFirstName());
        user.setLastName(updateUser.getLastName());
        return repository.save(user);
    }
}
