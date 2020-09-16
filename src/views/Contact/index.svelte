<script>
  import AdvancedFields from './AdvancedFields.svelte';
  import RequiredFields from './RequiredFields.svelte';
  import InputField from '../../components/ui/form/InputField.svelte';

  import { fly } from 'svelte/transition';

  // routeParams.id = company id from uri
  export let routeParams;

  let showAdvancedFields = false;

  const changeForm = () => {
    showAdvancedFields = !showAdvancedFields;
  }
</script>

<h2>Edit Data</h2>
<p>Select Form Type</p>

<InputField type="radio" name="formType" value="default" id="default" label="Default" onChangeHandler="{changeForm}"/>
<InputField type="radio" name="formType" value="advanced" id="advanced" label="Advanced" onChangeHandler="{changeForm}"/>

<hr>

<form>
  <RequiredFields/>
  {#if showAdvancedFields}
  <div transition:fly="{{ y: 150, duration: 500 }}">
    <AdvancedFields/>
  </div>
  {/if}
</form>
