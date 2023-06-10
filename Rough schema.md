TABLES USED:-

Student Table: This table stores information about students, including their unique identifiers, attendance count, and any other relevant details such as name, grade, etc.

id: A unique identifier for each student (primary key).
name: The name of the student.

Course table:
id: A unique identifier for each course (primary key).
name: The name of the course.

Attendence Table:
id: A unique identifier for each attendance record (primary key).
student_id: The identifier of the student associated with the attendance (foreign key referencing the Student table).
course_id: The identifier of the course associated with the attendance (foreign key referencing the Course table).
date: The date of the attendance.
status: The status of the attendance (e.g., "present," "absent," "late," etc.).
