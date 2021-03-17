   @include('layout._layout')
    <body class="hold-transition sidebar-mini layout-fixed">
        <div class="wrapper" id="app">
           <app></app>
            <router-view></router-view>
        </div>
        <footer class="main-footer">
    <strong>Copyright &copy; 2014-2019 <a href="http://adminlte.io">AdminLTE.io</a>.</strong>
    All rights reserved.
    <div class="float-right d-none d-sm-inline-block">
      <b>Version</b> 3.0.5
    </div>
  </footer>
        @include('layout._footer')
    </body>
    </html>