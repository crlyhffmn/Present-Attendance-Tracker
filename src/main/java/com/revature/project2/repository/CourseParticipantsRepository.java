package com.revature.project2.repository;

import java.util.List;

import com.revature.project2.entities.Course;
import com.revature.project2.entities.CourseParticipants;
import com.revature.project2.entities.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseParticipantsRepository extends JpaRepository<CourseParticipants, Long> {
    @Query("select cp from CourseParticipants cp where cp.course_id = ?1")
    List<CourseParticipants> findParticipantsByCourseId(long course_id);

    @Query("select cp from CourseParticipants cp where cp.participant_id = ?1")
    List<CourseParticipants> findCoursesByParticipantId(long participant_id);

    @Query("delete from CourseParticipants cp where cp.participant_id = ?1 and cp.course_id = ?2")
    void deleteCourseParticipantEntry(long participant_id, long course_id);

    @Query("delete from CourseParticipants cp where cp.course_id = ?1")
    void deleteAllCourseParticipants(long course_id);

    @Query("delete from CourseParticipants cp where cp.participant_id = ?1")
    void deleteAllEntriesForParticipant(long participant_id);
}
