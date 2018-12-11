<template>
	<Page class="p-15">
		<StackLayout width="100%">
			<Label text="About" fontWeight="bold"/>
			<Label textWrap="true" :text="textAbout" />
			<Label textWrap="true" :text="textDevs" />
		</StackLayout>
	</Page>
</template>

<script>
	export default {
		data() {
			return {
				textAbout: 'This app was created in partial fulfillment of the requirements set by University of the Philippines for the class CS196 under Prof. Rommel Feria.',
				textDevs: 'Created by: Miguel Cabiles (mccabiles@up.edu.ph), Jonathan Cancio, and Sophia Casiano (mpcasiano@up.edu.ph).',
			};
		},
	}
</script>
