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
			}
		},

		computed: {
			status () {
				if (this.level <= 3) return 'Normal';
				if (this.level <= 5) return 'Tipsy';
				if (this.level <= 7) return 'Drunk';
				if (this.level <= 9) return 'Danger';
				return 'STOP!';
			},

			colorClass () {
				if (this.level <= 3) return 'status-ok';
				if (this.level <= 5) return 'status-tipsy';
				if (this.level <= 7) return 'status-drunk';
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