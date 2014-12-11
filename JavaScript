$('button').on('click', function (e) {
    var t = $('span');
    t.text('Loading...');
    
    navigator.geolocation.getCurrentPosition(function (location) {
        data = {
            'key':		'insertAPIkey',
            'position':	location.coords.latitude + ',' + location.coords.longitude
        };
        
        $.post('http://api.what3words.com/position', data, function(response) {
            t.text(response.words.join('.'));
        });
    });  
});
