CREATE TABLE WTH2023
(
    id INT PRIMARY KEY,
    name VARCHAR (200),
    contact INT(8),
    dob DATETIME,
    gender VARCHAR(10),
    tel INT(8),
    email VARCHAR (100),
    tutor_desc VARCHAR (400),
    strength_tutor VARCHAR (300),
    weakness_tutor VARCHAR (300),
    strength_tutee VARCHAR (300),
    weakness_tutee VARCHAR (300),
    tutor_end_date DATETIME, 
    desc_tutor_and_tutee VARCHAR(300),
    partnering_organsation VARCHAR(300),
    tutee_level VARCHAR(250),
    subjects VARCHAR(250),
    amt_discussion int(8000),
    session_hours DATETIME,
    session_date DATETIME
);
/* Use 10 for training
300 for total Datasets 
*/
