// script.js

$(function(){
    
//    Draggable Lecture
    
    $('.box').draggable();
    $('#box1').draggable({scroll: true, revert: "invalid"});
    $('#box2').draggable({axis: "x"});
    $('#box3').draggable({axis: "y"});
    $('#box4').draggable({containment: "parent"});

    
//    Droppable Lecture
    
    $('#main').droppable({
        accept: '#box1', 
        drop: function(){
            $(this).text("You dropped the box here");
        }
    });
    
    
// Sortable Lecture
    
    $('#sortable').sortable({connectWith: "#sortableToo", placeholder: "placeholderBox"});
    $('#sortableToo').sortable({connectWith: "#sortable", placeholder: "placeholderBox"});
    
// Accordion Lecture
    
    $('#accordion').accordion( {collapsible: true, heightStyle: "content"} );
    
// Datepicker Lecture
    $('.date').datepicker({
        showOtherMonths: true,
        selectOtherMonths: true,
        showButtonPanel: true,
        changeMonth: true,
        changeYear: true,
//        numberOfMonths: 2
        minDate: -1,
        maxDate: "+1W"
    });
    
// To Do List
    
    $('#todoList ul').sortable({
        items: "li:not(.listTitle,.addItem)",
        connectWith: "ul",
        dropOnEmpty: true,
        placeholder: "emptySpace" 
    });
    
    $('input').keydown(function(e){
        if(e.keyCode == 13){
            var item = $(this).val();
            $(this).parent().parent().append('<li>' + item + '</li>');
            $(this).val('');
        }
    });
    
    
    $('#trash').droppable({
        drop: function(event,ui){
            ui.draggable.remove();
        }
    });
    
    
});