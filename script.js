jQuery(document).ready(function(){
    // Accrodion
    $('.according-title a').click(function(e){
        $('.accroding-content').hide(300);
        let targetedAttribute = $(this).attr('href');
        $(targetedAttribute).show(300);
        e.preventDefault()
    });

    // $('.accroding-content a').click(function(){
    //     let targetedAttribute = $(this).attr('href');
    //     $(targetedAttribute).hide(300);
    //     return false;
    // });

    // Tabs
    
    let tabSelector = '.tabLists li a'
    $(tabSelector).click(function(event){
        event.preventDefault();
        let target = $(this).attr('href')
        $('.tabContent').hide();
        $(target).show();

        $(tabSelector).removeClass('activeTab')
        $(this).addClass('activeTab')
    })

});
