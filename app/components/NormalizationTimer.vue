<template>
	<StackLayout>
		<Label v-if="timeLeft > 0" horizontalAlignment="center">
			<FormattedString>
				<Span text="Time until normal: " />
				<Span :text="timeLeft | timestamp"/>
			</FormattedString>
		</Label>
	</StackLayout>
</template>

<script>
	export default {
		name: 'NormalizationTimer',
		props: {
			min: {
				type: Number,
				default: 3,
			},
			value: Number,
		},

		filters: {
			timestamp(val) {
				const minutes = Math.floor((val % 1) * 60);
				const hours = Math.floor(val);
				return `${hours} hours, ${minutes} minutes`;
			},
		},

		computed: {
			timeLeft() { 
				const left = this.value - this.min;
				if (left <= 0) return 0;
				return left;
			}
		},
	};
</script>
