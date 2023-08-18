
<script>
import InPlaceEdit from '../../lib/InPlaceEdit.svelte'

	let title = "This is an editable title"
	let summary = "This is some editable text"
	
	function submit(field) {
		return ({detail: newValue}) => {
			// IRL: POST value to server here
			console.log(`updated ${field}, new value is: "${newValue}"`)
		}
	}
</script>

<h1>
	<InPlaceEdit bind:value={title} on:submit={submit('title')}/>	
</h1>

<p>
	<InPlaceEdit bind:value={summary} on:submit={submit('text')}/>	
</p>