# How to run GitHub Actions with a PostgreSQL data

[![NodeJS CI with PostgreSQL](https://github.com/codex-academy/github-actions-with-postgresql/actions/workflows/NodeMochaTestsWithPostgreSQL.yml/badge.svg)](https://github.com/codex-academy/github-actions-with-postgresql/actions/workflows/NodeMochaTestsWithPostgreSQL.yml)


Look at the [NodeMochaTestsWithPostgreSQL.yml](https://github.com/codex-academy/github-actions-with-postgresql/blob/main/.github/workflows/NodeMochaTestsWithPostgreSQL.yml) file to see the required configuration.


## Database script to run the tests locally

```
create database gh_actions_test;
create role gh login password 'gh123';
grant all privileges on database gh_actions_test to gh123;
```

Logged in as the `gh` user.

```
\i sql/users.sql
```
