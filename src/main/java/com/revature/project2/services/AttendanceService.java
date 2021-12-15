package com.revature.project2.services;

import com.revature.project2.entities.Attendance;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface AttendanceService {
    Attendance addAttendance(Attendance attendance);
    List<Attendance> getAttendanceByUser(long userId);
    Attendance getAttendanceById(long id);
    void deleteAttendance(long id);
    Attendance updateAttendance(long id, Attendance attendance);
}
