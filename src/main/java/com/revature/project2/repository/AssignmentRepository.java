package com.revature.project2.repository;

import com.revature.project2.entities.Assignment;
import com.revature.project2.entities.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AssignmentRepository extends JpaRepository<Assignment, Long> {
    @Query("select a from Assignment a where a.userId = ?1")
    List<Assignment> findAssignmentsByUser(long userId);

    @Query("select a from Assignment a where a.courseId = ?1")
    List<Assignment> findAssignmentsByCourse(Course courseId);
}
