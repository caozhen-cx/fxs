<template>
  <div class="comment">
    <!-- 引入头部 -->
    <my-heads>
      <template v-slot:headCenter> 
          业主评价
      </template>
    </my-heads>
    <!-- 评论 -->
    <div class="box">
      <div id="comment">
        <div>
          <p>
            <span><i class="iconfont icon-user"></i> </span>
            <span>*xff</span>
            <span>2016-10-6</span>
            <span>这篇文章很实用，正在装修，刚好可以用来参考一下。</span>
          </p>
        </div>
        <div>
          <p>
            <span><i class="iconfont icon-user"></i> </span>
            <span>*xff</span>
            <span>2016-10-6</span>
            <span>这篇文章很实用，正在装修，刚好可以用来参考一下。</span>
          </p>
        </div>
        <div>
          <p>
            <span><i class="iconfont icon-user"></i> </span>
            <span>*xff</span>
            <span>2016-10-6</span>
            <span>这篇文章很实用，正在装修，刚好可以用来参考一下。</span>
          </p>
        </div>
        <div>
          <p>
            <span><i class="iconfont icon-user"></i> </span>
            <span>*xff</span>
            <span>2016-10-6</span>
            <span>这篇文章很实用，正在装修，刚好可以用来参考一下。</span>
          </p>
        </div>
        <div>
          <p>
            <span><i class="iconfont icon-user"></i> </span>
            <span>*xff</span>
            <span>2016-10-6</span>
            <span>这篇文章很实用，正在装修，刚好可以用来参考一下。</span>
          </p>
        </div>
        <div>
          <p>
            <span><i class="iconfont icon-user"></i> </span>
            <span>*xff</span>
            <span>2016-10-6</span>
            <span>这篇文章很实用，正在装修，刚好可以用来参考一下。</span>
          </p>
        </div>
      </div>
      <div class="msg">
        <div>上一页</div>
        <div>2/30</div>
        <div>下一页</div>
      </div>
      <div class="write">
        <i class="iconfont icon-pencle"></i>
      </div>
    </div>

    <my-footer /> 
     <my-ftel />
  </div>
</template>


<style lang='scss' scoped>
#comment {
  width: 100%;
  //   border: 0.01rem solid red;
  position: relative;
  top: 1.5rem;
  background: #fff;
  div:nth-child(1) {
    width: 95%;
    height: 2.3rem;
    position: absolute;
    border-bottom: 0.01rem solid #ccc;
    top: 0rem;
    left: 50%;
    transform: translateX(-50%);
    p:nth-child(1) {
      margin-top: 0.3rem;
      span:nth-child(1) {
        display: block;
        width: 0.6rem;
        height: 0.6rem;
        background: #ccc;
        border-radius: 50%;
        position: absolute;
        top: 0.2rem;
        i {
          font-size: 0.45rem;
          color: white;
          position: absolute;
          bottom: 0rem;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      span:nth-child(2) {
        position: absolute;
        left: 0.8rem;
        font-size: 0.36rem;
        color: #39c894;
      }
      span:nth-child(3) {
        position: absolute;
        right: 0;
        color: #ccc;
        font-size: 0.32rem;
      }
      span:nth-child(4) {
        font-size: 0.35rem;
        position: absolute;
        top: 1rem;
      }
    }
  }
  div:nth-child(2) {
    width: 95%;
    height: 2.3rem;
    position: absolute;
    border-bottom: 0.01rem solid #ccc;
    top: 2.3rem;
    left: 50%;
    transform: translateX(-50%);
    p:nth-child(1) {
      margin-top: 0.3rem;
      span:nth-child(1) {
        display: block;
        width: 0.6rem;
        height: 0.6rem;
        background: #ccc;
        border-radius: 50%;
        position: absolute;
        top: 0.2rem;
        i {
          font-size: 0.45rem;
          color: white;
          position: absolute;
          bottom: 0rem;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      span:nth-child(2) {
        position: absolute;
        left: 0.8rem;
        font-size: 0.36rem;
        color: #39c894;
      }
      span:nth-child(3) {
        position: absolute;
        right: 0;
        color: #ccc;
        font-size: 0.32rem;
      }
      span:nth-child(4) {
        font-size: 0.35rem;
        position: absolute;
        top: 1rem;
      }
    }
  }

  div:nth-child(3) {
    width: 95%;
    height: 2.3rem;
    position: absolute;
    border-bottom: 0.01rem solid #ccc;
    top: 4.6rem;
    left: 50%;
    transform: translateX(-50%);
    p:nth-child(1) {
      margin-top: 0.3rem;
      span:nth-child(1) {
        display: block;
        width: 0.6rem;
        height: 0.6rem;
        background: #ccc;
        border-radius: 50%;
        position: absolute;
        top: 0.2rem;
        i {
          font-size: 0.45rem;
          color: white;
          position: absolute;
          bottom: 0rem;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      span:nth-child(2) {
        position: absolute;
        left: 0.8rem;
        font-size: 0.36rem;
        color: #39c894;
      }
      span:nth-child(3) {
        position: absolute;
        right: 0;
        color: #ccc;
        font-size: 0.32rem;
      }
      span:nth-child(4) {
        font-size: 0.35rem;
        position: absolute;
        top: 1rem;
      }
    }
  }
  div:nth-child(4) {
    width: 95%;
    height: 2.3rem;
    position: absolute;
    border-bottom: 0.01rem solid #ccc;
    top: 6.9rem;
    left: 50%;
    transform: translateX(-50%);
    p:nth-child(1) {
      margin-top: 0.3rem;
      span:nth-child(1) {
        display: block;
        width: 0.6rem;
        height: 0.6rem;
        background: #ccc;
        border-radius: 50%;
        position: absolute;
        top: 0.2rem;
        i {
          font-size: 0.45rem;
          color: white;
          position: absolute;
          bottom: 0rem;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      span:nth-child(2) {
        position: absolute;
        left: 0.8rem;
        font-size: 0.36rem;
        color: #39c894;
      }
      span:nth-child(3) {
        position: absolute;
        right: 0;
        color: #ccc;
        font-size: 0.32rem;
      }
      span:nth-child(4) {
        font-size: 0.35rem;
        position: absolute;
        top: 1rem;
      }
    }
  }
  div:nth-child(5) {
    width: 95%;
    height: 2.3rem;
    position: absolute;
    border-bottom: 0.01rem solid #ccc;
    top: 9.2rem;
    left: 50%;
    transform: translateX(-50%);
    p:nth-child(1) {
      margin-top: 0.3rem;
      span:nth-child(1) {
        display: block;
        width: 0.6rem;
        height: 0.6rem;
        background: #ccc;
        border-radius: 50%;
        position: absolute;
        top: 0.2rem;
        i {
          font-size: 0.45rem;
          color: white;
          position: absolute;
          bottom: 0rem;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      span:nth-child(2) {
        position: absolute;
        left: 0.8rem;
        font-size: 0.36rem;
        color: #39c894;
      }
      span:nth-child(3) {
        position: absolute;
        right: 0;
        color: #ccc;
        font-size: 0.32rem;
      }
      span:nth-child(4) {
        font-size: 0.35rem;
        position: absolute;
        top: 1rem;
      }
    }
  }
  div:nth-child(6) {
    width: 95%;
    height: 2.3rem;
    position: absolute;
    border-bottom: 0.01rem solid #ccc;
    top: 11.5rem;
    left: 50%;
    transform: translateX(-50%);
    p:nth-child(1) {
      margin-top: 0.3rem;
      span:nth-child(1) {
        display: block;
        width: 0.6rem;
        height: 0.6rem;
        background: #ccc;
        border-radius: 50%;
        position: absolute;
        top: 0.2rem;
        i {
          font-size: 0.45rem;
          color: white;
          position: absolute;
          bottom: 0rem;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      span:nth-child(2) {
        position: absolute;
        left: 0.8rem;
        font-size: 0.36rem;
        color: #39c894;
      }
      span:nth-child(3) {
        position: absolute;
        right: 0;
        color: #ccc;
        font-size: 0.32rem;
      }
      span:nth-child(4) {
        font-size: 0.35rem;
        position: absolute;
        top: 1rem;
      }
    }
  }
}
.msg {
  width: 95%;
  left: 50%;
  transform: translateX(-50%);
  position: relative;
  top: 16rem;
  height: 1.1rem;
  border: 0.01rem solid #ccc;
  display: flex;
  div {
    text-align: center;
    line-height: 1.1rem;
  }
  div:nth-child(1) {
    flex: 0.333;
    background: #39c894;
    color: white;
  }
  div:nth-child(2) {
    flex: 0.333;
  }
  div:nth-child(3) {
    flex: 0.333;
    background: #39c894;
    color: white;
  }
}
.write {
  position: fixed;
  width: 1rem;
  height: 1rem;
  background: #1b9af7;
  right: 0.2rem;
  bottom: 3.5rem;
  border-radius: 50%;
  color: white;
  border: 1px solid #eee;
  text-align: center;
  line-height: 1rem;
  i {
    font-size: 0.5rem;
  }
}
.box {
  height: 17.4rem;
}
.comment>div {
  background: #fff;
}
</style>
