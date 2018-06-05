insert into users(username, auth_id, email)

values($1, $2, $3)

RETURNING *;