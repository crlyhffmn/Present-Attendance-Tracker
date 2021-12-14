package com.revature.project2.services;

import java.util.List;

import com.revature.project2.entities.CourseParticipants;

import org.springframework.stereotype.Service;

@Service
public interface CourseParticipantsService {
    CourseParticipants addCourseParticipant(CourseParticipants participant);
    List<CourseParticipants> getAllCourseParticipants();
    List<CourseParticipants> getParticipantsByCourseId(long course_id);
    List<CourseParticipants> getCoursesByParticipantId(long participant_id);
    void deleteCourseParticipantEntry(long participant_id, long course_id);
    void deleteAllEntriesForOneCourse(long course_id);
    void deleteAllEntriesForOneUser(long participant_id);
}
