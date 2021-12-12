package com.revature.project2.services;

import com.revature.project2.entities.Course;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CourseService {
    Course addCourse(Course course);
    List<Course> getAllCourses();
    Course getCourseById(long id);
    Course updateCourse(long id, Course course);
    void deleteCourse(long id);
}
