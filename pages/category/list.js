let App = getApp();

Page({
  data: {
    searchColor: "rgba(0,0,0,0.4)",
    searchSize: "15",
    searchName: "搜索商品",

    scrollHeight: null,
    showView: false,
    arrange: "",

    sortType: 'all',    // 排序类型
    sortPrice: false,   // 价格从低到高

    option: {},
    list: {}, 
    listone: [{ "goods_id": '1', 'goods_name': "促销", 'goods_price': '5.6', 'image': ['image/templatemo_image_02.jpg', 'image/templatemo_image_02.jpg']},
      { "goods_id": '2', 'goods_name': "新品", 'goods_price': '4.8', 'image': ['image/templatemo_image_02.jpg', 'image/templatemo_image_02.jpg']},
      { "goods_id": '3', 'goods_name': "玫瑰", 'goods_price': '99', 'image': ['image/templatemo_image_02.jpg', 'image/templatemo_image_02.jpg']},
      { "goods_id": '4', 'goods_name': "菊类", 'goods_price': '30', 'image': ['image/templatemo_image_02.jpg', 'image/templatemo_image_02.jpg'] },
      { "goods_id": '5', 'goods_name': "永生花", 'goods_price': '25', 'image': ['image/templatemo_image_02.jpg', 'image/templatemo_image_02.jpg']},
      { "goods_id": '6', 'goods_name': "满天星", 'goods_price': '18', 'image': ['image/templatemo_image_02.jpg', 'image/templatemo_image_02.jpg'] },
      { "goods_id": '7', 'goods_name': "配草配叶", 'goods_price': '66', 'image': ['image/templatemo_image_02.jpg', 'image/templatemo_image_02.jpg'] },
      { "goods_id": '8', 'goods_name': "其他花材", 'goods_price': '15', 'image': ['image/templatemo_image_02.jpg', 'image/templatemo_image_02.jpg']},
      { "goods_id": '9', 'goods_name': "盆栽", 'goods_price': '120', 'image': ['image/templatemo_image_02.jpg', 'image/templatemo_image_02.jpg']},
      { "goods_id": '10', 'goods_name': "花盆", 'goods_price': '90', 'image': ['image/templatemo_image_02.jpg', 'image/templatemo_image_02.jpg']}],
      
    listtwo: {},
    listthree: {},

    noList: true,
    no_more: false,

    page: 1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    let _this = this;

    // 设置商品列表高度
    _this.setListHeight();

    // 记录option
    _this.setData({ option}, function () {
      // 获取商品列表
      _this.getGoodsList(true);
    });

  },

  /**
   * 获取商品列表
   */
  getGoodsList: function (is_super, page) {
    debugger
    let _this = this;
    let category_id= this.data.option.category_id || 0;
    if (category_id===1) {
      let resultList = data.listone;
        if (is_super === true || typeof dataList.data === 'undefined') {
          // typeof dataList.data === 'undefined'
          _this.setData({ list: resultList, noList: false });
        } else {
          _this.setData({ 'list.data': dataList.data.concat(resultList.data) });
        }
      }
  },

  /**
   * 设置商品列表高度
   */
  setListHeight: function () {
    let _this = this;
    wx.getSystemInfo({
      success: function (res) {
        _this.setData({
          scrollHeight: res.windowHeight - 90,
        });
      }
    });
  },

  /**
   * 切换排序方式
   */
  switchSortType: function (e) {
    let _this = this
      , newSortType = e.currentTarget.dataset.type
      , newSortPrice = newSortType === 'price' ? !this.data.sortPrice : true;

    this.setData({
      list: {},
      page: 1,
      sortType: newSortType,
      sortPrice: newSortPrice
    }, function () {
      // 获取商品列表
      _this.getGoodsList(true);
    });
  },

  /**
   * 跳转筛选
   */
  toSynthesize: function (t) {
    wx.navigateTo({
      url: "../category/screen?objectId="
    });
  },

  /**
   * 切换列表显示方式
   */
  onChangeShowState: function () {
    let _this = this;
    _this.setData({
      showView: !_this.data.showView,
      arrange: _this.data.arrange ? "" : "arrange"
    });
  },

  /**
   * 下拉到底加载数据
   */
  bindDownLoad: function () {
    // 已经是最后一页
    if (this.data.page >= this.data.list.last_page) {
      this.setData({ no_more: true });
      return false;
    }
    this.getGoodsList(false, ++this.data.page);
  },

  /**
   * 设置分享内容
   */
  onShareAppMessage: function () {
    return {
      title: "全部分类",
      desc: "",
      path: "/pages/category/index"
    };
  },

});
