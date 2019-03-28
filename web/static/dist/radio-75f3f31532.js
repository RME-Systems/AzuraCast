var player,$player,volume=55,is_playing=!1;function stopAllPlayers(){player.pause(),player.src="",is_playing=!1,$(".btn-audio").each(function(){var e=$(this).removeClass("playing").find("i");e.hasClass("material-icons")&&e.text("play_circle_filled")}),$("#radio-player-controls").removeClass("jp-state-playing")}function setVolume(e){volume=parseInt(e),$(".jp-volume-bar-value").css("width",volume+"%"),$(".jp-volume-range").val(volume),player.volume=Math.min((Math.exp(volume/100)-1)/(Math.E-1),1),store.enabled&&store.set("player_volume",volume)}function playAudio(e){player.src=e,player.play().catch(function(e){console.error(e),stopAllPlayers()})}function handlePlayClick(e){if(btn=$('.btn-audio[data-url="'+e+'"]'),btn.hasClass("playing"))stopAllPlayers();else{is_playing&&stopAllPlayers(),playAudio(e);var l=btn.addClass("playing").find("i");l.hasClass("material-icons")&&l.text("pause_circle_filled")}}$(function(){if(store.enabled&&void 0!==store.get("player_volume")&&(volume=store.get("player_volume",volume)),"undefined"!=typeof URLSearchParams){var e=new URLSearchParams(window.location.search);e.has("volume")&&(volume=parseInt(e.get("volume")))}$(".btn-audio").on("click",function(e){return e.preventDefault(),handlePlayClick($(this).data("url")),!1}),player=document.createElement("audio"),$player=$(player),setVolume(volume),$player.on("play",function(e){is_playing=!0,$(".jp-unmute").hide(),$("#radio-player-controls").addClass("jp-state-playing")}),$player.on("ended",function(e){stopAllPlayers()}),"mediaSession"in navigator&&navigator.mediaSession.setActionHandler("pause",function(){stopAllPlayers()}),$(".jp-pause").on("click",function(e){stopAllPlayers()}),$(".jp-mute").on("click",function(e){setVolume(0)}),$(".jp-unmute").on("click",function(e){setVolume(55)}),$(".jp-volume-full").on("click",function(e){setVolume(100)}),$(".jp-volume-bar").on("click",function(e){var l=$(e.currentTarget),a=l.offset(),o=e.pageX-a.left,n=l.width();l.height(),e.pageY,a.top,l.height();setVolume(Math.round(o/n*100))}),$(".jp-volume-range").on("change",function(e){setVolume($(this).val())})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhZGlvLmpzIl0sIm5hbWVzIjpbInBsYXllciIsIiRwbGF5ZXIiLCJ2b2x1bWUiLCJpc19wbGF5aW5nIiwic3RvcEFsbFBsYXllcnMiLCJwYXVzZSIsInNyYyIsIiQiLCJlYWNoIiwicGxheV9pY29uIiwidGhpcyIsInJlbW92ZUNsYXNzIiwiZmluZCIsImhhc0NsYXNzIiwidGV4dCIsInNldFZvbHVtZSIsIm5ld192b2x1bWUiLCJwYXJzZUludCIsImNzcyIsInZhbCIsIk1hdGgiLCJtaW4iLCJleHAiLCJFIiwic3RvcmUiLCJlbmFibGVkIiwic2V0IiwicGxheUF1ZGlvIiwic291cmNlX3VybCIsInBsYXkiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZVBsYXlDbGljayIsImF1ZGlvX3NvdXJjZSIsImJ0biIsImFkZENsYXNzIiwidW5kZWZpbmVkIiwiZ2V0IiwiVVJMU2VhcmNoUGFyYW1zIiwidXJsUGFyYW1zIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJoYXMiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJoaWRlIiwibmF2aWdhdG9yIiwibWVkaWFTZXNzaW9uIiwic2V0QWN0aW9uSGFuZGxlciIsIiRiYXIiLCJjdXJyZW50VGFyZ2V0Iiwib2Zmc2V0IiwieCIsInBhZ2VYIiwibGVmdCIsInciLCJ3aWR0aCIsImhlaWdodCIsInBhZ2VZIiwidG9wIiwicm91bmQiXSwibWFwcGluZ3MiOiJBQUlBLElBRUlBLE9BQ0FDLFFBSEFDLE9BQVMsR0FDVEMsWUFBYSxFQUlqQixTQUFTQyxpQkFFTEosT0FBT0ssUUFDUEwsT0FBT00sSUFBTSxHQUViSCxZQUFhLEVBRWJJLEVBQUUsY0FBY0MsS0FBSyxXQUNqQixJQUFJQyxFQUFZRixFQUFFRyxNQUFNQyxZQUFZLFdBQVdDLEtBQUssS0FDaERILEVBQVVJLFNBQVMsbUJBQ25CSixFQUFVSyxLQUFLLHdCQUl2QlAsRUFBRSwwQkFBMEJJLFlBQVksb0JBRzVDLFNBQVNJLFVBQVVDLEdBRWZkLE9BQVNlLFNBQVNELEdBRWxCVCxFQUFFLHdCQUF3QlcsSUFBSSxRQUFTaEIsT0FBTyxLQUM5Q0ssRUFBRSxvQkFBb0JZLElBQUlqQixRQUcxQkYsT0FBT0UsT0FBU2tCLEtBQUtDLEtBQUtELEtBQUtFLElBQUlwQixPQUFPLEtBQUssSUFBSWtCLEtBQUtHLEVBQUUsR0FBSSxHQUUxREMsTUFBTUMsU0FDTkQsTUFBTUUsSUFBSSxnQkFBaUJ4QixRQUduQyxTQUFTeUIsVUFBVUMsR0FFZjVCLE9BQU9NLElBQU1zQixFQUNiNUIsT0FBTzZCLE9BQU9DLE1BQU0sU0FBU0MsR0FDekJDLFFBQVFELE1BQU1BLEdBQ2QzQixtQkFJUixTQUFTNkIsZ0JBQWdCQyxHQUlyQixHQUZBQyxJQUFNNUIsRUFBRSx3QkFBd0IyQixFQUFhLE1BRXpDQyxJQUFJdEIsU0FBUyxXQUNiVCxxQkFDRyxDQUNDRCxZQUNBQyxpQkFHSnVCLFVBQVVPLEdBRVYsSUFBSXpCLEVBQVkwQixJQUFJQyxTQUFTLFdBQVd4QixLQUFLLEtBQ3pDSCxFQUFVSSxTQUFTLG1CQUNuQkosRUFBVUssS0FBSyx3QkFLM0JQLEVBQUUsV0FRRSxHQUxJaUIsTUFBTUMsY0FBMENZLElBQS9CYixNQUFNYyxJQUFJLG1CQUMzQnBDLE9BQVNzQixNQUFNYyxJQUFJLGdCQUFpQnBDLFNBSVQsb0JBQXBCcUMsZ0JBQWlDLENBQ3hDLElBQUlDLEVBQVksSUFBSUQsZ0JBQWdCRSxPQUFPQyxTQUFTQyxRQUNoREgsRUFBVUksSUFBSSxZQUNkMUMsT0FBU2UsU0FBU3VCLEVBQVVGLElBQUksWUFJeEMvQixFQUFFLGNBQWNzQyxHQUFHLFFBQVMsU0FBU0MsR0FHakMsT0FGQUEsRUFBRUMsaUJBQ0ZkLGdCQUFnQjFCLEVBQUVHLE1BQU1zQyxLQUFLLFNBQ3RCLElBSVhoRCxPQUFTaUQsU0FBU0MsY0FBYyxTQUNoQ2pELFFBQVVNLEVBQUVQLFFBRVplLFVBQVViLFFBR1ZELFFBQVE0QyxHQUFHLE9BQVEsU0FBU0MsR0FDeEIzQyxZQUFhLEVBRWJJLEVBQUUsY0FBYzRDLE9BQ2hCNUMsRUFBRSwwQkFBMEI2QixTQUFTLHNCQUd6Q25DLFFBQVE0QyxHQUFHLFFBQVMsU0FBU0MsR0FDekIxQyxtQkFHQSxpQkFBa0JnRCxXQUNsQkEsVUFBVUMsYUFBYUMsaUJBQWlCLFFBQVMsV0FDN0NsRCxtQkFLUkcsRUFBRSxhQUFhc0MsR0FBRyxRQUFTLFNBQVNDLEdBQ2hDMUMsbUJBR0pHLEVBQUUsWUFBWXNDLEdBQUcsUUFBUyxTQUFTQyxHQUMvQi9CLFVBQVUsS0FHZFIsRUFBRSxjQUFjc0MsR0FBRyxRQUFTLFNBQVNDLEdBQ2pDL0IsVUFBVSxNQUdkUixFQUFFLG1CQUFtQnNDLEdBQUcsUUFBUyxTQUFTQyxHQUN0Qy9CLFVBQVUsT0FHZFIsRUFBRSxrQkFBa0JzQyxHQUFHLFFBQVMsU0FBU0MsR0FDckMsSUFBSVMsRUFBT2hELEVBQUV1QyxFQUFFVSxlQUNYQyxFQUFTRixFQUFLRSxTQUNkQyxFQUFJWixFQUFFYSxNQUFRRixFQUFPRyxLQUNyQkMsRUFBSU4sRUFBS08sUUFDTFAsRUFBS1EsU0FBV2pCLEVBQUVrQixNQUFRUCxFQUFPUSxJQUNqQ1YsRUFBS1EsU0FFYmhELFVBQVVLLEtBQUs4QyxNQUFPUixFQUFFRyxFQUFLLFFBR2pDdEQsRUFBRSxvQkFBb0JzQyxHQUFHLFNBQVUsU0FBU0MsR0FDeEMvQixVQUFVUixFQUFFRyxNQUFNUyIsImZpbGUiOiJyYWRpby5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUmFkaW8gUGxheWVyIFNjcmlwdFxuICovXG5cbnZhciB2b2x1bWUgPSA1NSxcbiAgICBpc19wbGF5aW5nID0gZmFsc2UsXG4gICAgcGxheWVyLFxuICAgICRwbGF5ZXI7XG5cbmZ1bmN0aW9uIHN0b3BBbGxQbGF5ZXJzKClcbntcbiAgICBwbGF5ZXIucGF1c2UoKTtcbiAgICBwbGF5ZXIuc3JjID0gJyc7XG5cbiAgICBpc19wbGF5aW5nID0gZmFsc2U7XG5cbiAgICAkKCcuYnRuLWF1ZGlvJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHBsYXlfaWNvbiA9ICQodGhpcykucmVtb3ZlQ2xhc3MoJ3BsYXlpbmcnKS5maW5kKCdpJyk7XG4gICAgICAgIGlmIChwbGF5X2ljb24uaGFzQ2xhc3MoJ21hdGVyaWFsLWljb25zJykpIHtcbiAgICAgICAgICAgIHBsYXlfaWNvbi50ZXh0KCdwbGF5X2NpcmNsZV9maWxsZWQnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCgnI3JhZGlvLXBsYXllci1jb250cm9scycpLnJlbW92ZUNsYXNzKCdqcC1zdGF0ZS1wbGF5aW5nJyk7XG59XG5cbmZ1bmN0aW9uIHNldFZvbHVtZShuZXdfdm9sdW1lKVxue1xuICAgIHZvbHVtZSA9IHBhcnNlSW50KG5ld192b2x1bWUpO1xuXG4gICAgJCgnLmpwLXZvbHVtZS1iYXItdmFsdWUnKS5jc3MoJ3dpZHRoJywgdm9sdW1lKyclJyk7XG4gICAgJCgnLmpwLXZvbHVtZS1yYW5nZScpLnZhbCh2b2x1bWUpO1xuXG4gICAgLy8gU2V0IHZvbHVtZSBsb2dhcml0aG1pY2FsbHkgYmFzZWQgb24gb3JpZ2luYWwgaW5wdXQuXG4gICAgcGxheWVyLnZvbHVtZSA9IE1hdGgubWluKChNYXRoLmV4cCh2b2x1bWUvMTAwKS0xKS8oTWF0aC5FLTEpLCAxKTtcblxuICAgIGlmIChzdG9yZS5lbmFibGVkKVxuICAgICAgICBzdG9yZS5zZXQoJ3BsYXllcl92b2x1bWUnLCB2b2x1bWUpO1xufVxuXG5mdW5jdGlvbiBwbGF5QXVkaW8oc291cmNlX3VybClcbntcbiAgICBwbGF5ZXIuc3JjID0gc291cmNlX3VybDtcbiAgICBwbGF5ZXIucGxheSgpLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICBzdG9wQWxsUGxheWVycygpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVQbGF5Q2xpY2soYXVkaW9fc291cmNlKVxue1xuICAgIGJ0biA9ICQoJy5idG4tYXVkaW9bZGF0YS11cmw9XCInK2F1ZGlvX3NvdXJjZSsnXCJdJyk7XG5cbiAgICBpZiAoYnRuLmhhc0NsYXNzKCdwbGF5aW5nJykpIHtcbiAgICAgICAgc3RvcEFsbFBsYXllcnMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaXNfcGxheWluZykge1xuICAgICAgICAgICAgc3RvcEFsbFBsYXllcnMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBsYXlBdWRpbyhhdWRpb19zb3VyY2UpO1xuXG4gICAgICAgIHZhciBwbGF5X2ljb24gPSBidG4uYWRkQ2xhc3MoJ3BsYXlpbmcnKS5maW5kKCdpJyk7XG4gICAgICAgIGlmIChwbGF5X2ljb24uaGFzQ2xhc3MoJ21hdGVyaWFsLWljb25zJykpIHtcbiAgICAgICAgICAgIHBsYXlfaWNvbi50ZXh0KCdwYXVzZV9jaXJjbGVfZmlsbGVkJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiQoZnVuY3Rpb24oKSB7XG5cbiAgICAvLyBDaGVjayB3ZWJzdG9yYWdlIGZvciBleGlzdGluZyB2b2x1bWUgcHJlZmVyZW5jZS5cbiAgICBpZiAoc3RvcmUuZW5hYmxlZCAmJiBzdG9yZS5nZXQoJ3BsYXllcl92b2x1bWUnKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZvbHVtZSA9IHN0b3JlLmdldCgncGxheWVyX3ZvbHVtZScsIHZvbHVtZSk7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgdGhlIHF1ZXJ5IHN0cmluZyBpZiBicm93c2VyIHN1cHBvcnRzIGVhc3kgcXVlcnkgc3RyaW5nIGFjY2Vzcy5cbiAgICBpZiAodHlwZW9mIFVSTFNlYXJjaFBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdmFyIHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gICAgICAgIGlmICh1cmxQYXJhbXMuaGFzKCd2b2x1bWUnKSkge1xuICAgICAgICAgICAgdm9sdW1lID0gcGFyc2VJbnQodXJsUGFyYW1zLmdldCgndm9sdW1lJykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJCgnLmJ0bi1hdWRpbycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBoYW5kbGVQbGF5Q2xpY2soJCh0aGlzKS5kYXRhKCd1cmwnKSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIC8vIENyZWF0ZSBhdWRpbyBlbGVtZW50LlxuICAgIHBsYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2F1ZGlvJyk7XG4gICAgJHBsYXllciA9ICQocGxheWVyKTtcblxuICAgIHNldFZvbHVtZSh2b2x1bWUpO1xuXG4gICAgLy8gSGFuZGxlIGV2ZW50cy5cbiAgICAkcGxheWVyLm9uKCdwbGF5JywgZnVuY3Rpb24oZSkge1xuICAgICAgICBpc19wbGF5aW5nID0gdHJ1ZTtcblxuICAgICAgICAkKCcuanAtdW5tdXRlJykuaGlkZSgpO1xuICAgICAgICAkKCcjcmFkaW8tcGxheWVyLWNvbnRyb2xzJykuYWRkQ2xhc3MoJ2pwLXN0YXRlLXBsYXlpbmcnKTtcbiAgICB9KTtcblxuICAgICRwbGF5ZXIub24oJ2VuZGVkJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBzdG9wQWxsUGxheWVycygpO1xuICAgIH0pO1xuXG4gICAgaWYgKCdtZWRpYVNlc3Npb24nIGluIG5hdmlnYXRvcikge1xuICAgICAgICBuYXZpZ2F0b3IubWVkaWFTZXNzaW9uLnNldEFjdGlvbkhhbmRsZXIoJ3BhdXNlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzdG9wQWxsUGxheWVycygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgYnV0dG9uIGNsaWNrcy5cbiAgICAkKCcuanAtcGF1c2UnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIHN0b3BBbGxQbGF5ZXJzKCk7XG4gICAgfSk7XG5cbiAgICAkKCcuanAtbXV0ZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgc2V0Vm9sdW1lKDApO1xuICAgIH0pO1xuXG4gICAgJCgnLmpwLXVubXV0ZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgc2V0Vm9sdW1lKDU1KTtcbiAgICB9KTtcblxuICAgICQoJy5qcC12b2x1bWUtZnVsbCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgc2V0Vm9sdW1lKDEwMCk7XG4gICAgfSk7XG5cbiAgICAkKCcuanAtdm9sdW1lLWJhcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdmFyICRiYXIgPSAkKGUuY3VycmVudFRhcmdldCksXG4gICAgICAgICAgICBvZmZzZXQgPSAkYmFyLm9mZnNldCgpLFxuICAgICAgICAgICAgeCA9IGUucGFnZVggLSBvZmZzZXQubGVmdCxcbiAgICAgICAgICAgIHcgPSAkYmFyLndpZHRoKCksXG4gICAgICAgICAgICB5ID0gJGJhci5oZWlnaHQoKSAtIGUucGFnZVkgKyBvZmZzZXQudG9wLFxuICAgICAgICAgICAgaCA9ICRiYXIuaGVpZ2h0KCk7XG5cbiAgICAgICAgc2V0Vm9sdW1lKE1hdGgucm91bmQoKHgvdykgKiAxMDApKTtcbiAgICB9KTtcblxuICAgICQoJy5qcC12b2x1bWUtcmFuZ2UnKS5vbignY2hhbmdlJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBzZXRWb2x1bWUoJCh0aGlzKS52YWwoKSk7XG4gICAgfSk7XG5cbn0pO1xuIl19
