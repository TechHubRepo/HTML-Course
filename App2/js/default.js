window.onload = function() {
    document.getElementById("defaultTab").click();

    $(".w3-bar-item").click(function(event) {
        $(".activeTab").removeClass("activeTab");
        $(event.target).addClass("activeTab");
    });
};