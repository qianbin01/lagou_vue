let data = {
  HOT_CITIES: [
    '全国', '北京', '上海',
    '深圳', '广州', '杭州',
    '成都', '南京', '武汉',
    '西安', '厦门', '长沙',
    '苏州', '天津',
  ],
  ALL_CITIES: [{'name': '阿坝', 'spell': 'AB'}, {'name': '安康', 'spell': 'AK'}, {
    'name': '阿克苏',
    'spell': 'AKS'
  }, {'name': '阿里', 'spell': 'AL'}, {'name': '阿拉尔', 'spell': 'ALE'}, {'name': '阿拉善', 'spell': 'ALS'}, {
    'name': '阿勒泰',
    'spell': 'ALT'
  }, {'name': '澳门', 'spell': 'AM'}, {'name': '安庆', 'spell': 'AQ'}, {'name': '鞍山', 'spell': 'AS'}, {
    'name': '安顺',
    'spell': 'AS'
  }, {'name': '安阳', 'spell': 'AY'}, {'name': '蚌埠', 'spell': 'BB'}, {'name': '白城', 'spell': 'BC'}, {
    'name': '保定',
    'spell': 'BD'
  }, {'name': '博尔塔拉', 'spell': 'BETL'}, {'name': '北海', 'spell': 'BH'}, {'name': '北京', 'spell': 'BJ'}, {
    'name': '毕节',
    'spell': 'BJ'
  }, {'name': '宝鸡', 'spell': 'BJ'}, {'name': '白山', 'spell': 'BS'}, {'name': '百色', 'spell': 'BS'}, {
    'name': '白沙',
    'spell': 'BS'
  }, {'name': '保山', 'spell': 'BS'}, {'name': '包头', 'spell': 'BT'}, {'name': '保亭', 'spell': 'BT'}, {
    'name': '本溪',
    'spell': 'BX'
  }, {'name': '白银', 'spell': 'BY'}, {'name': '巴音郭楞', 'spell': 'BYGL'}, {'name': '巴彦淖尔', 'spell': 'BYNE'}, {
    'name': '滨州',
    'spell': 'BZ'
  }, {'name': '巴中', 'spell': 'BZ'}, {'name': '亳州市', 'spell': 'BZS'}, {'name': '长春', 'spell': 'CC'}, {
    'name': '承德',
    'spell': 'CD'
  }, {'name': '常德', 'spell': 'CD'}, {'name': '成都', 'spell': 'CD'}, {'name': '昌都', 'spell': 'CD'}, {
    'name': '赤峰',
    'spell': 'CF'
  }, {'name': '昌江', 'spell': 'CJ'}, {'name': '昌吉', 'spell': 'CJ'}, {'name': '澄迈', 'spell': 'CM'}, {
    'name': '长沙',
    'spell': 'CS'
  }, {'name': '楚雄', 'spell': 'CX'}, {'name': '朝阳', 'spell': 'CY'}, {'name': '沧州', 'spell': 'CZ'}, {
    'name': '长治',
    'spell': 'CZ'
  }, {'name': '常州', 'spell': 'CZ'}, {'name': '滁州', 'spell': 'CZ'}, {'name': '池州', 'spell': 'CZ'}, {
    'name': '郴州',
    'spell': 'CZ'
  }, {'name': '潮州', 'spell': 'CZ'}, {'name': '崇左', 'spell': 'CZ'}, {'name': '定安', 'spell': 'DA'}, {
    'name': '丹东',
    'spell': 'DD'
  }, {'name': '东方', 'spell': 'DF'}, {'name': '东莞', 'spell': 'DG'}, {'name': '德宏', 'spell': 'DH'}, {
    'name': '大连',
    'spell': 'DL'
  }, {'name': '大理', 'spell': 'DL'}, {'name': '大庆', 'spell': 'DQ'}, {'name': '迪庆', 'spell': 'DQ'}, {
    'name': '大同',
    'spell': 'DT'
  }, {'name': '定西', 'spell': 'DX'}, {'name': '大兴安岭', 'spell': 'DXAL'}, {'name': '东营', 'spell': 'DY'}, {
    'name': '德阳',
    'spell': 'DY'
  }, {'name': '定州', 'spell': 'DZ'}, {'name': '儋州', 'spell': 'DZ'}, {'name': '达州', 'spell': 'DZ'}, {
    'name': '德州市',
    'spell': 'DZS'
  }, {'name': '鄂尔多斯', 'spell': 'EEDS'}, {'name': '恩施', 'spell': 'ES'}, {'name': '鄂州', 'spell': 'EZ'}, {
    'name': '防城港',
    'spell': 'FCG'
  }, {'name': '抚顺', 'spell': 'FS'}, {'name': '佛山', 'spell': 'FS'}, {'name': '阜新', 'spell': 'FX'}, {
    'name': '阜阳',
    'spell': 'FY'
  }, {'name': '福州', 'spell': 'FZ'}, {'name': '抚州', 'spell': 'FZ'}, {'name': '广安', 'spell': 'GA'}, {
    'name': '贵港',
    'spell': 'GG'
  }, {'name': '桂林', 'spell': 'GL'}, {'name': '果洛', 'spell': 'GL'}, {'name': '甘南', 'spell': 'GN'}, {
    'name': '广元',
    'spell': 'GY'
  }, {'name': '贵阳', 'spell': 'GY'}, {'name': '固原', 'spell': 'GY'}, {'name': '赣州', 'spell': 'GZ'}, {
    'name': '广州',
    'spell': 'GZ'
  }, {'name': '甘孜', 'spell': 'GZ'}, {'name': '淮安', 'spell': 'HA'}, {'name': '淮北', 'spell': 'HB'}, {
    'name': '鹤壁',
    'spell': 'HB'
  }, {'name': '海北', 'spell': 'HB'}, {'name': '河池', 'spell': 'HC'}, {'name': '邯郸', 'spell': 'HD'}, {
    'name': '海东',
    'spell': 'HD'
  }, {'name': '哈尔滨', 'spell': 'HEB'}, {'name': '合肥', 'spell': 'HF'}, {'name': '鹤岗', 'spell': 'HG'}, {
    'name': '黄冈',
    'spell': 'HG'
  }, {'name': '黑河', 'spell': 'HH'}, {'name': '怀化', 'spell': 'HH'}, {'name': '红河', 'spell': 'HH'}, {
    'name': '呼和浩特',
    'spell': 'HHHT'
  }, {'name': '海口', 'spell': 'HK'}, {'name': '呼伦贝尔', 'spell': 'HLBE'}, {'name': '葫芦岛', 'spell': 'HLD'}, {
    'name': '哈密',
    'spell': 'HM'
  }, {'name': '淮南', 'spell': 'HN'}, {'name': '黄南', 'spell': 'HN'}, {'name': '海南', 'spell': 'HN'}, {
    'name': '黄山',
    'spell': 'HS'
  }, {'name': '黄石', 'spell': 'HS'}, {'name': '和田', 'spell': 'HT'}, {'name': '海西', 'spell': 'HX'}, {
    'name': '衡阳',
    'spell': 'HY'
  }, {'name': '河源', 'spell': 'HY'}, {'name': '杭州', 'spell': 'HZ'}, {'name': '湖州', 'spell': 'HZ'}, {
    'name': '菏泽',
    'spell': 'HZ'
  }, {'name': '惠州', 'spell': 'HZ'}, {'name': '贺州', 'spell': 'HZ'}, {'name': '汉中', 'spell': 'HZ'}, {
    'name': '吉安',
    'spell': 'JA'
  }, {'name': '晋城', 'spell': 'JC'}, {'name': '金昌', 'spell': 'JC'}, {'name': '景德镇', 'spell': 'JDZ'}, {
    'name': '金华',
    'spell': 'JH'
  }, {'name': '九江', 'spell': 'JJ'}, {'name': '吉林', 'spell': 'JL'}, {'name': '荆门', 'spell': 'JM'}, {
    'name': '江门',
    'spell': 'JM'
  }, {'name': '佳木斯', 'spell': 'JMS'}, {'name': '济南', 'spell': 'JN'}, {'name': '济宁', 'spell': 'JN'}, {
    'name': '酒泉',
    'spell': 'JQ'
  }, {'name': '鸡西', 'spell': 'JX'}, {'name': '嘉兴', 'spell': 'JX'}, {'name': '济源', 'spell': 'JY'}, {
    'name': '揭阳',
    'spell': 'JY'
  }, {'name': '嘉峪关', 'spell': 'JYG'}, {'name': '晋中', 'spell': 'JZ'}, {'name': '锦州', 'spell': 'JZ'}, {
    'name': '焦作',
    'spell': 'JZ'
  }, {'name': '荆州', 'spell': 'JZ'}, {'name': '开封', 'spell': 'KF'}, {'name': '克拉玛依', 'spell': 'KLMY'}, {
    'name': '昆明',
    'spell': 'KM'
  }, {'name': '喀什', 'spell': 'KS'}, {'name': '克孜勒', 'spell': 'KZL'}, {'name': '六安', 'spell': 'LA'}, {
    'name': '来宾',
    'spell': 'LB'
  }, {'name': '聊城', 'spell': 'LC'}, {'name': '临沧', 'spell': 'LC'}, {'name': '娄底', 'spell': 'LD'}, {
    'name': '乐东',
    'spell': 'LD'
  }, {'name': '廊坊', 'spell': 'LF'}, {'name': '临汾', 'spell': 'LF'}, {'name': '临高', 'spell': 'LG'}, {
    'name': '漯河',
    'spell': 'LH'
  }, {'name': '丽江', 'spell': 'LJ'}, {'name': '吕梁', 'spell': 'LL'}, {'name': '陇南', 'spell': 'LN'}, {
    'name': '六盘水',
    'spell': 'LPS'
  }, {'name': '丽水', 'spell': 'LS'}, {'name': '陵水', 'spell': 'LS'}, {'name': '乐山', 'spell': 'LS'}, {
    'name': '凉山',
    'spell': 'LS'
  }, {'name': '拉萨', 'spell': 'LS'}, {'name': '莱芜', 'spell': 'LW'}, {'name': '临夏', 'spell': 'LX'}, {
    'name': '辽阳',
    'spell': 'LY'
  }, {'name': '辽源', 'spell': 'LY'}, {'name': '龙岩', 'spell': 'LY'}, {'name': '临沂', 'spell': 'LY'}, {
    'name': '洛阳',
    'spell': 'LY'
  }, {'name': '连云港', 'spell': 'LYG'}, {'name': '柳州', 'spell': 'LZ'}, {'name': '泸州', 'spell': 'LZ'}, {
    'name': '林芝',
    'spell': 'LZ'
  }, {'name': '兰州', 'spell': 'LZ'}, {'name': '马鞍山', 'spell': 'MAS'}, {'name': '牡丹江', 'spell': 'MDJ'}, {
    'name': '茂名',
    'spell': 'MM'
  }, {'name': '眉山', 'spell': 'MS'}, {'name': '绵阳', 'spell': 'MY'}, {'name': '梅州', 'spell': 'MZ'}, {
    'name': '宁波',
    'spell': 'NB'
  }, {'name': '南昌', 'spell': 'NC'}, {'name': '南充', 'spell': 'NC'}, {'name': '宁德', 'spell': 'ND'}, {
    'name': '南京',
    'spell': 'NJ'
  }, {'name': '内江', 'spell': 'NJ'}, {'name': '怒江', 'spell': 'NJ'}, {'name': '南宁', 'spell': 'NN'}, {
    'name': '南平',
    'spell': 'NP'
  }, {'name': '那曲', 'spell': 'NQ'}, {'name': '南通', 'spell': 'NT'}, {'name': '南阳', 'spell': 'NY'}, {
    'name': '平顶山',
    'spell': 'PDS'
  }, {'name': '普洱', 'spell': 'PE'}, {'name': '盘锦', 'spell': 'PJ'}, {'name': '平凉', 'spell': 'PL'}, {
    'name': '莆田',
    'spell': 'PT'
  }, {'name': '萍乡', 'spell': 'PX'}, {'name': '濮阳', 'spell': 'PY'}, {'name': '攀枝花', 'spell': 'PZH'}, {
    'name': '青岛',
    'spell': 'QD'
  }, {'name': '黔东南', 'spell': 'QDN'}, {'name': '琼海', 'spell': 'QH'}, {'name': '秦皇岛', 'spell': 'QHD'}, {
    'name': '潜江',
    'spell': 'QJ'
  }, {'name': '曲靖', 'spell': 'QJ'}, {'name': '黔南', 'spell': 'QN'}, {'name': '齐齐哈尔', 'spell': 'QQHE'}, {
    'name': '七台河',
    'spell': 'QTH'
  }, {'name': '黔西南', 'spell': 'QXN'}, {'name': '清远', 'spell': 'QY'}, {'name': '庆阳', 'spell': 'QY'}, {
    'name': '衢州',
    'spell': 'QZ'
  }, {'name': '泉州', 'spell': 'QZ'}, {'name': '钦州', 'spell': 'QZ'}, {'name': '琼中', 'spell': 'QZ'}, {
    'name': '日喀则',
    'spell': 'RKZ'
  }, {'name': '日照', 'spell': 'RZ'}, {'name': '韶关', 'spell': 'SG'}, {'name': '绥化', 'spell': 'SH'}, {
    'name': '上海',
    'spell': 'SH'
  }, {'name': '石家庄', 'spell': 'SJZ'}, {'name': '商洛', 'spell': 'SL'}, {'name': '三明', 'spell': 'SM'}, {
    'name': '三门峡',
    'spell': 'SMX'
  }, {'name': '遂宁', 'spell': 'SN'}, {'name': '山南', 'spell': 'SN'}, {'name': '神农架', 'spell': 'SNJ'}, {
    'name': '四平',
    'spell': 'SP'
  }, {'name': '宿迁', 'spell': 'SQ'}, {'name': '商丘', 'spell': 'SQ'}, {'name': '上饶', 'spell': 'SR'}, {
    'name': '三沙',
    'spell': 'SS'
  }, {'name': '汕头', 'spell': 'ST'}, {'name': '汕尾', 'spell': 'SW'}, {'name': '绍兴', 'spell': 'SX'}, {
    'name': '沈阳',
    'spell': 'SY'
  }, {'name': '松原', 'spell': 'SY'}, {'name': '十堰', 'spell': 'SY'}, {'name': '邵阳', 'spell': 'SY'}, {
    'name': '三亚',
    'spell': 'SY'
  }, {'name': '双鸭山', 'spell': 'SYS'}, {'name': '朔州', 'spell': 'SZ'}, {'name': '苏州', 'spell': 'SZ'}, {
    'name': '宿州',
    'spell': 'SZ'
  }, {'name': '随州', 'spell': 'SZ'}, {'name': '深圳', 'spell': 'SZ'}, {'name': '石嘴山', 'spell': 'SZS'}, {
    'name': '泰安',
    'spell': 'TA'
  }, {'name': '屯昌', 'spell': 'TC'}, {'name': '铜川', 'spell': 'TC'}, {'name': '塔城', 'spell': 'TC'}, {
    'name': '通化',
    'spell': 'TH'
  }, {'name': '天津', 'spell': 'TJ'}, {'name': '通辽', 'spell': 'TL'}, {'name': '铁岭', 'spell': 'TL'}, {
    'name': '铜陵',
    'spell': 'TL'
  }, {'name': '吐鲁番', 'spell': 'TLF'}, {'name': '天门', 'spell': 'TM'}, {'name': '图木舒克', 'spell': 'TMSK'}, {
    'name': '铜仁',
    'spell': 'TR'
  }, {'name': '唐山', 'spell': 'TS'}, {'name': '天水', 'spell': 'TS'}, {'name': '台湾', 'spell': 'TW'}, {
    'name': '太原',
    'spell': 'TY'
  }, {'name': '泰州', 'spell': 'TZ'}, {'name': '台州', 'spell': 'TZ'}, {'name': '文昌', 'spell': 'WC'}, {
    'name': '潍坊',
    'spell': 'WF'
  }, {'name': '乌海', 'spell': 'WH'}, {'name': '芜湖', 'spell': 'WH'}, {'name': '威海', 'spell': 'WH'}, {
    'name': '武汉',
    'spell': 'WH'
  }, {'name': '五家渠', 'spell': 'WJQ'}, {'name': '乌兰察布', 'spell': 'WLCB'}, {
    'name': '乌鲁木齐',
    'spell': 'WLMQ'
  }, {'name': '万宁', 'spell': 'WN'}, {'name': '渭南', 'spell': 'WN'}, {'name': '文山', 'spell': 'WS'}, {
    'name': '武威',
    'spell': 'WW'
  }, {'name': '无锡', 'spell': 'WX'}, {'name': '温州', 'spell': 'WZ'}, {'name': '梧州', 'spell': 'WZ'}, {
    'name': '吴忠',
    'spell': 'WZ'
  }, {'name': '五指山', 'spell': 'WZS'}, {'name': '兴安', 'spell': 'XA'}, {'name': '西安', 'spell': 'XA'}, {
    'name': '宣城',
    'spell': 'XC'
  }, {'name': '许昌', 'spell': 'XC'}, {'name': '孝感', 'spell': 'XG'}, {'name': '香港', 'spell': 'XG'}, {
    'name': '辛集',
    'spell': 'XJ'
  }, {'name': '锡林郭勒', 'spell': 'XLGL'}, {'name': '厦门', 'spell': 'XM'}, {'name': '咸宁', 'spell': 'XN'}, {
    'name': '西宁',
    'spell': 'XN'
  }, {'name': '西双版纳', 'spell': 'XSBN'}, {'name': '邢台', 'spell': 'XT'}, {'name': '仙桃', 'spell': 'XT'}, {
    'name': '湘潭',
    'spell': 'XT'
  }, {'name': '新乡', 'spell': 'XX'}, {'name': '湘西', 'spell': 'XX'}, {'name': '新余', 'spell': 'XY'}, {
    'name': '信阳',
    'spell': 'XY'
  }, {'name': '襄阳', 'spell': 'XY'}, {'name': '咸阳', 'spell': 'XY'}, {'name': '忻州', 'spell': 'XZ'}, {
    'name': '徐州',
    'spell': 'XZ'
  }, {'name': '雅安', 'spell': 'YA'}, {'name': '延安', 'spell': 'YA'}, {'name': '延边', 'spell': 'YB'}, {
    'name': '宜宾',
    'spell': 'YB'
  }, {'name': '运城', 'spell': 'YC'}, {'name': '伊春', 'spell': 'YC'}, {'name': '盐城', 'spell': 'YC'}, {
    'name': '宜春',
    'spell': 'YC'
  }, {'name': '宜昌', 'spell': 'YC'}, {'name': '银川', 'spell': 'YC'}, {'name': '云浮', 'spell': 'YF'}, {
    'name': '阳江',
    'spell': 'YJ'
  }, {'name': '营口', 'spell': 'YK'}, {'name': '玉林', 'spell': 'YL'}, {'name': '榆林', 'spell': 'YL'}, {
    'name': '伊犁',
    'spell': 'YL'
  }, {'name': '阳泉', 'spell': 'YQ'}, {'name': '玉树', 'spell': 'YS'}, {'name': '鹰潭', 'spell': 'YT'}, {
    'name': '烟台',
    'spell': 'YT'
  }, {'name': '玉溪', 'spell': 'YX'}, {'name': '岳阳', 'spell': 'YY'}, {'name': '益阳', 'spell': 'YY'}, {
    'name': '扬州',
    'spell': 'YZ'
  }, {'name': '永州', 'spell': 'YZ'}, {'name': '淄博', 'spell': 'ZB'}, {'name': '自贡', 'spell': 'ZG'}, {
    'name': '珠海',
    'spell': 'ZH'
  }, {'name': '镇江', 'spell': 'ZJ'}, {'name': '湛江', 'spell': 'ZJ'}, {'name': '张家界', 'spell': 'ZJJ'}, {
    'name': '张家口',
    'spell': 'ZJK'
  }, {'name': '周口', 'spell': 'ZK'}, {'name': '驻马店', 'spell': 'ZMD'}, {'name': '肇庆', 'spell': 'ZQ'}, {
    'name': '重庆',
    'spell': 'ZQ'
  }, {'name': '舟山', 'spell': 'ZS'}, {'name': '中山', 'spell': 'ZS'}, {'name': '昭通', 'spell': 'ZT'}, {
    'name': '中卫',
    'spell': 'ZW'
  }, {'name': '资阳', 'spell': 'ZY'}, {'name': '遵义', 'spell': 'ZY'}, {'name': '张掖', 'spell': 'ZY'}, {
    'name': '漳州',
    'spell': 'ZZ'
  }, {'name': '枣庄', 'spell': 'ZZ'}, {'name': '郑州', 'spell': 'ZZ'}, {'name': '株洲', 'spell': 'ZZ'}]
  ,
};
export default data;
