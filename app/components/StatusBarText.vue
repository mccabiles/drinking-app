<template>
	<StackLayout verticalAlignment="center">
		<Label horizontalAlignment="center" text="Current Status:" />
		<Label horizontalAlignment="center"  
			class="font-weight-bold" 
			:class="colorClass"
			:text="status"
		/>
	</StackLayout>
</template>

<script>
	export default {
		props: {
			level: {
				type: Number,
				default: 0
			},

			percentage: {
				type: Number,
				default: 0,
			},
		},

		computed: {
			status () {
				if (this.percentage <= 20) return 'Normal';
				if (this.percentage <= 30) return 'Tipsy';
				if (this.percentage <= 45) return 'Drunk';
				if (this.percentage <= 60) return 'Danger';
				return 'STOP!';
			},

			colorClass () {
				if (this.percentage <= 20) return 'status-ok';
				if (this.percentage <= 30) return 'status-tipsy';
				if (this.percentage <= 45) return 'status-drunk';
				return 'status-danger';
			}
		}
	}
</script>

<style scoped>
	.status-ok {
		color: green;
	}
	.status-tipsy {
		color: orange;
	}
	.status-drunk {
		color: red;
	}
	.status-danger {
		color: red;
	}
</style>