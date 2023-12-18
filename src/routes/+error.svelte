<script>
    import { page } from '$app/stores';
</script>
  
<div>
    <p> Oups an error appear ! </p>
    <p> {$page.status}: {$page.error?.message} </p>
</div>