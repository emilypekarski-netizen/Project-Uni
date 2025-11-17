# Drain Adoption Application

A Spring Boot application for managing drain adoptions.

## Prerequisites

- Java 17 or higher
- Maven
- PostgreSQL database

## Setup

1. Create a PostgreSQL database named `drain_adoption`
2. Update the database configuration in `src/main/resources/application.properties` if needed
3. Build the project: `mvn clean install`
4. Run the application: `mvn spring-boot:run`

The application will start on `http://localhost:8080`

## Technologies Used
- Spring Boot 3.1.5
- Spring Web
- Spring Data JPA
- PostgreSQL
- Lombok
- Spring Boot DevTools