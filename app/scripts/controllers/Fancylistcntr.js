app.controller("Fancylistcntr",["$scope","$http","$timeout","$stateParams","Dialog",function(t,e,n,r,s){var a=r.matchId;t.getFancyOfMatch=function(){e.get("Lstsavemstrcontroller/fancyList/"+a).success(function(e,n,r,s){t.fancyList=e,t.currentPage=1,t.entryLimit=100,t.filteredItems=t.fancyList.length,t.totalItems=t.fancyList.length}).error(function(e,n,r,s){t.ResponseDetails="Data: "+e+"<br />status: "+n+"<br />headers: "+jsonFilter(r)+"<br />config: "+jsonFilter(s)})},t.getFancyOfMatch(),t.setPage=function(e){t.currentPage=e},t.filter=function(){n(function(){t.filteredItems=t.filtered.length},10)},t.sort_by=function(e){t.predicate=e,t.reverse=!t.reverse},t.delFancy=function(n){var r=confirm("Are you sure want to Delete this fancy ?");r&&e.get("Lstsavemstrcontroller/updateFancySatatusNew/"+n+"/2").success(function(e,n,r,a){s.autohide(e.message),t.getFancyOfMatch()}).error(function(e,n,r,s){t.ResponseDetails="Data: "+e+"<br />status: "+n+"<br />headers: "+jsonFilter(r)+"<br />config: "+jsonFilter(s)})}}]),app.filter("startFrom",function(){return function(t,e){return t?(e=+e,t.slice(e)):[]}});