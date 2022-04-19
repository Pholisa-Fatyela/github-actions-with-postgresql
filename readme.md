# How to run GitHub Actions with a PostgreSQL data


```
create database gh_actions_test;
create role gh login password 'gh123';
grant all privileges on database gh_actions_test to gh123;
```
