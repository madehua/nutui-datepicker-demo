<template>
	<view>
		<nut-cell title="基础弹框" @click="baseClick"></nut-cell>
		<nut-dialog title="基础弹框" content="这是基础弹框。" v-model:visible="visible1" @cancel="onCancel" @ok="onOk" />
	</view>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const visible1 = ref(false);
const baseClick = (): void => {
	visible1.value = true;
};
const onCancel = () => {
	console.log('event cancel');
};
const onOk = () => {
	console.log('event ok');
};
</script>

<style></style>
