package com.revature.project2.controllers;

import com.revature.project2.entities.Assignment;
import com.revature.project2.services.AssignmentServiceImpl;
import com.revature.project2.services.CourseServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class AssignmentController {

    @Autowired
    private AssignmentServiceImpl service;

    @Autowired
    CourseServiceImpl courseService;

    @GetMapping("/assignments/u/{id}")
    public List<Assignment> getAssignmentsByUser(@PathVariable("id") long id){
        return service.getAssignmentsByUser(id);
    }

    @GetMapping("/assignments/c/{id}")
    public List<Assignment> getAssignmentsByCourse(@PathVariable("id") long id){
        return service.getAssignmentsByCourse(courseService.getCourseById(id));
    }

    @PostMapping("/assignments")
    public Assignment saveAssignment(@RequestBody Assignment assignment){
        return service.addAssignment(assignment);
    }

    @PutMapping("/assignments/{id}")
        public String updateAssignment(@PathVariable("id") long id, @RequestBody Assignment updateAssignment){
        service.updateAssignment(id, updateAssignment);
        return "assignment updates successfully";
    }

    @DeleteMapping("assignments/{id}")
    public String deleteAssignment(@PathVariable("id") long id){
        service.deleteAssignment(id);
        return "assignment successfully deleted";
    }

}
