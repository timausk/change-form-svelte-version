<script>
  export let name;
  export let type = 'text';
  export let value;
  export let id;
  export let label;
  export let onChangeHandler = () => {};

  const setLabelText = () => {
    return label || value;
  };

</script>
<label for="{id}">
  <input
    {name} {type} {value} {id}
    on:change={onChangeHandler} on:blure={onChangeHandler}
  >
  {setLabelText()}
</label>
