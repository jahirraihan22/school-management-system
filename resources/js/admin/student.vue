<template>
  <div class="wrapper">
    <navbar/>
    <sidebar/>
    <div class="content-wrapper">
      <student-content />
    </div>
  </div>
</template>
<script>
import navbar from './header/navbar';
import sidebar from './sidebar/sidebar';
import dashboardContent from './dashboard/dashboardContent';
import StudentContent from './dashboard/studentContent.vue';
export default {
    components : {
        navbar,
        sidebar,
        dashboardContent,
        StudentContent,
    }
}
</script>