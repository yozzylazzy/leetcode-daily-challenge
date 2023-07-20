# Write your MySQL query statement below
SELECT s.*, q.subject_name, COUNT(e.subject_name) as attended_exams
FROM students s 
CROSS JOIN subjects q
LEFT JOIN examinations e ON (s.student_id = e.student_id) AND (q.subject_name = e.subject_name)
GROUP BY s.student_id, q.subject_name
ORDER BY s.student_id, q.subject_name