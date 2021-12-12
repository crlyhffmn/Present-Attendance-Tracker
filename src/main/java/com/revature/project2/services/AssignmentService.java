package com.revature.project2.services;

import com.revature.project2.entities.Assignment;
import com.revature.project2.entities.Course;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface AssignmentService {
    Assignment addAssignment(Assignment assignment);
    List<Assignment> getAssignmentsByUser(long userId);
    List<Assignment> getAssignmentsByCourse(Course courseId);
    Assignment getAssignmentById(long id);
    void deleteAssignment(long id);
    Assignment updateAssignment(long id, Assignment assignment);
}
