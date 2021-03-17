<template>
    <div>
        <content-header />
        <!-- Main content -->
        <section class="content">
        <div class="container-fluid">
            <!-- Small boxes (Stat box) -->
            <secondary-header/>
            <!-- /.row -->
            <!-- Main row -->
            
            <!-- /.row (main row) -->
        </div><!-- /.container-fluid -->
        </section>
        <!-- /.content -->
    </div>
</template>
<script>
import secondaryHeader from '../header/secondaryHeader'; 
import contentHeader from '../header/contentHeader';
export default {
     components : {
         secondaryHeader,
         contentHeader
     }
}
</script>