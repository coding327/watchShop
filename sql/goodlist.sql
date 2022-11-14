/*
Navicat MySQL Data Transfer

Source Server         : cake
Source Server Version : 50726
Source Host           : localhost:3306
Source Database       : watchshop

Target Server Type    : MYSQL
Target Server Version : 50726
File Encoding         : 65001

Date: 2022-06-10 11:39:14
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `goodlist`
-- ----------------------------
DROP TABLE IF EXISTS `goodlist`;
CREATE TABLE `goodlist` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `img` varchar(5000) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `version` varchar(255) DEFAULT NULL,
  `update` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=81 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodlist
-- ----------------------------
INSERT INTO `goodlist` VALUES ('1', 'GA-110OPT22', 'https://www.vacheron-constantin.cn/dam/rcq/vac/16/19/64/2/1619642.png.transform.vacprodcardhd.png', '1090', 'BPFT', null);
INSERT INTO `goodlist` VALUES ('2', 'DW-6900BUMB22', 'https://www.vacheron-constantin.cn/dam/rcq/vac/20/14/60/2/2014602.png.transform.vacprodcardhd.png', '1380', 'PFN', null);
INSERT INTO `goodlist` VALUES ('3', 'DW-5600MEGA22', 'https://www.vacheron-constantin.cn/dam/rcq/vac/20/26/10/1/2026101.png.transform.vacprodcardhd.png', '1790', 'BPFT', null);
INSERT INTO `goodlist` VALUES ('4', 'DWE-5600HG', 'https://www.vacheron-constantin.cn/dam/rcq/vac/15/41/76/2/1541762.png.transform.vacprodcardhd.png', '1890', 'BPFT', null);
INSERT INTO `goodlist` VALUES ('5', 'GA-B2100', 'https://www.vacheron-constantin.cn/dam/rcq/vac/16/21/45/1/1621451.png.transform.vacprodcardhd.png', '1190', 'A', null);
INSERT INTO `goodlist` VALUES ('6', 'GA-B2100', 'https://www.vacheron-constantin.cn/dam/rcq/vac/19/21/64/9/1921649.png.transform.vacprodcardhd.png', '590', 'BPFT', null);
INSERT INTO `goodlist` VALUES ('7', 'GA-B2100', 'https://www.vacheron-constantin.cn/dam/rcq/vac/19/64/96/4/1964964.png.transform.vacprodcardhd.png', '190', 'A', null);
INSERT INTO `goodlist` VALUES ('8', 'GA-B2100', 'https://www.vacheron-constantin.cn/dam/rcq/vac/18/11/42/1/1811421.png.transform.vacprodcardhd.png', '1690', 'PFQ', null);
INSERT INTO `goodlist` VALUES ('9', 'GA-B2100C', 'https://www.vacheron-constantin.cn/dam/rcq/vac/46/99/04/469904.png.transform.vacprodcardhd.png', '1290', 'A', null);
INSERT INTO `goodlist` VALUES ('10', 'GMA-S2200', 'https://www.vacheron-constantin.cn/dam/rcq/vac/18/09/58/4/1809584.png.transform.vacprodcardhd.png', '990', 'A', null);
INSERT INTO `goodlist` VALUES ('11', 'GMA-S2200', 'https://www.vacheron-constantin.cn/dam/rcq/vac/11/86/55/8/1186558.png.transform.vacprodcardhd.png', '930', 'PFH', null);
INSERT INTO `goodlist` VALUES ('12', 'GBA-900UU', 'https://www.vacheron-constantin.cn/dam/rcq/vac/18/20/94/0/1820940.png.transform.vacprodcardhd.png', '490', 'PFH', null);
INSERT INTO `goodlist` VALUES ('13', 'GBA-900UU', 'https://www.vacheron-constantin.cn/dam/rcq/vac/15/49/17/6/1549176.png.transform.vacprodcardhd.png', '990', 'PFH', null);
INSERT INTO `goodlist` VALUES ('14', 'GBD-200UU', 'https://www.vacheron-constantin.cn/dam/rcq/vac/73/55/76/735576.png.transform.vacprodcardhd.png', '1390', 'A', null);
INSERT INTO `goodlist` VALUES ('15', 'GBD-200UU', 'https://www.vacheron-constantin.cn/dam/rcq/vac/16/19/64/3/1619643.png.transform.vacprodcardhd.png', '1190', 'A', null);
INSERT INTO `goodlist` VALUES ('16', 'GMA-S2200M', 'https://www.vacheron-constantin.cn/dam/rcq/vac/16/19/63/6/1619636.png.transform.vacprodcardhd.png', '1090', 'A', null);
INSERT INTO `goodlist` VALUES ('17', 'GMA-S2200M', 'https://www.vacheron-constantin.cn/dam/rcq/vac/10/87/66/1/1087661.png.transform.vacprodcardhd.png', '1390', 'PFH', null);
INSERT INTO `goodlist` VALUES ('18', 'GST-B500AD', 'https://www.vacheron-constantin.cn/dam/rcq/vac/66/60/68/666068.png.transform.vacprodcardhd.png', '2390', 'A', null);
INSERT INTO `goodlist` VALUES ('19', 'GST-B500BD', 'https://www.vacheron-constantin.cn/dam/rcq/vac/20/29/41/4/2029414.png.transform.vacprodcardhd.png', '3090', 'A', null);
INSERT INTO `goodlist` VALUES ('20', 'GST-B500D', 'https://www.vacheron-constantin.cn/dam/rcq/vac/59/57/30/595730.png.transform.vacprodcardhd.png', '2390', 'PFH', null);
INSERT INTO `goodlist` VALUES ('21', 'GST-B500D', 'https://www.vacheron-constantin.cn/dam/rcq/vac/16/51/50/6/1651506.png.transform.vacprodcardhd.png', '2390', 'A', null);
INSERT INTO `goodlist` VALUES ('22', 'MTG-B3000B', 'https://www.vacheron-constantin.cn/dam/rcq/vac/20/49/26/4/2049264.png.transform.vacprodcardhd.png', '6690', 'A', null);
INSERT INTO `goodlist` VALUES ('23', 'MTG-B3000BD', 'https://www.vacheron-constantin.cn/dam/rcq/vac/10/87/55/9/1087559.png.transform.vacprodcardhd.png', '7690', 'A', null);
INSERT INTO `goodlist` VALUES ('24', 'MTG-B3000BD', 'https://www.vacheron-constantin.cn/dam/rcq/vac/21/56/16/4/2156164.png.transform.vacprodcardhd.png', '7690', 'A', null);
INSERT INTO `goodlist` VALUES ('25', 'DW-5600BWP', 'https://www.vacheron-constantin.cn/dam/rcq/vac/23/10/57/1/2310571.png.transform.vacprodcardhd.png', '1490', 'PFQ', null);
INSERT INTO `goodlist` VALUES ('26', 'GA-110BWP', 'https://www.vacheron-constantin.cn/dam/rcq/vac/14/75/79/8/1475798.png.transform.vacprodcardhd.png', '1290', 'PFQ', null);
INSERT INTO `goodlist` VALUES ('27', 'GA-2100BWP', 'https://www.vacheron-constantin.cn/dam/rcq/vac/16/50/92/3/1650923.png.transform.vacprodcardhd.png', '1190', 'BPFT', null);
INSERT INTO `goodlist` VALUES ('28', 'GA-700BWP', 'https://www.vacheron-constantin.cn/dam/rcq/vac/19/42/84/5/1942845.png.transform.vacprodcardhd.png', '1190', 'PFQ', null);
INSERT INTO `goodlist` VALUES ('29', 'DW-5600BWP', 'https://www.vacheron-constantin.cn/dam/rcq/vac/47/62/12/476212.png.transform.vacprodcardhd.png', '1090', 'PFQ', null);
INSERT INTO `goodlist` VALUES ('30', 'AWG-M100SBP', 'https://www.vacheron-constantin.cn/dam/rcq/vac/22/07/56/3/2207563.png.transform.vacprodcardhd.png', '1390', 'A', null);
INSERT INTO `goodlist` VALUES ('31', 'GA-100BP', 'https://www.vacheron-constantin.cn/dam/rcq/vac/20/29/45/7/2029457.png.transform.vacprodcardhd.png', '890', 'A', null);
INSERT INTO `goodlist` VALUES ('32', 'GA-2100BP', 'https://www.vacheron-constantin.cn/dam/rcq/vac/10/07/89/0/1007890.png.transform.vacprodcardhd.png', '490', 'PFN', null);
INSERT INTO `goodlist` VALUES ('33', 'GA-700BP', 'https://www.vacheron-constantin.cn/dam/rcq/vac/22/27/77/0/2227770.png.transform.vacprodcardhd.png', '790', 'A', null);
INSERT INTO `goodlist` VALUES ('34', 'GW-B5600BP', 'https://www.vacheron-constantin.cn/dam/rcq/vac/16/21/86/2/1621862.png.transform.vacprodcardhd.png', '1090', 'A', null);
INSERT INTO `goodlist` VALUES ('35', 'DW-5600KAK21', 'https://www.vacheron-constantin.cn/dam/rcq/vac/22/04/89/3/2204893.png.transform.vacprodcardhd.png', '1390', 'PFN', null);
INSERT INTO `goodlist` VALUES ('36', 'DW-5600OBI21', 'https://www.vacheron-constantin.cn/dam/rcq/vac/17/49/99/5/1749995.png.transform.vacprodcardhd.png', '1390', 'PFN', null);
INSERT INTO `goodlist` VALUES ('37', 'GMW-B5000MB', 'https://www.vacheron-constantin.cn/dam/rcq/vac/11/54/01/2/1154012.png.transform.vacprodcardhd.png', '4190', 'A', null);
INSERT INTO `goodlist` VALUES ('38', 'MRG-B5000B', 'https://www.vacheron-constantin.cn/dam/rcq/vac/43/16/77/431677.png.transform.vacprodcardhd.png', '2000', 'A', null);
INSERT INTO `goodlist` VALUES ('39', 'MRG-B5000D', 'https://www.vacheron-constantin.cn/dam/rcq/vac/20/58/09/6/2058096.png.transform.vacprodcardhd.png', '2500', 'PFN', null);
INSERT INTO `goodlist` VALUES ('40', 'MRG-B2000B', 'https://www.vacheron-constantin.cn/dam/rcq/vac/16/19/62/7/1619627.png.transform.vacprodcardhd.png', '1900', 'A', null);
INSERT INTO `goodlist` VALUES ('41', 'MRG-B2000D', 'https://www.vacheron-constantin.cn/dam/rcq/vac/16/23/85/0/1623850.png.transform.vacprodcardhd.png', '1700', 'PFQ', null);
INSERT INTO `goodlist` VALUES ('42', 'GAE-2100RC', 'https://www.vacheron-constantin.cn/dam/rcq/vac/19/79/94/3/1979943.png.transform.vacprodcardhd.png', '1290', 'A', null);
INSERT INTO `goodlist` VALUES ('43', 'GA-2100CA', 'https://www.vacheron-constantin.cn/dam/rcq/vac/16/19/63/0/1619630.png.transform.vacprodcardhd.png', '890', 'A', null);
INSERT INTO `goodlist` VALUES ('44', 'GA-700CA', 'https://www.vacheron-constantin.cn/dam/rcq/vac/59/54/29/595429.png.transform.vacprodcardhd.png', '490', 'PFQ', null);
INSERT INTO `goodlist` VALUES ('45', 'GA-700CA', 'https://www.vacheron-constantin.cn/dam/rcq/vac/16/23/91/0/1623910.png.transform.vacprodcardhd.png', '890', 'PFQ', null);
INSERT INTO `goodlist` VALUES ('46', 'GA-2100', 'https://www.vacheron-constantin.cn/dam/rcq/vac/20/14/92/4/2014924.png.transform.vacprodcardhd.png', '590', 'A', null);
INSERT INTO `goodlist` VALUES ('47', 'GA-2100', 'https://www.vacheron-constantin.cn/dam/rcq/vac/20/29/39/7/2029397.png.transform.vacprodcardhd.png', '890', 'PFQ', null);
INSERT INTO `goodlist` VALUES ('48', 'GA-2100', 'https://www.vacheron-constantin.cn/dam/rcq/vac/14/46/36/2/1446362.png.transform.vacprodcardhd.png', '890', 'A', null);
INSERT INTO `goodlist` VALUES ('49', 'GA-2200SKL', 'https://www.vacheron-constantin.cn/dam/rcq/vac/23/06/51/5/2306515.png.transform.vacprodcardhd.png', '1090', 'BPFT', null);
INSERT INTO `goodlist` VALUES ('50', 'GA-2200SKL', 'https://www.vacheron-constantin.cn/dam/rcq/vac/10/05/29/0/1005290.png.transform.vacprodcardhd.png', '1090', 'A', null);
INSERT INTO `goodlist` VALUES ('51', 'GA-900SKL', 'https://www.vacheron-constantin.cn/dam/rcq/vac/19/58/04/4/1958044.png.transform.vacprodcardhd.png', '1090', 'BPFT', null);
INSERT INTO `goodlist` VALUES ('52', 'GA-900SKL', 'https://www.vacheron-constantin.cn/dam/rcq/vac/19/42/84/8/1942848.png.transform.vacprodcardhd.png', '1090', 'A', null);
INSERT INTO `goodlist` VALUES ('53', 'GM-110MF', 'https://www.vacheron-constantin.cn/dam/rcq/vac/48/55/41/485541.png.transform.vacprodcardhd.png', '1590', 'A', null);
INSERT INTO `goodlist` VALUES ('54', 'GM-2100MF', 'https://www.vacheron-constantin.cn/dam/rcq/vac/23/06/51/6/2306516.png.transform.vacprodcardhd.png', '1790', 'PFQ', null);
INSERT INTO `goodlist` VALUES ('55', 'GM-S2100MF', 'https://www.vacheron-constantin.cn/dam/rcq/vac/15/67/17/0/1567170.png.transform.vacprodcardhd.png', '1490', 'BPFT', null);
INSERT INTO `goodlist` VALUES ('56', 'GM-5600MF', 'https://www.vacheron-constantin.cn/dam/rcq/vac/14/46/42/5/1446425.png.transform.vacprodcardhd.png', '1490', 'A', null);
INSERT INTO `goodlist` VALUES ('57', 'GM-S5600MF', 'https://www.vacheron-constantin.cn/dam/rcq/vac/19/64/97/5/1964975.png.transform.vacprodcardhd.png', '1490', 'A', null);
INSERT INTO `goodlist` VALUES ('58', 'DW-5600CA', 'https://www.vacheron-constantin.cn/dam/rcq/vac/43/16/43/431643.png.transform.vacprodcardhd.png', '790', 'A', null);
INSERT INTO `goodlist` VALUES ('59', 'DW-5600CA', 'https://www.vacheron-constantin.cn/dam/rcq/vac/47/88/10/478810.png.transform.vacprodcardhd.png', '790', 'BPFT', null);
INSERT INTO `goodlist` VALUES ('60', 'GMA-S110GS', 'https://www.vacheron-constantin.cn/dam/rcq/vac/59/56/40/595640.png.transform.vacprodcardhd.png', '990', 'A', null);
INSERT INTO `goodlist` VALUES ('61', 'GMA-S110GS', 'https://www.vacheron-constantin.cn/dam/rcq/vac/23/06/51/9/2306519.png.transform.vacprodcardhd.png', '950', 'A', null);
INSERT INTO `goodlist` VALUES ('62', 'GMA-S120GS', 'https://www.vacheron-constantin.cn/dam/rcq/vac/43/16/29/431629.png.transform.vacprodcardhd.png', '790', 'BPFT', null);
INSERT INTO `goodlist` VALUES ('63', 'GMA-S120GS', 'https://www.vacheron-constantin.cn/dam/rcq/vac/23/06/50/4/2306504.png.transform.vacprodcardhd.png', '990', 'A', null);
INSERT INTO `goodlist` VALUES ('64', 'MRG-B2000B', 'https://www.vacheron-constantin.cn/dam/rcq/vac/17/06/23/6/1706236.png.transform.vacprodcardhd.png', '1900', 'B', null);
INSERT INTO `goodlist` VALUES ('65', 'GBD-100BAR', 'https://www.vacheron-constantin.cn/dam/rcq/vac/13/44/25/5/1344255.png.transform.vacprodcardhd.png', '1790', 'A', null);
INSERT INTO `goodlist` VALUES ('66', 'GBD-H1000BAR', 'https://www.vacheron-constantin.cn/dam/rcq/vac/13/67/76/2/1367762.png.transform.vacprodcardhd.png', '390', 'PFQ', null);
INSERT INTO `goodlist` VALUES ('67', 'MTG-B1000CX', 'https://www.vacheron-constantin.cn/dam/rcq/vac/17/06/23/6/1706236.png.transform.vacprodcardhd.png', '490', 'PFH', null);
INSERT INTO `goodlist` VALUES ('68', 'GWG-2000TLC', 'https://www.vacheron-constantin.cn/dam/rcq/vac/13/44/25/5/1344255.png.transform.vacprodcardhd.png', '990', 'A', null);
INSERT INTO `goodlist` VALUES ('69', 'GA-2100HT', 'https://www.vacheron-constantin.cn/dam/rcq/vac/13/67/76/2/1367762.png.transform.vacprodcardhd.png', '1290', 'A', null);
INSERT INTO `goodlist` VALUES ('70', 'GM-2100MG', 'https://www.vacheron-constantin.cn/dam/rcq/vac/16/50/85/1/1650851.png.transform.vacprodcardhd.png', '990', 'PFN', null);
INSERT INTO `goodlist` VALUES ('71', 'GBA-900RD', 'https://www.vacheron-constantin.cn/dam/rcq/vac/16/19/63/5/1619635.png.transform.vacprodcardhd.png', '990', 'A', null);
INSERT INTO `goodlist` VALUES ('72', 'GBD-200RD', 'https://www.vacheron-constantin.cn/dam/rcq/vac/21/33/60/8/2133608.png.transform.vacprodcardhd.png', '190', 'BPFT', null);
INSERT INTO `goodlist` VALUES ('73', 'MTG-B2000XMG', 'https://www.vacheron-constantin.cn/dam/rcq/vac/16/19/63/2/1619632.png.transform.vacprodcardhd.png', '290', 'A', null);
INSERT INTO `goodlist` VALUES ('74', 'GA-110CCA21', 'https://www.vacheron-constantin.cn/dam/rcq/vac/11/54/01/1/1154011.png.transform.vacprodcardhd.png', '1390', 'PFH', null);
INSERT INTO `goodlist` VALUES ('75', 'AWG-M100SVB', 'https://www.vacheron-constantin.cn/dam/rcq/vac/16/19/63/9/1619639.png.transform.vacprodcardhd.png', '1490', 'PFH', null);
INSERT INTO `goodlist` VALUES ('76', 'GA-110WLP', 'https://www.vacheron-constantin.cn/dam/rcq/vac/15/32/37/2/1532372.png.transform.vacprodcardhd.png', '1290', 'BPFT', null);
INSERT INTO `goodlist` VALUES ('77', 'GA-2100FR', 'https://www.vacheron-constantin.cn/dam/rcq/vac/74/14/13/741413.png.transform.vacprodcardhd.png', '990', 'PFQ', null);
INSERT INTO `goodlist` VALUES ('78', 'GAE-2100GC', 'https://www.vacheron-constantin.cn/dam/rcq/vac/21/25/89/7/2125897.png.transform.vacprodcardhd.png', '1490', 'PFH', null);
INSERT INTO `goodlist` VALUES ('79', 'MTG-S21', 'https://www.vacheron-constantin.cn/dam/rcq/vac/14/93/77/3/1493773.png.transform.vacprodcardhd.png', '1320', 'A', null);
INSERT INTO `goodlist` VALUES ('80', 'AWG-2022', 'https://www.vacheron-constantin.cn/dam/rcq/vac/16/19/62/9/1619629.png.transform.vacprodcardhd.png', '680', 'PFQ', null);

-- ----------------------------
-- Table structure for `shopcar`
-- ----------------------------
DROP TABLE IF EXISTS `shopcar`;
CREATE TABLE `shopcar` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `user` varchar(255) DEFAULT NULL,
  `goodsid` varchar(255) DEFAULT NULL,
  `buynum` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shopcar
-- ----------------------------
INSERT INTO `shopcar` VALUES ('9', 'a123123', '2', '4');
INSERT INTO `shopcar` VALUES ('8', 'a123123', '1', '2');
INSERT INTO `shopcar` VALUES ('12', '17671727813', '1', '3');
INSERT INTO `shopcar` VALUES ('11', '17671727813', '2', '2');

-- ----------------------------
-- Table structure for `userinfo`
-- ----------------------------
DROP TABLE IF EXISTS `userinfo`;
CREATE TABLE `userinfo` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `user` varchar(255) NOT NULL,
  `pwd` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `update` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of userinfo
-- ----------------------------
INSERT INTO `userinfo` VALUES ('1', 'a123123', 'a123123', '18745237823', '123@qq.com', null);
INSERT INTO `userinfo` VALUES ('5', 'a123456', 'a123456', '13333333333', '12@qq.com', null);
INSERT INTO `userinfo` VALUES ('6', 'b123123', 'b123123', '14234567812', '111@qq.com', null);
INSERT INTO `userinfo` VALUES ('7', 'z123456', '123456', '17671727813', 'zhangdeng@foxma.com', null);
