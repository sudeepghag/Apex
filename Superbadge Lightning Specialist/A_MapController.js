({
    jsLoaded: function(component) {
        component.set("v.jsLoaded", true);
    },
    onPlotMapMarker: function(component, event) {
        var vsObjectId = event.getParam("sObjectId");
        var vlat = event.getParam("lat");
        var vlong = event.getParam("long");
        var vlabel = event.getParam("label");
        console.log("MapController--onPlotMapMarker--"+vsObjectId+ "--"+vlat+"--"+vlong+"--"+vlabel);
        component.set("v.location", {'lat' : vlat, 'long' : vlong});
    }
})