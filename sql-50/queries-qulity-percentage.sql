# Write your MySQL query statement below
SELECT query_name, ROUND(AVG((rating/position)),2) as quality, ROUND(SUM(CASE WHEN rating < 3 then 1 else 0 END) * 100/COUNT(query_name),2) as poor_query_percentage
FROM queries
GROUP BY query_name