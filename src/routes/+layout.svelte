<script>
  export let data;

  import { userRole } from '$stores/userRole';

  userRole.set(data.role);

  const { title, logoPath, description } = data.appConfig || {};
</script>
<slot/>