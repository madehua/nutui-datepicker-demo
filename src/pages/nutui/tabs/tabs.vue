<template>
	<nut-tabs v-model="state.tab1value">
		<nut-tab-pane title="Tab 1">Tab 1</nut-tab-pane>
		<nut-tab-pane title="Tab 2">
			<nut-cell :show-icon="true" :isLink="true" @click="switchActionSheet('isVisible1')">
				<span><label>基础用法</label></span>
				<div v-html="state.val"></div>
			</nut-cell>
			<!-- demo 基础用法 -->
			<nut-action-sheet v-model:visible="state.isVisible1" :menu-items="menuItemsOne" @choose="chooseItem"></nut-action-sheet>
		</nut-tab-pane>
		<nut-tab-pane title="Tab 3">Tab 3</nut-tab-pane>
	</nut-tabs>
</template>
<script lang="ts">
import { reactive } from 'vue';
export default {
	setup() {
		const state = reactive({
			tab1value: '0',
			isVisible1: false,
			val: ''
		});
		const menuItemsOne = [
			{
				name: '选项一'
			},
			{
				name: '选项二'
			},
			{
				name: '选项三'
			}
		];
		const switchActionSheet = (param) => {
			state.isVisible1 = !state.isVisible1;
		};
		const chooseItem = (itemParams: any) => {
			state.val = itemParams.name;
		};
		return {
			state,
			switchActionSheet,
			menuItemsOne,
			chooseItem
		};
	}
};
</script>
