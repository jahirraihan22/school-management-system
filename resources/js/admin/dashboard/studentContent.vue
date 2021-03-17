<template>
    <div>
        <content-header :title="title"/>
        <!-- Main content -->
        <section class="content">
        <div class="container-fluid">
            <student-dashboard />
        </div>
        </section>
    </div>
</template>
<script>
import contentHeader from '../header/contentHeader';
import StudentDashboard from './student/studentDashboard.vue';
export default {
    data: function () {
        return{
            title : "Student Manager"
        }
    },
     components : {
        contentHeader,
        StudentDashboard,
     }
}
</script>