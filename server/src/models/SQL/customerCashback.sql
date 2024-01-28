UPDATE "Users" AS u
SET balance = balance + 0.1 * holidays_order_amount
FROM (
  SELECT "userId", SUM(prize) AS holidays_order_amount
  FROM "Contests"
  WHERE "createdAt" BETWEEN '2023-12-15' AND '2024-01-14'
  GROUP BY "userId"
) AS user_orders
WHERE u.id = user_orders."userId"
AND u.role = 'customer';

