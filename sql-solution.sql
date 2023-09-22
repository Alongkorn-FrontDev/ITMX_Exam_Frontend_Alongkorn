-- Answer #1
SELECT agents.*, SUM(orders.ORD_AMOUNT) as 'ORDER_AMOUNT' FROM agents INNER JOIN orders ON agents.AGENT_CODE = orders.AGENT_CODE GROUP BY orders.AGENT_CODE ORDER BY ORDER_AMOUNT DESC

-- Answer #2
SELECT customer.CUST_CODE, customer.CUST_NAME, SUM(orders.ORD_AMOUNT) as 'ORDER_AMOUNT' FROM customer INNER JOIN orders ON customer.CUST_CODE = orders.CUST_CODE GROUP BY customer.CUST_CODE, customer.CUST_NAME HAVING SUM(orders.ORD_AMOUNT) > 5000;

-- Answer #3
SELECT AGENT_CODE, COUNT(ORD_NUM) AS TotalOrders
FROM orders
WHERE YEAR(ORD_DATE) = 2008 AND MONTH(ORD_DATE) = 7
GROUP BY AGENT_CODE

