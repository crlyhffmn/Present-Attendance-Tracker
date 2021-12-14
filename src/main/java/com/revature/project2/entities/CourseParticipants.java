package com.revature.project2.entities;

import javax.annotation.Generated;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class CourseParticipants {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "course_participants_id")
    private long id;
    
    @ManyToOne(cascade = CascadeType.MERGE, targetEntity = User.class)
    @JoinColumn(name="user_id", referencedColumnName = "user_id")
    private User participant_id;

    @ManyToOne(cascade = CascadeType.MERGE, targetEntity = Course.class)
    @JoinColumn(name="course_id", referencedColumnName = "course_id")
    private Course course_id;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public User getParticipant_id() {
        return participant_id;
    }

    public void setParticipant_id(User participant_id) {
        this.participant_id = participant_id;
    }

    public Course getCourse_id() {
        return course_id;
    }

    public void setCourse_id(Course course_id) {
        this.course_id = course_id;
    }

    @Override
    public String toString() {
        return "CourseParticipants [course_id=" + course_id + ", id=" + id + ", participant_id=" + participant_id + "]";
    }

    
    
}
