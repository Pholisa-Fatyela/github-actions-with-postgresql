# How to run GitHub Actions with a PostgreSQL data

[![Node.js CI](https://github.com/codex-academy/github-actions-with-postgresql/actions/workflows/node.js.yml/badge.svg)](https://github.com/codex-academy/github-actions-with-postgresql/actions/workflows/node.js.yml)




```
create database gh_actions_test;
create role gh login password 'gh123';
grant all privileges on database gh_actions_test to gh123;
```
