CREATE TABLE WTH2023
(
    id INT PRIMARY KEY,
    name VARCHAR (200),
    tutor_contact INT(8),
    tutee_contact INT(8),
    dob DATETIME,
    gender VARCHAR(10),
    house_tel INT(8),
    email VARCHAR (100),
    tutor_desc VARCHAR (255),
    strength_tutor VARCHAR (255),
    weakness_tutor VARCHAR (255),
    strength_tutee VARCHAR (255),
    weakness_tutee VARCHAR (255),
    tutor_end_date DATETIME, 
    desc_tutor_and_tutee VARCHAR(255),
    partnering_organsation VARCHAR(255),
    tutee_level VARCHAR(250),
    subjects VARCHAR(250),
    amt_discussion int(255),
    session_hours INT,
    session_date DATETIME
);
/* Use 10 for training
300 for total Datasets 
*/
