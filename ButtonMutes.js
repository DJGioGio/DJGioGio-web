$('#audio-control').click(function(){
    if( $("#bgm").prop('muted') ) {
          $("#bgm").prop('muted', false);
          $(this).text('Mute');
      // or toggle class, style it with a volume icon sprite, change background-position
    } else {
      $("#bgm").prop('muted', true);
      $(this).text('Unmute');
    }
});