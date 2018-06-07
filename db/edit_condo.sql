UPDATE condos SET name = $2, price = $3, currency = $4, image = $5
WHERE id = $1;
SELECT * FROM condos;