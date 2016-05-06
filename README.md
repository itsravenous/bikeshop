# The Bikeshop
Demonstration of exposing Sequelize models over a REST api.

## Quickstart
```bash
# Fetch, build and start app & db containers
docker-compose up
# Migrate the db
docker exec bikeshop_app_1 sequelize db:migrate
# Seed some bikes
docker exec bikeshop_app_1 sequelize db:seed:all
# Test the api!
curl http://localhost:3000/api/bikes
```
