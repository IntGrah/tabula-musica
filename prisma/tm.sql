DROP DATABASE tm;
CREATE DATABASE tm;
USE tm;
-- role
-- 0 anonymous (unused)
-- 1 unverified (customise profile)
-- 2 verified (commenting)
-- 3 subscriber (all articles)
-- 4 editor (write articles)
-- 5 administrator (manage users)
CREATE TABLE User (
    id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    email VARCHAR(191) UNIQUE NOT NULL,
    role TINYINT NOT NULL DEFAULT 1,
    creationTime TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    lastAccessed TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE Profile (
    id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    userId INTEGER UNIQUE NOT NULL,
    name VARCHAR(191) NOT NULL,
    image TEXT DEFAULT NULL,
    bio TEXT DEFAULT NULL,
    mailingList BOOL NOT NULL DEFAULT FALSE,
    FOREIGN KEY (userId) REFERENCES User (id) ON DELETE CASCADE
);
CREATE TABLE GoogleAccount (
    id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    userId INTEGER UNIQUE NOT NULL,
    sub VARCHAR(191) UNIQUE NOT NULL,
    expires DATETIME(3) DEFAULT NULL,
    FOREIGN KEY (userId) REFERENCES User (id) ON DELETE CASCADE
);
CREATE TABLE CredentialsAccount (
    id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    userId INTEGER UNIQUE NOT NULL,
    passwordHash CHAR(60) NOT NULL,
    expires DATETIME(3) DEFAULT NULL,
    FOREIGN KEY (userId) REFERENCES User (id) ON DELETE CASCADE
);
CREATE TABLE ResetToken (
    userId INTEGER UNIQUE NOT NULL,
    -- Magic link
    tokenHash CHAR(60) NOT NULL,
    expires DATETIME(3) NOT NULL,
    FOREIGN KEY (userId) REFERENCES User (id) ON DELETE CASCADE
);
CREATE TABLE VerificationCode (
    userId INTEGER UNIQUE NOT NULL,
    -- 6-digit token
    codeHash CHAR(60) NOT NULL,
    expires DATETIME(3) NOT NULL,
    FOREIGN KEY (userId) REFERENCES User (id) ON DELETE CASCADE
);
CREATE TABLE Session (
    id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    userId INTEGER NOT NULL,
    tokenHash CHAR(64) UNIQUE NOT NULL,
    -- User is forced to reset password
    recovery BOOLEAN NOT NULL DEFAULT FALSE,
    expires DATETIME(3) NOT NULL,
    FOREIGN KEY (userId) REFERENCES User (id) ON DELETE CASCADE
);
CREATE TABLE Article (
    id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    userId INTEGER NOT NULL,
    -- author
    title VARCHAR(191) NOT NULL,
    body TEXT NOT NULL,
    time DATETIME NOT NULL,
    FOREIGN KEY (userId) REFERENCES User (id)
);
CREATE TABLE Comment (
    id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    articleId INTEGER NOT NULL,
    userId INTEGER NOT NULL,
    -- NULL for top-level comments
    replyId INT,
    body TEXT NOT NULL,
    time DATETIME(3) NOT NULL,
    -- When article is deleted, comments are deleted
    FOREIGN KEY (articleId) REFERENCES Article (id) ON DELETE CASCADE,
    -- When user is deleted, comments are deleted
    FOREIGN KEY (userId) REFERENCES User (id) ON DELETE CASCADE,
    -- When comment is deleted, replies are preserved and 'Deleted User' is set as author
    FOREIGN KEY (replyId) REFERENCES Comment (id)
);
