<template>
	<nut-swiper pagination-color="#426543" auto-play="3000">
		<nut-swiper-item v-for="item in list" :key="item">
			{{ item }}
		</nut-swiper-item>
	</nut-swiper>
</template>
<script lang="ts">
import { reactive, toRefs, onMounted } from 'vue';
export default {
	setup() {
		const state = reactive({
			page: 2,
			list: [] as string[]
		});
		onMounted(() => {
			setTimeout(() => {
				state.list = ['1', '2', '3', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4'];
			}, 3000);
		});
		return { ...toRefs(state) };
	}
};
</script>
<style lang="scss">
.nut-swiper-item {
	line-height: 150px;
	img {
		width: 100%;
		height: 100%;
	}
}
</style>
