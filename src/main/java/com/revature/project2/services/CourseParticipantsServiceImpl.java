package com.revature.project2.services;

import java.util.List;

import com.revature.project2.entities.CourseParticipants;
import com.revature.project2.repository.CourseParticipantsRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CourseParticipantsServiceImpl implements CourseParticipantsService{

    @Autowired
    private CourseParticipantsRepository repository;
    
    @Override
    public CourseParticipants addCourseParticipant(CourseParticipants participant) {
        return repository.save(participant);
    }

    @Override
    public List<CourseParticipants> getAllCourseParticipants() {
        return repository.findAll();
    }

    @Override
    public List<CourseParticipants> getParticipantsByCourseId(long course_id) {
        return repository.findParticipantsByCourseId(course_id);
    }

    @Override
    public List<CourseParticipants> getCoursesByParticipantId(long participant_id) {
        return repository.findCoursesByParticipantId(participant_id);
    }

    @Override
    public void deleteCourseParticipantEntry(long participant_id, long course_id) {
        repository.deleteCourseParticipantEntry(participant_id, course_id);        
    }

    @Override
    public void deleteAllEntriesForOneCourse(long course_id) {
        repository.deleteAllCourseParticipants(course_id);
    }

    @Override
    public void deleteAllEntriesForOneUser(long participant_id) {
        repository.deleteAllEntriesForParticipant(participant_id);        
    }
    
}
