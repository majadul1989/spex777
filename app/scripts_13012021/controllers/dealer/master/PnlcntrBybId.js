app.controller("PnlcntrBybId",["$scope","$http","$filter","sessionService","$mdDialog","$rootScope","$location","$stateParams","$state",function(e,t,a,r,s,i,l,d,n){e.loading=true;function c(){if(u){var e={getRows:function(e){setTimeout(function(){var t=u.slice(e.startRow,e.endRow),a=-1;u.length<=e.endRow&&(a=u.length),e.successCallback(t,a)},500)}};y.api.setDatasource(e)}}function o(e){u=e,c()}e.backopti=!1,e.UserTYPEID=r.get("type"),e.doTheBack=function(a,s,i){t.get("Lstsavemstrcontroller/getParentData/"+s).success(function(t,a,s,i){e.GetPlus_Minus_Ac(t.parentData[0].mstrid,e.Marketdata.matchId,e.Marketdata.MarketId,e.Marketdata.fancyId,t.parentData[0].mstruserid,t.parentData[0].usetype),r.get("type")==t.parentData[0].usetype?e.backopti=!1:e.backopti=!0})},e.MarketId=d.MarketId;var u,h=[{headerName:"SNo.",width:30,field:"SrNo",cellClass:function(e){return"Lay"==e.data.Type?"lay-head":"back-head"}},{headerName:"Description",field:"Description",width:400,cellClass:function(e){return"Lay"==e.data.Type?"lay-head":"back-head"}},{headerName:"Selection Name",width:100,field:"selectionName",cellClass:function(e){return"Lay"==e.data.Type?"lay-head":"back-head"}},{headerName:"Type",width:70,field:"Type",cellClass:function(e){return"Lay"==e.data.Type?"lay-head":"back-head"}},{headerName:"Odds",width:70,field:"Odds",cellClass:function(e){return"Lay"==e.data.Type?"lay-head":"back-head"}},{headerName:"Stack",width:70,field:"Stack",cellClass:function(e){return"Lay"==e.data.Type?"lay-head":"back-head"}},{headerName:"Date",width:130,field:"MstDate",cellClass:function(e){return"Lay"==e.data.Type?"lay-head":"back-head"}},{headerName:"P_L",width:80,field:"P_L",cellClass:function(e){return"Lay"==e.data.Type?"lay-head col-right":"back-head col-right"},cellStyle:function (params) { return (params.data.P_L>0 ? {color: 'green !important'} : {color: 'red !important'}); }},{headerName:"Profit",width:80,field:"Profit",cellClass:"col-right",cellClass:function(e){return"Lay"==e.data.Type?"lay-head":"back-head"},cellStyle:function (params) { return (params.data.Profit>0 ? {color: 'green !important'} : {color: 'red !important'}); }},{headerName:"Liability",width:80,field:"Liability",cellClass:function(e){return"Lay"==e.data.Type?"lay-head col-right":"back-head col-right"},cellStyle:function (params) { return (params.data.Liability>0 ? {color: 'green !important'} : {color: 'red !important'}); } },{headerName:"Status",width:80,field:"STATUS",cellClass:function(e){return"Lay"==e.data.Type?"lay-head  col-status":"back-head  col-status"}},{headerName:"bet_id.",width:50,field:"mstcode",cellClass:function(e){return"Lay"==e.data.Type?"lay-head":"back-head"}}],y={enableSorting:!0,enableFilter:!0,debug:!0,rowSelection:"multiple",enableColResize:!0,paginationPageSize:500,columnDefs:h,pagination:"true"},p=document.querySelector("#myGrid");new agGrid.Grid(p,y),e.GetSportName=function(){t.get("Geteventcntr/GetSportFrmDatabase").success(function(t,a,r,s){e.sprtData=t.sportData})},e.GetSportName(),e.onBtExport=function(){var e={skipHeader:!1,skipFooters:!0,skipGroups:!0,fileName:"Bet_history.csv"};y.api.exportDataAsCsv(e)};
if(d.MarketId != null || d.MarketId != undefined ){
r.set('Marketdata',JSON.stringify(d.MarketId))};
if(d.MarketId == null || d.MarketId != null ){
e.Marketdata=JSON.parse(r.get("Marketdata"))};
//alert(e.Marketdata);
e.GetPnL=function(){t.get("Betentrycntr/BetHistoryPL/"+e.Marketdata.UserId+"/"+e.Marketdata.matchId+"/"+e.Marketdata.MarketId+"/"+e.Marketdata.fancyId).success(function(t,a,r,s){e.loading=false;e.BetHistory=t.getBetPl,y.api.setRowData(e.BetHistory),o(t.getBetPl),e.SumOfP_L=e.sum(e.BetHistory,"P_L"),e.SumOfProfit=e.sum(
e.BetHistory,"Profit"),e.SumOfLiability=e.sum(e.BetHistory,"Liability")})};e.sum=function(e,t){return e.reduce(function(e,a){return null==a[t]&&(a[t]=0),parseFloat(e)+parseFloat(a[t])},0)},
e.GetPlus_Minus_Ac=function(a,s,i,l,d,n){e.GTUserName=d,e.GTUseruserId=a,e.GTuserType=n,
t.get("Betentrycntr/GetPlus_Minus_Ac/"+a+"/"+s+"/"+i+"/"+l).success(function(t,a,r,s){e.getPlusAc=t.getPlusAc,
e.getMiusAc=t.getMiusAc,e.totalSumP=0,e.totalSumM=0;for(
var i=0;i<e.getPlusAc.length;i++)e.totalSumP=parseFloat(e.totalSumP)+parseFloat(e.getPlusAc[i].PUsum);
for(var i=0;i<e.getMiusAc.length;i++)e.totalSumM=parseFloat(e.totalSumM)+parseFloat(e.getMiusAc[i].Musum)}),
r.get("type")==n?e.backopti=!1:e.backopti=!0};e.GetPnL();e.GetPlus_Minus_Ac(e.Marketdata.UserId,e.Marketdata.matchId,e.Marketdata.MarketId,e.Marketdata.fancyId,e.Marketdata.mstruserid,e.Marketdata.usetype);
e.GetPreviousPage=function()
{

if(d.StateName==null)
	{
		n.go("masterDashboard.ProfitlossByUsercntr",{ 'UserID': e.Marketdata.UserId, 'usetype': e.Marketdata.usetype })
	}
	else
	{
		
		n.go(d.StateName);
	}
}
}]);
