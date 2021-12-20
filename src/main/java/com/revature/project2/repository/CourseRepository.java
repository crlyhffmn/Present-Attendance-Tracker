package com.revature.project2.repository;

import com.revature.project2.entities.Course;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {
    // @Query("select c from Course c where c.users.user_id = ?1")
    // Course findCourseByInstructor(long instructorId);
}
