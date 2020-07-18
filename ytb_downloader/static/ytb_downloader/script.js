$(function() {
    
    $('#download').click(function(e) {
        e.preventDefault()
    var $crf_token = $('[name="csrfmiddlewaretoken"]').attr('value');

    let formData = {
        'url'      : $('#inputurl').val(),
    };
    $.ajax({
        url:"/api/downloader/youtube2/",
        async:true,
        headers:{"X-CSRFToken": $crf_token},
        dataType: "json",
        type: "POST",
        data: formData,
        success: function( data ) {
            if (data['error'] == "0"){
                var name = data['name']
                $('#video_result').text(name)
                $.each(data['arr'], function( index, value ) {
                    $("#video_result").append('<br/><a href="'+value.url+'" target="blank" >' + value.ext + " - " +   value.format_note + "</a>");

                    // $("#video_link").attr("href", value.url)
                    // $("#video_link").html( value.ext + " - " +   value.format_note)
                  });
                // for (x in data['arr'])
                // {   console.log(x)
                    
                //     $("#video_link").attr("href", x['url'])
                //     $("#video_link").attr("text", x['ext'])
                // }

                // window.open('/static/' + name)
                // $.fileDownload('/static/' + name)
                // .done(function () { alert('File download a success!'); })
                // .fail(function () { alert('File download failed!'); });


            }
        },
        error: function(data){
            console.log(data)
        }
    });
});



function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:video/mp4;' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }
  

});