package com.revature.project2.services;

import com.revature.project2.entities.Assignment;
import com.revature.project2.entities.Course;
import com.revature.project2.repository.AssignmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AssignmentServiceImpl implements AssignmentService {
    @Autowired
    private AssignmentRepository repository;

    @Override
    public Assignment addAssignment(Assignment assignment) {
        return repository.save(assignment);
    }

    @Override
    public List<Assignment> getAssignmentsByUser(long userId) {
        return repository.findAssignmentsByUser(userId);
    }

    @Override
    public List<Assignment> getAssignmentsByCourse(Course courseId) {
        return repository.findAssignmentsByCourse(courseId);
    }

    @Override
    public Assignment getAssignmentById(long id) {
        return repository.findById(id).get();
    }

    @Override
    public void deleteAssignment(long id) {
        repository.deleteById(id);
    }

    @Override
    public Assignment updateAssignment(long id, Assignment updateAssignment) {
        Assignment assignment = repository.findById(id).get();
        assignment.setAssignmentName(updateAssignment.getAssignmentName());
        assignment.setGrade(updateAssignment.getGrade());
        assignment.setStatus(updateAssignment.getStatus());
        return repository.save(assignment);
    }
}
