-------------------------------------------------------------
-- NERC Grants on the Web (GOTW) Schema
-------------------------------------------------------------

DROP TABLE IF EXISTS annual_amount;
DROP TABLE IF EXISTS class_item;
DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS grant_staff;
DROP TABLE IF EXISTS heading_amount;
DROP TABLE IF EXISTS institution;
DROP TABLE IF EXISTS program;
DROP TABLE IF EXISTS region;
DROP TABLE IF EXISTS research_grant;
DROP TABLE IF EXISTS researcher;
DROP TABLE IF EXISTS secondary_classification;
DROP TABLE IF EXISTS type_amount;


CREATE TABLE annual_amount (
  grant_id              INTEGER,
  year                  INTEGER,
  amount                INTEGER,
  PRIMARY KEY(grant_id,year,amount)
);


CREATE TABLE class_item (
  id                    INTEGER,
  type                  TEXT,
  name                  TEXT,
  PRIMARY KEY(id)
);


CREATE TABLE department (
  id                    INTEGER,
  institution_id        INTEGER,
  name                  TEXT,
  PRIMARY KEY(id),
  FOREIGN KEY(institution_id) REFERENCES institution(id)
);


CREATE TABLE grant_staff (
  staff_id              INTEGER,
  grant_id              INTEGER,
  role                  TEXT,
  PRIMARY KEY(staff_id,role,grant_id),
  FOREIGN KEY(staff_id) REFERENCES staff(id),
  FOREIGN KEY(grant_id) REFERENCES research_grant(id)
);


CREATE TABLE heading_amount (
  grant_id              INTEGER,
  amount                INTEGER,
  heading               TEXT,
  PRIMARY KEY(grant_id,heading,amount),
  FOREIGN KEY(grant_id) REFERENCES research_grant(id)
);


CREATE TABLE institution (
  id                    INTEGER,
  region_id             TEXT,
  name                  TEXT,
  PRIMARY KEY(id),
  FOREIGN KEY(region_id) REFERENCES region(id)
);


CREATE TABLE program (
  id                    INTEGER,
  name                  TEXT,
  url                   TEXT,
  PRIMARY KEY(id)
);


CREATE TABLE region (
  id                    TEXT,
  name                  TEXT,
  PRIMARY KEY(id)
);

                 
-- Why is there no link to `researcher`?
CREATE TABLE research_grant (
  id                    INTEGER,
  program_id            INTEGER,
  program_sub_id        INTEGER,
  ref                   TEXT,
  lead_ref              TEXT,
  title                 TEXT,
  abstract              TEXT,
  url                   TEXT,
  department_id         INTEGER,
  value                 INTEGER,
  award_type            TEXT,
  PRC                   TEXT,
  overall_classification TEXT,
  award_state           TEXT,
  jes_grant_state       TEXT,
  period_start          TEXT, -- DateTime
  period_end            TEXT, -- DateTime
  PRIMARY KEY(id),
  UNIQUE(ref),
  FOREIGN KEY(program_id) REFERENCES program(id),
  FOREIGN KEY(department_id) REFERENCES department(id)
);


CREATE TABLE researcher (
  id                    INTEGER,
  name                  TEXT,
  address               TEXT,
  PRIMARY KEY(id)
);


CREATE TABLE secondary_classification (
  grant_id              INTEGER,
  secondary             TEXT,
  PRIMARY KEY(grant_id,secondary),
  FOREIGN KEY(grant_id) REFERENCES research_grant(id)
);


CREATE TABLE type_amount (
  grant_id              INTEGER,
  item_id               INTEGER,
  year                  INTEGER,
  amount                INTEGER,
  PRIMARY KEY(grant_id,item_id,year,amount),
  FOREIGN KEY(grant_id) REFERENCES research_grant(id)
);