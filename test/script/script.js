$(document).ready(function () {
    var data=[];
    $.ajax({
        url: 'data/data.json',
        dataType:'json',
        success: function (response) {
            data=response;
            var Tabledata=$("#task_table");
            $.each(data, function( index, value ) {
                Tabledata.prepend("<tr><td><b>"+value.name+"</b></td><td>"+value.date+"</td><td><b>"+value.assigned+"</b></td> </tr>");

            });

        }
    });
    $('#Date').keyup(function() {
        $(this).val().trim() ? ($(".taskdateincrct").hide(),$(".taskdate").hide(),$('#Date').removeClass('border')) : '';
    });
    $('#AssignTo').keyup(function() {
        console.log('assigned');
        $(this).val().trim()?($(".taskAssigned").hide(),$('#AssignTo').removeClass('border')):'';
    });
    $('#Taskname').keyup(function(){
        console.log('task name');
        $(this).val().trim()?($(".taskname").hide(),$('#Taskname').removeClass('border')):'';
        var taskNameField = $(this);
        taskNameField.val(taskNameField.val().replace(/[^a-z]/g,'') );
    });

    $("#submit").click(function(){
        var val=false;
        var taskName=$('#Taskname').val().trim();
        var taskDate=$('#Date').val().trim();
        var assignedTo=$('#AssignTo').val().trim();
        var regex = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g;
        taskDate?regex.test(taskDate)?($(".taskdateincrct").hide(),val=true,$('#Date').removeClass('border')):($(".taskdateincrct").show(),$('#Date').addClass('border'),$(".taskdate").hide()):($(".taskdateincrct").hide(),$(".taskdate").show(),$('#Date').addClass('border'));
        taskName?($(".taskname").hide(),$('#Taskname').removeClass('border')):($(".taskname").show(),$('#Taskname').addClass('border'));
        assignedTo?($(".taskAssigned").hide(),$('#AssignTo').removeClass('border')):($(".taskAssigned").show(),$('#AssignTo').addClass('border'));
        if(taskName!='' && taskDate!='' && assignedTo!='' && val){
            var rowCount = $('#task_table tr').length;
            $(".text_field").val("");
            $("#task_table").prepend("<tr><td><b>"+taskName+" #"+(rowCount+1)+"</b></td><td>"+taskDate+"</td><td><b>"+assignedTo+"</b></td> </tr>");
        }
    });

});
