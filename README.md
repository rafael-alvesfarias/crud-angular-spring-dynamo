# CRUD-ANGULAR-SPRING-DYNAMO

CRUD simples utilizando Angular 10 como frontend, Spring Boot e AWS DynamoDB como backend.

## Build

Requisitos: docker, docker-compose e aws-cli

para build Local com Localstack execute os seguintes comandos:
 `
 docker-compose build
 
 docker-compose up
 
 aws --endpoint-url=http://localhost:4566 s3 mb s3://crud-dynamodb-backend
 
 aws --endpoint-url=http://localhost:4566 s3 mb s3://crud-dynamodb-frontend
 
 aws dynamodb create-table --cli-input-json file://crud-dynamodb/migration/customer_table.json --endpoint-url=http://localhost:4566
 
 `
 em seguida acesse o endpoint: http://localhost:9081
 
 
OBS: para deploy do front no S3 da AWS executar os sequintes comandos na pasta angular-frontend:

npm run build

aws s3 sync dist/angular-frontend/ s3://crud-dynamodb-frontend

aws s3api put-bucket-policy --bucket crud-dynamodb-frontend --policy file://aws/bucket_policy.json

aws s3 website s3://crud-dynamodb-frontend --index-document index.html



