const App = getApp();

Page({
  data: {
    // 搜索框样式
    searchColor: "rgba(0,0,0,0.4)",
    searchSize: "15",
    searchName: "搜索商品",

    // 列表高度
    scrollHeight: 0,

    curNav: true,
    curIndex: 0,
    changedCateId: 0,
    showGoodsList: [],

    // 分类列表
    list: [{ "category_id": '1', 'name': "促销" },
           { "category_id": '2', 'name': "新品" }, 
           { "category_id": '3', 'name': "玫瑰" }, 
           { "category_id": '4', 'name': "菊类" }, 
           { "category_id": '5', 'name': "永生花" }, 
           { "category_id": '6', 'name': "满天星" },
           { "category_id": '7', 'name': "配草配叶"},
           { "category_id": '8', 'name': "其他花材" },
           { "category_id": '9', 'name': "盆栽" },
           { "category_id": '10', 'name': "花瓶" }],
   //商品列表
    goodslist: [
      { "goods_id": '1', 'goods_name': "多头玫瑰", 'goods_price': '5.6', "category_id": '1', 'image_url':'image/促销1.png'},
      { "goods_id": '2', 'goods_name': "迷你小花盆", 'goods_price': '4.8', "category_id": '1', 'image_url': 'image/促销花瓶.png' },
      { "goods_id": '3', 'goods_name': "粉红佳人永生花", 'goods_price': '10', "category_id": '1', 'image_url': 'image/促销永生花.jpg' },
      { "goods_id": '100', 'goods_name': "新品向日葵", 'goods_price': '8.8', "category_id": '2', 'image_url': 'image/向日葵.jpg' },
      { "goods_id": '6', 'goods_name': "红玫瑰", 'goods_price': '18', "category_id": '3', 'image_url': 'image/红玫瑰.jpg' },
      { "goods_id": '61', 'goods_name': "黄玫瑰", 'goods_price': '8.9', "category_id": '3', 'image_url': 'image/黄玫瑰.jpg' },
      { "goods_id": '62', 'goods_name': "紫玫瑰", 'goods_price': '8', "category_id": '3', 'image_url': 'image/紫玫瑰.jpg' },
      { "goods_id": '63', 'goods_name': "刺玫瑰", 'goods_price': '8', "category_id": '3', 'image_url': 'image/多头玫瑰2.jpg' },
      { "goods_id": '64', 'goods_name': "冰美人", 'goods_price': '9', "category_id": '3', 'image_url': 'image/冰美人.jpg' },
      { "goods_id": '65', 'goods_name': "多头玫瑰", 'goods_price': '5.6', "category_id": '3', 'image_url': 'image/促销1.png' },
      { "goods_id": '66', 'goods_name': "紫色梦幻", 'goods_price': '5.6', "category_id": '3', 'image_url': 'image/紫玫瑰3.jpg'},
      { "goods_id": '67', 'goods_name': "粉色佳人", 'goods_price': '8', "category_id": '3', 'image_url': 'image/粉色3.jpg'},
      { "goods_id": '46', 'goods_name': "紫色小雏菊", 'goods_price': '18', "category_id": '4', 'image_url': 'image/紫色小雏菊.jpg' },
      { "goods_id": '41', 'goods_name': "粉色小雛菊", 'goods_price': '8.9', "category_id": '4', 'image_url': 'image/粉色雏菊.jpg' },
      { "goods_id": '42', 'goods_name': "纽扣菊（绿色）", 'goods_price': '18', "category_id": '4', 'image_url': 'image/纽扣菊.jpg' },
      { "goods_id": '43', 'goods_name': "蓝妹妹", 'goods_price': '18', "category_id": '4', 'image_url': 'image/蓝妹妹.jpg' },
      { "goods_id": '5', 'goods_name': "永生花（迷雾）", 'goods_price': '25', "category_id": '5', 'image_url': 'image/促销永生花.jpg' },  
      { "goods_id": '51', 'goods_name': "永生花（沉睡）", 'goods_price': '25', "category_id": '5', 'image_url': 'image/永生花.jpg' },
      { "goods_id": '52', 'goods_name': "永生花（浪漫）", 'goods_price': '25', "category_id": '5', 'image_url': 'image/永生.jpg' },
      { "goods_id": '8', 'goods_name': "满天星", 'goods_price': '15', "category_id": '6', 'image_url': 'image/粉色.jpg' },
      { "goods_id": '81', 'goods_name': "满天星（五彩）", 'goods_price': '15', "category_id": '6', 'image_url': 'image/满天星.jpg' },
      { "goods_id": '82', 'goods_name': "绿叶子", 'goods_price': '3.2', "category_id": '7', 'image_url': 'image/配草.jpg'},
      { "goods_id": '85', 'goods_name': "金鱼草", 'goods_price': '8.6', "category_id": '7', 'image_url': 'image/配草2.jpg'},
      { "goods_id": '86', 'goods_name': "绿莺", 'goods_price': '12.8', "category_id": '7', 'image_url': 'image/绿荫.jpg'},
      { "goods_id": '9', 'goods_name': "紫妹妹", 'goods_price': '28', "category_id": '8', 'image_url': 'image/templatemo_image_02.jpg' },
      { "goods_id": '91', 'goods_name': "水仙", 'goods_price': '25', "category_id": '8', 'image_url': 'image/templatemo_image_01.jpg' },
      { "goods_id": '95', 'goods_name': "向日葵", 'goods_price': '8.8', "category_id": '8', 'image_url': 'image/向日葵.jpg'},
      { "goods_id": '96', 'goods_name': "橘色桔梗", 'goods_price': '16.8', "category_id": '8', 'image_url': 'image/桔梗花.jpg'},
      { "goods_id": '92', 'goods_name': "花样盆栽", 'goods_price': '120', "category_id": '9', 'image_url': 'image/网红盆栽.jpg' },
      { "goods_id": '94', 'goods_name': "多肉", 'goods_price': '20', "category_id": '9', 'image_url': 'image/多肉.jpg' },
      { "goods_id": '93', 'goods_name': "万重山", 'goods_price': '120', "category_id": '9', 'image_url': 'image/盆栽.jpg' },   
      { "goods_id": '11', 'goods_name': "小花瓶", 'goods_price': '120', "category_id": '10', 'image_url': 'image/瓶1.jpg' },
      { "goods_id": '12', 'goods_name': "七彩花瓶", 'goods_price': '120', "category_id": '10', 'image_url': 'image/七彩.jpg' },
      { "goods_id": '10', 'goods_name': "梦幻小口瓶", 'goods_price': '90', "category_id": '10', 'image_url': 'image/粉嘟嘟.jpg'}],

    // show
    notcont: false
    
  },
  onLoad: function () {
    let _this = this;
    // 设置分类列表高度
    _this.setListHeight();
    // 获取分类列表
    _this.data.selectedCate = _this.data.list[0].category_id;
    //初始化第一次选中的分类
    for (var index in _this.data.goodslist) {
      const goods = _this.data.goodslist[index];
      if (_this.data.selectedCate == goods.category_id) {
        console.log(goods);
        _this.data.showGoodsList.push(goods);
      }
      this.setData({
        showGoodsList: this.data.showGoodsList
      });
    }
    console.log(_this.data.showGoodsList);
  },

  /**
   * 设置分类列表高度
   */
  setListHeight: function () {
    let _this = this;
    wx.getSystemInfo({
      success: function (res) {
        _this.setData({
          scrollHeight: res.windowHeight - 47,
        });
      }
    });
  },

  /**
   * 一级分类：选中分类
   */
  selectNav: function (t) {
    let _this = this;
    _this.data.showGoodsList=[];
    let curNav = t.target.dataset.id,
    curIndex = parseInt(t.target.dataset.index);
    for (var index in _this.data.goodslist) {
      const goods = _this.data.goodslist[index];
      if (curNav== goods.category_id) {
        console.log(goods);
        _this.data.showGoodsList.push(goods);
      }
      this.setData({
        showGoodsList: this.data.showGoodsList
      });
    }

    this.setData({
      curNav,
      curIndex,
      scrollTop: 0
    });
  },

  /**
   * 设置分享内容
   */
  onShareAppMessage: function () {
    return {
      title: "全部分类",
      path: "/pages/category/index"
    };
  }

});