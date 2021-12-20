package com.revature.project2.controllers;

import com.revature.project2.entities.Attendance;
import com.revature.project2.entities.Course;
import com.revature.project2.entities.CourseParticipants;
import com.revature.project2.entities.User;
import com.revature.project2.services.AttendanceServiceImpl;
import com.revature.project2.services.CourseParticipantsServiceImpl;
import com.revature.project2.services.CourseServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class CourseController {
    @Autowired
    private CourseServiceImpl service;

    @Autowired
    CourseParticipantsServiceImpl participantsService;

    @Autowired
    AttendanceServiceImpl attendanceService;

    @GetMapping("/courses")
    public List<Course> getCourses(){
        return service.getAllCourses();
    }

    @GetMapping("/participant_course")
    public List<CourseParticipants> getCourseParticipants(){
        return participantsService.getAllCourseParticipants();
    }

    @GetMapping("/courses/id/{id}")
    public Course getCourseById(@PathVariable("id") long id){
        return service.getCourseById(id);
    }

    @PostMapping("/courses")
    public Course saveCourse(@RequestBody Course course){
        return service.addCourse(course);
    }

    @PutMapping("/courses/update/{id}")
    public String updateCourse(@PathVariable("id") long id, @RequestBody Course updateCourse){
        service.updateCourse(id, updateCourse);
        return "record updated successfully";
    }

    @PutMapping("/courses/addParticipant/{id}")
    public String addParticipant(@PathVariable("id") long id, @RequestBody User participant){
        System.out.println("adding participant w/ id: " + id);
        //service.addParticpant(id, participant);
        CourseParticipants cp = new CourseParticipants();
        cp.setCourse_id(service.getCourseById(id));
        cp.setParticipant_id(participant);
        participantsService.addCourseParticipant(cp);
        return "participant added successfully";
    }

    @DeleteMapping("/courses/{id}")
    public String deleteCourse(@PathVariable("id") long id){
        service.deleteCourse(id);
        return "record deleted successfully";
    }

    @GetMapping("/courses/attendance/{id}")
    public List<Attendance> getAttendanceByUSerId(@PathVariable("id") long id){
        return attendanceService.getAttendanceByUser(id);
    }

    @PostMapping("/courses/attendance")
    public Attendance saveAttendance(@RequestBody Attendance attendance){
        return attendanceService.addAttendance(attendance);
    }

    // @GetMapping("/courses/instructor/{instructorId}")
    // public Course getCourseByInstructor(@PathVariable("instructorId") long instructorId) {
    //     return service.getCourseByInstructor(instructorId);
    // }

}
