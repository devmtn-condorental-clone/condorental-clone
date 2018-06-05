insert into users(username, auth_id, email, is_admin)

values($1, $2, $3, $4)

RETURNING *;