package com.revature.project2.services;

import com.revature.project2.entities.Course;
import com.revature.project2.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseServiceImpl implements CourseService{
    @Autowired
    private CourseRepository repository;

    @Override
    public Course addCourse(Course course) {
        return repository.save(course);
    }

    @Override
    public List<Course> getAllCourses() {
        return repository.findAll();
    }

    @Override
    public Course getCourseById(long id) {
        return repository.findById(id).get();
    }

    @Override
    public Course updateCourse(long id, Course updateCourse) {
        Course course = repository.findById(id).get();
        course.setCourseName(updateCourse.getCourseName());
        //course.setDays(updateCourse.getDays());
        course.setEndDate(updateCourse.getEndDate());
        course.setEndTime(updateCourse.getEndTime());
        course.setStartDate(updateCourse.getStartDate());
        course.setStartTime(updateCourse.getStartTime());
        course.setParticipants(updateCourse.getParticipants());
        return repository.save(course);
    }

    @Override
    public void deleteCourse(long id) {
        repository.deleteById(id);
    }
}
