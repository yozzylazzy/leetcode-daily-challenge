# Write your MySQL query statement below
SELECT a.id FROM weather a
WHERE temperature > (SELECT b.temperature FROM weather b
WHERE b.recordDate=a.recordDate-1)