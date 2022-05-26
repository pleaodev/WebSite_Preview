//Insert URL
new Vue({
	el: '#webSitePreviewApp',
	data: {
		urlPreview: ''
	},
	methods: {
		changeUrl(event){
			this.urlPreview = event.target.value
		}
	}
})

