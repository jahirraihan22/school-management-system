<template>
  <div class="wrapper">

  <!-- Navbar -->
  <navbar/>
  <!-- /.navbar -->

  <!-- Main Sidebar Container -->
  <sidebar/>

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <!-- <content-header /> -->
    <!-- /.content-header -->
    <dashboard-content />
    
  </div>
  <!-- /.content-wrapper -->
  <footer class="main-footer">
    <strong>Copyright &copy; 2014-2019 <a href="http://adminlte.io">AdminLTE.io</a>.</strong>
    All rights reserved.
    <div class="float-right d-none d-sm-inline-block">
      <b>Version</b> 3.0.5
    </div>
  </footer>

  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
  </aside>
  <!-- /.control-sidebar -->
</div>
</template>
<script>
import navbar from './header/navbar';
import sidebar from './sidebar/sidebar';
import dashboardContent from './dashboard/dashboardContent';
export default {
    components : {
      navbar,
      sidebar,
      dashboardContent,
      // contentHeader
    }
}
</script>