# Write your MySQL query statement below
SELECT p.product_id, ROUND((SUM(p.price*u.units)/SUM(u.units)),2) as average_price
FROM prices p JOIN unitssold u ON (p.product_id=u.product_id)
AND u.purchase_date BETWEEN p.start_date and p.end_date
GROUP BY p.product_id