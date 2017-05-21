-- MySQL Script generated by MySQL Workbench
-- Sun May 21 02:30:21 2017
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema lightning
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema lightning
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `lightning` DEFAULT CHARACTER SET utf8 ;
USE `lightning` ;

-- -----------------------------------------------------
-- Table `lightning`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lightning`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `registration_date` DATE NOT NULL,
  `image` VARCHAR(255) NULL DEFAULT './images/standard_image.png',
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lightning`.`manufacture`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lightning`.`manufacture` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `image` VARCHAR(255) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lightning`.`game`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lightning`.`game` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `manufacture_id` INT NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `category` VARCHAR(255) NOT NULL,
  `price` DOUBLE NOT NULL,
  `quantity` INT NOT NULL,
  `production` TINYINT NOT NULL,
  `description` VARCHAR(255) NULL,
  PRIMARY KEY (`id`, `manufacture_id`),
  INDEX `fk_game_distribuidor1_idx` (`manufacture_id` ASC),
  CONSTRAINT `fk_game_distribuidor1`
    FOREIGN KEY (`manufacture_id`)
    REFERENCES `lightning`.`manufacture` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lightning`.`platform`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lightning`.`platform` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lightning`.`game_has_platform`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lightning`.`game_has_platform` (
  `game_has_platform_id` INT NOT NULL AUTO_INCREMENT,
  `game_id` INT NOT NULL,
  `platform_id` INT NOT NULL,
  PRIMARY KEY (`game_has_platform_id`, `game_id`, `platform_id`),
  INDEX `fk_game_has_platform_platform1_idx` (`platform_id` ASC),
  INDEX `fk_game_has_platform_game_idx` (`game_id` ASC),
  CONSTRAINT `fk_game_has_platform_game`
    FOREIGN KEY (`game_id`)
    REFERENCES `lightning`.`game` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_game_has_platform_platform1`
    FOREIGN KEY (`platform_id`)
    REFERENCES `lightning`.`platform` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
