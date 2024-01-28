UPDATE "Users" AS u
SET balance = balance + 10
FROM (
  SELECT id
  FROM "Users"
  WHERE role = 'creator'
  ORDER BY rating DESC
  LIMIT 3
) AS top_creators
WHERE u.id = top_creators.id;