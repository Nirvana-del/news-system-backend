/*
 Navicat Premium Data Transfer

 Source Server         : nirvana
 Source Server Type    : MySQL
 Source Server Version : 80028
 Source Host           : 127.0.0.1:3306
 Source Schema         : library

 Target Server Type    : MySQL
 Target Server Version : 80028
 File Encoding         : 65001

 Date: 31/03/2023 23:38:33
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin`  (
  `id` varchar(50)   NOT NULL,
  `password` varchar(20)   DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1   ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES ('wq', '123');
INSERT INTO `admin` VALUES ('gy', '123');
INSERT INTO `admin` VALUES ('qjj', '123');
INSERT INTO `admin` VALUES ('jtw', '123');
INSERT INTO `admin` VALUES ('lzx', '123');

-- ----------------------------
-- Table structure for book
-- ----------------------------
DROP TABLE IF EXISTS `book`;
CREATE TABLE `book`  (
  `bookId` varchar(50)   NOT NULL,
  `bookName` varchar(20)   DEFAULT NULL,
  `author` varchar(10)   NOT NULL,
  `amount` int(0) DEFAULT NULL,
  `position` varchar(30)   DEFAULT NULL,
  `totalAmount` int(0) DEFAULT NULL,
  `borrowedTimes` int(0) DEFAULT NULL,
  `status` int(0) DEFAULT NULL,
  PRIMARY KEY (`bookId`, `author`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1   ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of book
-- ----------------------------
INSERT INTO `book` VALUES ('8', '三体1：地球往事', '刘慈欣', 520, '01#12A#1-1', 32, 3, 0);
INSERT INTO `book` VALUES ('2002', '简·爱', '夏洛蒂·勃朗特', 15, '02#01B#2-2', 15, 0, 0);
INSERT INTO `book` VALUES ('2003', '平凡的世界', '路遥', 89, '03#02B#3-1', 106, 24, 1);
INSERT INTO `book` VALUES ('3', '向北方', '李红梅、刘仰东', 12, '03#02B#3-2', 12, 0, 0);
INSERT INTO `book` VALUES ('2', '中国共产党简史', '人民出版社', 431, '03#02C#3-1', 432, 3, 1);
INSERT INTO `book` VALUES ('1', '论中国共产党历史', '中央文献出版社', 234, '03#02C#3-2', 234, 0, 1);
INSERT INTO `book` VALUES ('4', '觉醒年代', '龙平平', 12, '03#02C#3-3', 12, 0, 1);
INSERT INTO `book` VALUES ('5', '靠山', '铁流', 34, '03#02C#3-4', 34, 0, 1);
INSERT INTO `book` VALUES ('6', '大医马海德', '陈敦德', 32, '03#02C#3-5', 32, 1, 1);
INSERT INTO `book` VALUES ('7', '数字解读中国：中国的发展坐标与发展成就', '贺耀敏、甄峰', 77, '03#02C#3-6', 78, 2, 1);
INSERT INTO `book` VALUES ('8', '中国北斗', '龚盛辉', 520, '03#02C#3-7', 56, 0, 1);
INSERT INTO `book` VALUES ('9', '王安石传', '崔铭', 43, '03#02B#3-3', 43, 0, 1);
INSERT INTO `book` VALUES ('10', '远去的白马', '朱秀海', 23, '03#02C#3-8', 23, 0, 1);
INSERT INTO `book` VALUES ('11', '锦绣', '李铁', 54, '03#02C#3-9', 54, 0, 1);
INSERT INTO `book` VALUES ('12', '北纬四十度', '陈福民', 435, '03#02B#3-4', 435, 0, 1);
INSERT INTO `book` VALUES ('13', '深海探秘：换一个角度看地球', '张建松', 54, '03#02B#3-5', 54, 0, 1);
INSERT INTO `book` VALUES ('14', '一个女孩朝前走', '阮梅', 23, '03#02B#3-6', 23, 0, 1);
INSERT INTO `book` VALUES ('15', '回望：近代一百年', '马勇 ', 45, '03#02B#3-7', 45, 0, 1);
INSERT INTO `book` VALUES ('16', '伏尔泰文集', '伏尔泰', 3, '03#02B#3-8', 3, 0, 1);
INSERT INTO `book` VALUES ('17', '星之继承者', '詹姆斯·P·霍根', 54, '03#02B#3-9', 54, 0, 1);
INSERT INTO `book` VALUES ('18', '尖帽子的魔法工坊', '白滨鸥 ', 23, '03#02B#3-10', 23, 0, 1);
INSERT INTO `book` VALUES ('19', '清代家族内的罪与刑', '魏道明', 65, '03#02F#3-1', 65, 0, 1);
INSERT INTO `book` VALUES ('20', '陀思妥耶夫斯基传', '安德里亚斯·古斯基', 42, '01#02F#3-2', 42, 0, 1);
INSERT INTO `book` VALUES ('21', '大唐帝国', '宫崎市定', 65, '01#02E#3-6', 65, 0, 1);
INSERT INTO `book` VALUES ('22', '消失的图书馆', '叶锦鸿', 24, '01#02D#3-2', 24, 0, 1);
INSERT INTO `book` VALUES ('23', '海边的房间', '黄丽群', 23, '01#02B#4-6', 23, 0, 1);
INSERT INTO `book` VALUES ('24', '下沉年代', '乔治·帕克', 45, '01#02A#3-9', 45, 0, 1);
INSERT INTO `book` VALUES ('miagW8Lc0Ve7zL2gNAc88', '巴黎圣母院', '维克多·雨果', 89, '01#12A#1-2', 89, 0, 1);

-- ----------------------------
-- Table structure for borrow
-- ----------------------------
DROP TABLE IF EXISTS `borrow`;
CREATE TABLE `borrow`  (
  `readerId` varchar(50)   NOT NULL,
  `bookId` varchar(50)   NOT NULL,
  `borrowDate` datetime NULL,
  `returnDate` datetime DEFAULT NULL,
  `realDate` datetime DEFAULT NULL,
  `status` varchar(255)   DEFAULT NULL,
  PRIMARY KEY (`readerId`, `bookId`, `borrowDate`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1   ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment`  (
  `commentId` varchar(50)   NOT NULL,
  `readerId` varchar(50)   NOT NULL,
  `bookId` varchar(50)   NOT NULL,
  `date` datetime NULL,
  `content` varchar(255)   NOT NULL,
  `praise` int(0) DEFAULT NULL,
  `status` int(0) DEFAULT NULL,
  PRIMARY KEY (`commentId`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1   ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of comment
-- ----------------------------
INSERT INTO `comment` VALUES ('iJPoy5Abq4iykyIXegcJC', 'CVtkXPx5BEFMZ3eydcU5R', '1', '2023-03-31 22:34:43', '6666', 0, 0);

-- ----------------------------
-- Table structure for reader
-- ----------------------------
DROP TABLE IF EXISTS `reader`;
CREATE TABLE `reader`  (
  `readerId` varchar(50)   NOT NULL,
  `readerName` varchar(10)   DEFAULT NULL,
  `password` varchar(50)   DEFAULT NULL,
  `phone` varchar(25)   DEFAULT NULL,
  `borrowTimes` bigint(0) DEFAULT NULL,
  `ovdTimes` bigint(0) DEFAULT NULL, 
  `email` varchar(255)   DEFAULT NULL,
  PRIMARY KEY (`readerId`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1   ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of reader
-- ----------------------------
INSERT INTO `reader` VALUES ('CVtkXPx5BEFMZ3eydcU5R', '赵灵儿', '675a3867bd36ed867d480551c1000dc4', '13036255989', 0, 0, '2387736781@qq.com');
INSERT INTO `reader` VALUES ('esRdxiau60yQklZtGxiix', '李逍遥', '675a3867bd36ed867d480551c1000dc4', '13036275999', 0, 0, '2943223781@qq.com');

-- ----------------------------
-- Table structure for report
-- ----------------------------
DROP TABLE IF EXISTS `report`;
CREATE TABLE `report`  (
  `commentId` varchar(50)   NOT NULL,
  `reporterId` varchar(50)   NOT NULL,
  `reportdate` datetime NULL,
  `status` varchar(255)   DEFAULT NULL,
  PRIMARY KEY (`reportdate`, `reporterId`, `commentId`) USING BTREE
) ENGINE = InnoDB   ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of report
-- ----------------------------
INSERT INTO `report` VALUES ('iJPoy5Abq4iykyIXegcJC', 'esRdxiau60yQklZtGxiix', '2023-03-31 22:37:37', '已通过');

-- ----------------------------
-- Table structure for reserve
-- ----------------------------
DROP TABLE IF EXISTS `reserve`;
CREATE TABLE `reserve`  (
  `readerId` varchar(50)   NOT NULL,
  `bookId` varchar(50)   NOT NULL,
  `date` datetime NULL,
  `status` varchar(50)   DEFAULT NULL,
  PRIMARY KEY (`readerId`, `bookId`, `date`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1   ROW_FORMAT = Dynamic;

-- ----------------------------
-- View structure for borrowinfo
-- ----------------------------
DROP VIEW IF EXISTS `borrowinfo`;
CREATE ALGORITHM = UNDEFINED DEFINER = `root`@`%` SQL SECURITY DEFINER VIEW `borrowinfo` AS select `borrow`.`readerId` AS `readerId`,`book`.`bookId` AS `bookId`,`reader`.`readerName` AS `readerName`,`book`.`bookName` AS `bookName`,`borrow`.`borrowDate` AS `borrowDate`,`borrow`.`returnDate` AS `returnDate`,`borrow`.`realDate` AS `realDate` from ((`borrow` left join `reader` on((`borrow`.`readerId` = `reader`.`readerId`))) left join `book` on((`borrow`.`bookId` = `book`.`bookId`)));

-- ----------------------------
-- View structure for reportinfo
-- ----------------------------
DROP VIEW IF EXISTS `reportinfo`;
CREATE ALGORITHM = UNDEFINED DEFINER = `root`@`%` SQL SECURITY DEFINER VIEW `reportinfo` AS select `a`.`status` AS `status`,`a`.`commentId` AS `commentId`,`a`.`reporterId` AS `reporterId`,`a`.`reportdate` AS `reportdate`,`b`.`readerId` AS `readerId`,`reader`.`readerName` AS `readerName`,`b`.`bookId` AS `bookId`,`book`.`bookName` AS `bookName`,`b`.`date` AS `date`,`b`.`content` AS `content` from (((`report` `a` left join `comment` `b` on((`a`.`commentId` = `b`.`commentId`))) left join `reader` on((`b`.`readerId` = `reader`.`readerId`))) left join `book` on((`b`.`bookId` = `book`.`bookId`)));

SET FOREIGN_KEY_CHECKS = 1;
