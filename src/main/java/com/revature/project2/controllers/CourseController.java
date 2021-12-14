package com.revature.project2.controllers;

import com.revature.project2.entities.Course;
import com.revature.project2.entities.User;
import com.revature.project2.services.CourseServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class CourseController {
    @Autowired
    private CourseServiceImpl service;

    @GetMapping("/courses")
    public List<Course> getCourses(){
        return service.getAllCourses();
    }

    @GetMapping("/courses/{id}")
    public Course getCourseById(@PathVariable("id") int id){
        return service.getCourseById(id);
    }

    @PostMapping("/courses")
    public Course saveCourse(@RequestBody Course course){
        return service.addCourse(course);
    }

    @PutMapping("/courses/{id}")
    public String updateCourse(@PathVariable("id") int id, @RequestBody Course updateCourse){
        service.updateCourse(id, updateCourse);
        return "record updated successfully";
    }

    @PutMapping("/courses/addParticipant/{id}")
    public String addParticipant(@PathVariable("id") int id, @RequestBody User participant){
        service.addParticpant(id, participant);
        return "participant added successfully";
    }

    @DeleteMapping("/courses/{id}")
    public String deleteCourse(@PathVariable("id") int id){
        service.deleteCourse(id);
        return "record deleted successfully";
    }

}
