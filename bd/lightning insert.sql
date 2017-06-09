INSERT INTO `lightning`.`user`
	(`name`, `password`, `registration_date`, `image`)
VALUES
	('cristiano', '202cb962ac59075b964b07152d234b70', date(now()), 'images/001.png'),
  ('buzin', 		'202cb962ac59075b964b07152d234b70', date(now()), 'images/002.png');
								-- a senha acima eh '123' em md5

INSERT INTO `lightning`.`platform` (`name`) VALUES ('PC'), ('XBox One'), ('PS4');


INSERT INTO `lightning`.`manufacture`
	(`name`, `image`)
VALUES
	('Sony', 'images/001.png'), 
  ('Microsoft', 'images/002.png'),
  ('Eletronic Arts', 'images/003.png');


INSERT INTO `lightning`.`game`
	(`manufacture_id`, `name`, `category`, `price`, `quantity`, `production`, `description`)
VALUES
	(1, 'Street Fighter', 'luta', 20, 1000, 1, 'descricao'),
	(1, 'Tekken', 'luta', 20, 1000, 1, 'descricao'),
	(1, 'King of Fighters', 'luta', 20, 1000, 1, 'descricao');
