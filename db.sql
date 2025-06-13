CREATE DATABASE prueba_tecnica;
-- drop database prueba_tecnica;

USE prueba_tecnica;


CREATE TABLE campaigns (
id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100) NOT NULL,
description VARCHAR(255) NOT NULL,
start_date DATETIME,
end_date DATETIME,
campaign_is_deleted BOOLEAN NOT NULL DEFAULT 0
);


CREATE TABLE influencers (
id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
influencer_name VARCHAR(100) NOT NULL,
email VARCHAR(255) NOT NULL UNIQUE,
followers_count INT UNSIGNED NOT NULL DEFAULT 0
);


INSERT INTO influencers (influencer_name, email, followers_count) VALUES
('Ninja', 'ninja@email.com', 18500000),
('Shroud', 'shroud@email.com', 10000000),
('Pokimane', 'pokimane@email.com', 13000000),
('Rubius', 'rubius@email.com', 40000000),
('Ibai Llanos', 'ibai@email.com', 16000000),
('TheGrefg', 'thegrefg@email.com', 20000000),
('PewDiePie', 'pewdiepie@email.com', 111000000),
('AuronPlay', 'auronplay@email.com', 29000000),
('Myth', 'myth@email.com', 7000000),
('Valkyrae', 'valkyrae@email.com', 11000000);

INSERT INTO campaigns (name, description, start_date, end_date) VALUES
('Lanzamiento Fortnite Capítulo 4', 'Campaña para promocionar el nuevo capítulo de Fortnite.', '2025-06-01 00:00:00', '2025-06-30 23:59:59'),
('Torneo de Call of Duty', 'Competencia online para influencers y fans.', '2025-07-05 00:00:00', '2025-07-20 23:59:59'),
('Streaming de Cyberpunk 2077', 'Promoción especial con streamings diarios.', '2025-08-01 00:00:00', '2025-08-15 23:59:59'),
('Campaña de Razer Gaming Gear', 'Campaña para aumentar ventas de periféricos gaming.', '2025-09-01 00:00:00', '2025-09-30 23:59:59');

CREATE TABLE campaign_influencer (
  campaign_id INT UNSIGNED NOT NULL,
  influencer_id INT UNSIGNED NOT NULL,
  PRIMARY KEY (campaign_id, influencer_id),
  FOREIGN KEY (campaign_id) REFERENCES campaigns(id),
  FOREIGN KEY (influencer_id) REFERENCES influencers(id)
);


select * from influencers;
select * from campaigns;
select * from campaign_influencer;


SELECT *
FROM influencers
WHERE id IN (
  SELECT influencer_id
  FROM campaign_influencer
  WHERE campaign_id = 2
);