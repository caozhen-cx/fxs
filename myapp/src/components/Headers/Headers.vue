<template>
    <div class="head">
        <img src="@/assets/img/logo.png" alt="">
        <div class="center">
            <slot name="head_Center"></slot>
        </div>
        <div class="right">
            <span>
                <slot name="head_right"></slot>
            </span>
            <span><i class="iconfont icon-nav"></i>导航</span>
        </div>
    </div>
</template>

<script>
import './header.css'
export default {

}
</script>
