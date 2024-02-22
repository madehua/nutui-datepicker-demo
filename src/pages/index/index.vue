<template>
	<view class="content">
		<nut-button type="primary" @click="datepicker">datepciker示例</nut-button>
	</view>
</template>

<script setup lang="ts">
const datepicker = function () {
	uni.navigateTo({
		url: '/pages/nutui/datepicker/datepicker'
	});
};
</script>

<style></style>
