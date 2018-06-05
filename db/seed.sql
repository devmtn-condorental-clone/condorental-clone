create table condos(
    id serial primary key,
    name varchar(100),
    price real,
    currency varchar(5),
    image text
);

create table users(
    id serial primary key,
    username varchar(100),
    auth_id text,
    email varchar(100),
    is_admin boolean default false
);

insert into condos(name, price, currency, image)
values ('Garden Secret', 178, EUR, '../style/images/garden_secret_avatar.jpg'),
values ('Ortensia Love', 212, EUR, '../style/images/ortensia_love_avatar.jpg'),
values ('Precious Moments', 189, EUR, '../style/images/precious_moments_avatar.jpg'),
values ('Jasmin Lush', 212, EUR, '../style/images/jasmin_lush_avatar.jpg'),
values ('Lavander Touch', 212, EUR, '../style/images/lavendar_touch_avatar.jpg'),
values ('Touch of Infinity', 178, EUR, '../style/images/touch_of_infinity_avatar.jpg');

select * from condos;