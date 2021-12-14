package com.revature.project2.repository;

import com.revature.project2.entities.Course;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {
    // @Modifying
    // @Query("update Course c set c.participants = ?2 where c.course_id = ?1")
    // void updateParticipants(long id, List<User> participants);
}
