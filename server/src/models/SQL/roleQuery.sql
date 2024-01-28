
SELECT role, COUNT(*) AS role_count
FROM "Users"
GROUP BY role;