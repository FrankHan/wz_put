Component({
  properties: {
    put_num: { //  框的数量
      type: 'number',
      value: 6,
      observer: function(newV,oldV,path) {
        var arr = [];
        arr.length = newV;
        this.setData({
          putArr: arr,
          boxcodeArr: arr
        })
      }
    },
    hei: { //  框的高度
      type: 'number',
      value: 40,
    },
    bg_c: { //  背景颜色
      type: 'string',
      value: "#fff"
    },
    cursor_color: {  //  光标的颜色
      type: "string",
      value: "#666"
    },
    boxr_color: { //  边框颜色
      type: "string",
      value: "#666"
    },
    put_value: { //  赋值给框
      type: 'string',
      value: '',
      observer: function(newV,oldV,pageV) {
        console.log(newV);
        var str = newV;
        str = str.replace(/[\D]/g, '');
        if (str.length > this.data.put_num) {
          str = str.slice(0, this.data.put_num);
        }
        this.setData({
          boxCode: str
        })
        this.writeArr(str);
      }
    }
  },
  data: {
    boxCode: "", //  存放input框的值
    putArr: [], //  存放各个框中的值
    showCursor: false  //  是否聚焦（判断是否出现光标）
  },
  methods: {
    numberChange: function(e) { //  输入框数据改变
      var str = e.detail.value;
      str = str.replace(/[\D]/g, '');
      if (str.length > this.data.put_num) {
        str = str.slice(0, this.data.put_num);
      }
      this.setData({
        boxCode: str
      })
      this.writeArr(str);
      this.triggerEvent("putChange", {value:str});
    },
    showSor: function() { //  获取焦点
      this.setData({
        showCursor: true
      })
    },
    hideSor: function() { //  失去焦点
      this.setData({
        showCursor: false
      })
    },
    writeArr: function(str) { //  写入数据到数组
      var putArr = this.data.putArr;
      for (var i = 0; i < putArr.length; i++) {
        var pathV = "putArr[" + i + "]";
        if (str.charAt(i) || str.charAt(i) == 0) {
          this.setData({
            [pathV]: str.charAt(i)
          })
        } else {
          this.setData({
            [pathV]: ""
          })
        }
      }
    }
  }
})