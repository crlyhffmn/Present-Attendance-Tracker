package com.revature.project2.services;

import com.revature.project2.entities.Attendance;
import com.revature.project2.repository.AttendanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AttendanceServiceImpl implements AttendanceService{
    @Autowired
    private AttendanceRepository repository;


    @Override
    public Attendance addAttendance(Attendance attendance) {
        return repository.save(attendance);
    }

    @Override
    public List<Attendance> getAttendanceByUser(long userId) {
        return repository.findAttendanceByUser(userId);
    }

    @Override
    public Attendance getAttendanceById(long id) {
        return repository.findById(id).get();
    }

    @Override
    public void deleteAttendance(long id) {
        repository.deleteById(id);
    }

    @Override
    public Attendance updateAttendance(long id, Attendance attendance) {
        return null;
    }
}
