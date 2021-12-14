package com.revature.project2.repository;

import java.util.List;

import com.revature.project2.entities.Course;
import com.revature.project2.entities.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {
    @Modifying
    @Query("update Course c set c.participants = :participants where c.course_id = :course_id")
    void updateParticipants(@Param(value="course_id") long id, @Param(value="participants") List<User> participants);
}
