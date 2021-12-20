package com.revature.project2.entities;


import com.revature.project2.utilities.CompletionStatus;

import javax.persistence.*;

@Entity
public class Assignment {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private long userId;

    @ManyToOne(cascade = CascadeType.MERGE, targetEntity = Course.class)
    @JoinColumn(name = "course_id")
    private Course courseId;
    private String assignmentName;
    private double grade;
    private CompletionStatus status;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getAssignmentName() {
        return assignmentName;
    }

    public void setAssignmentName(String assignmentName) {
        this.assignmentName = assignmentName;
    }

    public double getGrade() {
        return grade;
    }

    public void setGrade(double grade) {
        this.grade = grade;
    }

    public CompletionStatus getStatus() {
        return status;
    }

    public void setStatus(CompletionStatus status) {
        this.status = status;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public Course getCourseId() {
        return courseId;
    }

    public void setCourseId(Course courseId) {
        this.courseId = courseId;
    }

    @Override
    public String toString() {
        return "Assignment{" +
                "id=" + id +
                ", assignmentName='" + assignmentName + '\'' +
                ", userID=" + userId +
                ", courseId=" + courseId +
                ", grade=" + grade +
                ", status=" + status +
                '}';
    }
}
