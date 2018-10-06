##input输入框组件使用

**下载好文件，并放在组件文件夹（这里我习惯在pages目录下新建一个views文件夹来存放我的组件）**

######使用
1. 在要使用页面的json文件中用"usingComponents"（建议找文件的时候用绝对路径，仅仅是为了其他页面要用的时候可以直接复制过去）
```json
  	{
  		"navigationBarTitleText": "首页",
  		"usingComponents": {
    		"wz_put": "/pages/views/wz_put/wz_put"
  		}
	}
```

2. 在要使用的页面的json引入了以后，上面引入后我们命名为wz_put，所以直接在页面中使用<wz_put></wz_put>组件就可以了。
```html
<view>
  <wz_put put_num="8" hei="80" cursor_color="#666" bindputChange="putChange" boxr_color="#f0f" color="#f00"></wz_put>
</view>
```

#####属性

1. put_num : 属性值为number;表示输入框的个数

2. hei : 设置输入框的高度（默认值为80rpx）;单位也是rpx.(说明一下，没有设置输入框宽度的属性，是用过外面的view的宽度每个输入框平分)。

3. bg_c : 设置整体的背景颜色，为字符串（#000000这样的格式），默认值为"#fff".

4. cursor_color : 设置光标的颜色(默认值为"#666").

5. boxr_color : 输入款分割虚线的颜色(默认值为"#666").

6. put_value : 直接赋值给输入框（默认值为空）.

#####方法

1. putChange ： 监听输入框的变化.


**组件如果有什么问题或者要需要改进的地方，欢迎私聊 qq:2947487123**






