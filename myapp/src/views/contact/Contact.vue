<template>
  <div class="">
    <!-- 联系我们 -->
    <my-heads>
      <template v-slot:headCenter>联系我们 </template>
      <template v-slot:headRight>
        <i class="iconfont icon-user"></i>
        我的
      </template>
    </my-heads>
    <div class="map">
      <div class="baidumap" id="allmap"></div>
    </div>
    <div class="box">
      <ul class="Sudoku">
        <li>
          <div class="icon"><i class="iconfont icon-location"></i></div>
        </li>
        <li>
          <div class="icon">
            <i class="iconfont icon-tel"></i>
          </div>
        </li>
      </ul>
      <div class="word-box">
        <span>
          <p>杭州市滨江区长河街道越</p>
          <p>达巷79号连连大厦A幢301</p>
          <p></p>
        </span>
        <span>
          <p>400-9977-658</p>
        </span>
      </div>
      <div class="Qrcode-box">
        <div class="Qrcode-img">
          <img src="@/assets/img/2.png" alt="" />
        </div>
        <div class="Qrcode-word">
          <p>长按识别二维码关注微信咨询</p>
        </div>
      </div>
    </div>
    <my-footer />
    <my-ftel />

  </div>
</template>

<script>
export default {
  data() {
    return {
      position_NKYYGS: {
        Name: "积云教育",
        address: "积云教育",
        phoneNumber: "(028)84504011",
        bdLNG: 116.224042,
        bdLAT: 40.242001,
      },
    };
  },
  mounted() {
    this.baiduMap();
  },
  methods: {
    baiduMap() {
      var map = new BMap.Map("allmap"); // 创建地图实例
      map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
      map.addControl(new BMap.NavigationControl());
      map.addControl(new BMap.ScaleControl());
      map.addControl(new BMap.OverviewMapControl());
      map.addControl(new BMap.MapTypeControl());
      // map.setMapStyle({ style: 'midnight' }) //地图风格

      map.clearOverlays();
      //将数据遍历
      //自定义信息窗口内容
      var sContent =
        '<div style="width:300px;"><p style="font-size:16px;font-weight:bold;margin-top: 10px;color:#D07852">' +
        this.position_NKYYGS.Name +
        '</p><p style="font-size:13px;margin: 5px 0;">地址：' +
        this.position_NKYYGS.address +
        '</p><p style="font-size:13px;margin: 5px 0;">电话：' +
        this.position_NKYYGS.phoneNumber +
        '</p><p style="font-size:13px;margin: 5px 0;">坐标：' +
        this.position_NKYYGS.bdLNG +
        "," +
        this.position_NKYYGS.bdLAT;
      ("</div>");
      var point = new BMap.Point(
        this.position_NKYYGS.bdLNG,
        this.position_NKYYGS.bdLAT
      ); // 创建点坐标
      var marker = new BMap.Marker(point);
      map.addOverlay(marker);
      map.centerAndZoom(point, 18); // 初始化地图，设置中心点坐标和地图级别
      // //点击图标时候调用信息窗口
      var infoWindow = new BMap.InfoWindow(sContent);
      marker.addEventListener("click", function () {
        this.openInfoWindow(infoWindow);
      });
    },
  },
};
</script>

<style scoped>
.top {
  width: 100%;
  height: 1rem;
}
.baidumap {
  width: 100%;
  height: 5rem;
}
.box {
  width: 100%;
  height: 7rem;
}
.Sudoku {
  display: flex;
  text-align: center;
  background: #fff;
}
.icon {
  width: 1.5rem;
  height: 1.5rem;
  background: #39c894;
  border-radius: 50%;
  line-height: 1.5rem;
  text-align: center;
  color: rgb(255, 255, 255);
  margin-left: 1.5rem;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}
.icon i {
  font-size: 0.75rem;
}
.word-box {
  display: flex;
  background: #fff;
}
.word-box span {
  margin-left: 0.5rem;
}

.Qrcode-box {
  width: 100%;
  height: 4rem;
  margin-top: 0.2rem;
  background: #eaeaea;
  text-align: center;
  padding-top: 0.5rem;
}
.Qrcode-img {
  width: 2rem;
  height: 2rem;
  margin-left: 2.8rem;
}
.Qrcode-img img {
  width: 2rem;
  height: 2rem;
}
.Qrcode-word {
  margin-top: 0.5rem;
}
</style>
