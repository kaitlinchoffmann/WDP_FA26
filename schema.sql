/*WDP In-Class Demo: From Relations to MySQL Tables

RELATIONS FROM THE ERD

USER(UserId, Username, Email, Password, FirstName, LastName)
  Primary key shown in ERD: UserId

RECIPE(RecipeId, Title, Description, UserID)
  Primary key shown in ERD: RecipeId
  Foreign key shown in ERD: UserID -> USER.UserId

SEVEN STEPS
1. Identify data types for attributes.
2. Identify columns that can and cannot be NULL.
3. Identify columns that must be UNIQUE.
4. Identify primary key–foreign key mates.
5. Determine default values.
6. Identify constraints on columns (domain specifications).
7. Create the tables and associated indexes.

Questions to ask for each attribute:
  Data type?  NULL allowed?  UNIQUE?  Default?  PK/FK constraints?

*/

-- ===========================================
-- TABLE 1: USER
-- ===========================================
-- Attributes: UserId, Username, Email, Password, FirstName, LastName
-- Data type?  NULL allowed?  UNIQUE?  Default?  PK/FK constraints?

-- CREATE TABLE statement:
CREATE TABLE IF NOT EXISTS User(
    userID INT NOT NULL UNIQUE AUTO_INCREMENT,
    userName VARCHAR(32) NOT NULL UNIQUE,
    email VARCHAR(254) NOT NULL UNIQUE,
    password VARCHAR(254) NOT NULL,
    firstName VARCHAR(100) NOT NULL,
    lastName VARCHAR(254) NOT NULL, 
    CONSTRAINT userPK PRIMARY KEY(userID)
);

-- ===========================================
-- TABLE 2: RECIPE
-- ===========================================
-- Attributes: RecipeId, Title, Description, UserID
-- Data type?  NULL allowed?  UNIQUE?  Default?  PK/FK constraints?

-- CREATE TABLE statement:
CREATE TABLE IF NOT EXISTS Recipe (
    recipeID INT NOT NULL UNIQUE AUTO_INCREMENT,
    recipeTitle VARCHAR(100) NOT NULL,
    recipeDescription VARCHAR(254),
    userID INT NOT NULL,
    CONSTRAINT recipePK PRIMARY KEY(recipeID),
    CONSTRAINT userFK FOREIGN KEY(userID) REFERENCES User(userID)
);

-- ===========================================
-- CHECK THE RESULT
-- ===========================================
-- SHOW TABLES;
-- DESCRIBE User;
-- DESCRIBE Recipe;
-- IMPORTANT: To create a composite primary key example: PRIMARY KEY (studentID, courseID)