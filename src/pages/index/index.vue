<template>
	<view style="margin-top: 10rpx"><nut-button type="primary" @click="datepicker">datepciker示例</nut-button></view>

	<view style="margin-top: 10rpx">
		<nut-button type="primary" @click="dialog">Dialog对话框示例</nut-button>
	</view>

	<view style="margin-top: 10rpx">
		<nut-button type="primary" @click="menu">Menu菜单示例</nut-button>
	</view>

	<view style="margin-top: 10rpx">
		<nut-button type="primary" @click="uploader">uploader上传</nut-button>
	</view>

	<view style="margin-top: 10rpx">
		<nut-button type="primary" @click="avatar">avatar</nut-button>
	</view>

	<view style="margin-top: 10rpx">
		<nut-button type="primary" @click="tabs">tabs</nut-button>
	</view>

	<view style="margin-top: 10rpx">
		<nut-button type="primary" @click="swiper">swiper</nut-button>
	</view>
</template>

<script setup lang="ts">
const datepicker = function () {
	uni.navigateTo({
		url: '/pages/nutui/datepicker/datepicker'
	});
};
const dialog = function () {
	uni.navigateTo({
		url: '/pages/nutui/dialog/dialog'
	});
};
const menu = function () {
	uni.navigateTo({
		url: '/pages/nutui/menu/menu'
	});
};
const uploader = function () {
	uni.navigateTo({
		url: '/pages/nutui/uploader/uploader'
	});
};

const avatar = function () {
	uni.navigateTo({
		url: '/pages/nutui/avatar/avatar'
	});
};

const tabs = function () {
	uni.navigateTo({
		url: '/pages/nutui/tabs/tabs'
	});
};

const swiper = function () {
	uni.navigateTo({
		url: '/pages/nutui/swiper/swiper'
	});
};
</script>

<style></style>
