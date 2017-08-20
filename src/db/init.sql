-- create database
CREATE DATABASE IF NOT EXISTS catalyst default charset utf8 COLLATE utf8_general_ci;

-- init data
INSERT INTO catalyst.task_status (id,name) VALUES
(1,'INCOMPLETE')
,(2,'COMPLETE')
;

INSERT INTO catalyst.checkpoint_status (id,name) VALUES
(1,'INCOMPLETE')
,(2,'COMPLETE')
,(3,'DELAYED')
;

INSERT INTO catalyst.plan_type (id,title) VALUES
(1,'Vocabulary')
,(2,'Losing Weight')
,(3,'Exam Preparation')
,(4,'Fitness')
;

