app.controller("Lastdigitcntr",["$scope","$http","$stateParams","sessionService","Dialog","get_userser","$rootScope","deviceDetector","$interval","speech","$state","$filter",function(e,t,a,n,s,o,c,r,i,d,l,u){function h(){if(y){var e={getRows:function(e){setTimeout(function(){var t=y.slice(e.startRow,e.endRow),a=-1;y.length<=e.endRow&&(a=y.length),e.successCallback(t,a)},500)}};m.api.setDatasource(e)}}function I(e){y=e,h()}e.btnPlaceDis=!1,e.matchId=a.matchId,e.FancyID=a.FancyID,e.TypeID=a.TypeID,e.MatchName=a.matchName,e.sportId=a.sportId,e.betValue=0,e.setNumber=function(t){e.digit=parseInt(t),e.showBet=!0,e.betValue=0},e.chk_user=function(){e.userType=sessionService.get('type'),e.UserTypeId=n.get("slctUseTypeID")},o.userChipSetting(function(e){c.userPlcBtn=e,c.MyLenth=e.length}),e.GetBetValue=function(t,a){e.betValue=parseInt(t)+parseInt(a),document.getElementById("betValue").value=e.betValue},e.ClearBet=function(){e.betValue=0,document.getElementById("betValue").value=0},e.CancelBet=function(){e.betValue=0,document.getElementById("betValue").value=0,e.showBet=!1},e.checkValidation=function(e){return""==e.betValue||e.betValue<=0?(s.autohide("You cannot play at zero Stake...",500),$("#betValue").focus(),!1):!0},e.saveLastDigit=function(){e.btnPlaceDis=!0;var i=e.FancyData[0].HeadName,l=a.sportId,u=(n.get("slctUseTypeID"),n.get("slctUseID")),h=sessionService.get('user_id'),y=n.get("slctParantID"),g=document.getElementById("betValue").value,m=document.getElementById("digit").value,p=a.TypeID;if("unknown"==r.device)var D="Desktop";else var D=r.device;var b='" browser: '+r.browser+" browser_version :"+r.browser_version+"  device: "+D+"  OS : "+r.os+" os_version: "+r.os_version+'"',f={userId:u,ParantId:y,loginId:h,betValue:g,FancyID:e.FancyID,matchId:e.matchId,OddValue:m,type:sessionService.get('type'),OddsNumber:m,TypeID:p,HeadName:i,SessInptNo:"null",SessInptYes:"null",sportId:l,FancyId:e.FancyID,pointDiff:"null",deviceInformation:b},v=t.post(BASE_URL+"Lstsavemstrcontroller/getUserInfo/"+n.get("slctUseID"));v.then(function(a){var r=a.data.userInfo,i=parseInt(r[0].mstrlock),l=parseInt(r[0].lgnusrlckbtng),u=parseInt(r[0].lgnusrCloseAc),h=parseInt(r[0].stakeLimit),y=parseInt(r[0].active),g=parseInt(r[0].usetype),m=parseInt(document.getElementById("betValue").value);1==i&&1==l&&1==u&&1==y&&3==g&&(0==h||h>=m)&&parseInt(c.Balance)>=m?e.checkValidation(f)?t({method:"POST",url:BASE_URL+"Lstsavemstrcontroller/saveUserFancy",data:f,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).success(function(t){o.GetWALLibiInfo(n.get("slctUseID")),e.UserBetData=t.UserBetData,e.scorePosition=t.scorePosition,e.showOdd1=!1,e.showEven1=!1,e.showBet=!1,d.sayText("b"),e.btnPlaceDis=!1,I(t.UserBetData)}):e.btnPlaceDis=!1:0==i?(s.autohide("user Lock","3000"),e.btnPlaceDis=!1):0==l?(s.autohide("user batting is Lock ","3000"),e.btnPlaceDis=!1):0==u?(s.autohide("user account closed","3000"),e.btnPlaceDis=!1):0==y?(s.autohide("user Inactive","3000"),e.btnPlaceDis=!1):3!=g?(s.autohide("Please Select valid user","3000"),e.btnPlaceDis=!1):0!=h&&m>=h?(s.autohide("Invalid Stake Limit","3000"),e.btnPlaceDis=!1):parseInt(c.Balance)<m&&(s.autohide("insufficient Balance","3000"),e.btnPlaceDis=!1)})},e.checkValidation=function(t){return""==t.betValue||t.betValue<=0?(s.autohide("You cannot play at zero Stake..."),e.btnPlaceDis=!1,$("#betValue").focus(),!1):!0};var y,g=[{headerName:"Sno",field:"SrNo",width:50},{headerName:"Username",field:"userName",width:110},{headerName:"Parent",field:"ParantName",width:120},{headerName:"bet_value",field:"bet_value",width:90},{headerName:"OddValue",field:"OddValue",width:90},{headerName:"Time",field:"dateTime",width:140},{headerName:"Fancy Name",field:"fancyName",width:120},{headerName:"Bet Id",field:"bet_id",width:70}],m={enableSorting:!0,enableFilter:!0,debug:!0,rowSelection:"multiple",enableColResize:!0,paginationPageSize:500,columnDefs:g,rowModelType:"pagination"},p=document.querySelector("#myGrid");new agGrid.Grid(p,m),t.get(BASE_URL+"Lstsavemstrcontroller/getFancyData/"+a.matchId+"/"+a.FancyID+"/"+n.get("user_id")+"/"+n.get("type")+"/"+a.TypeID).success(function(t,a,n,s){e.FancyData=t.fancyForm,e.UserBetData=t.UserBetData,e.scorePosition=t.scorePosition,e.showOdd1=!1,e.showEven1=!1,e.showBet=!1,e.ngValue=!1,I(t.UserBetData)}),e.RefreshData=function(){t.get("Lstsavemstrcontroller/getFancyData/"+a.matchId+"/"+a.FancyID+"/"+n.get("user_id")+"/"+n.get("type")+"/"+a.TypeID).success(function(t,a,n,s){e.scorePosition=t.scorePosition})},e.GetBetLst=function(){o.GetFancyData(a.matchId,a.FancyID,n.get("user_id"),n.get("type"),a.TypeID,function(t){"3"!=n.get("type")&&e.UserBetData.length!=t.data.UserBetData.length&&(e.scorePosition=t.data.scorePosition,e.UserBetData=t.data.UserBetData,d.sayText("b"),I(t.data.UserBetData)),2==t.data.fancyForm[0].active?(e.closeFancy=1,e.Msg="Fancy Closed"):0==t.data.fancyForm[0].active?(e.closeFancy=1,e.Msg="Fancy Inactive"):1==t.data.fancyForm[0].active&&(e.closeFancy=0,e.Msg="")}),"0"!=n.get("type")&&t({method:"POST",url:BASE_URL+"Geteventcntr/matchMarketLst/",data:{matchId:a.matchId,sportsId:4,user_id:n.get("user_id")},headers:{"Content-Type":"application/x-www-form-urlencoded"}}).success(function(e){try{"1"==u("filter")(e.getMatchFancy,{ID:a.FancyID})[0].IsPlay&&(c.$broadcast("changeSidebar_Market",{}),"1"==n.get("type")?l.go("dashboard.Masterdashboard"):"2"==n.get("type")?l.go("dashboard.Dealerdashboard"):"3"==n.get("type")&&l.go("dashboard.Userdashboard"))}catch(t){}})};var D=i(e.GetBetLst,1e3);e.$on("$destroy",function(e){i.cancel(D),D=angular.isUndefinedOrNull})}]);