package com.revature.project2.repository;

import com.revature.project2.entities.Assignment;
import com.revature.project2.entities.Attendance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AttendanceRepository extends JpaRepository<Attendance, Long> {
    @Query("select a from Attendance a where a.userId = ?1")
    List<Attendance> findAttendanceByUser(long userId);
}
