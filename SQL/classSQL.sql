DROP TABLE studants;

USE school;
SELECT * FROM estudantes;
DESCRIBE studants;

INSERT INTO studants(named, age) VALUES("Samila", 18);
INSERT INTO studants VALUES('Emanuel', 30, DEFAULT);
INSERT INTO studants(age, named) VALUES(16, 'Murilo');

SET SQL_SAFE_UPDATES = 1;

UPDATE studants SET age=20 WHERE named= 'Felipe';
UPDATE studants SET age=19 WHERE named= 'Felipe';
DELETE FROM studants WHERE named = 'Emanuel';
-- DELETE FROM studants;

TRUNCATE studants;

ALTER TABLE studants ADD COLUMN city VARCHAR(20) NOT NULL;

ALTER TABLE studants
ADD COLUMN cpf VARCHAR(11) NOT NULL AFTER id;

ALTER TABLE studants RENAME TO estudantes; 

DESCRIBE estudantes;


ALTER TABLE estudantes
CHANGE COLUMN named named VARCHAR(35) NOT NULL ;
