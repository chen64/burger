create database burgers_db;
user database burgers_db;

create table burgers(
    id int auto_increment not null,
    burger_name varchar(255),
    devoured boolean not null,
    primary key(id)
);

insert into burgers (burger_name) values ('bacon burger');
insert into burgers (burger_name) values ('cheese burger');
insert into burgers (burger_name) values ('hamburger');