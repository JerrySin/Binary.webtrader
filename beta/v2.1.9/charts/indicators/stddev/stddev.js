define(["jquery","common/rivetsExtra","jquery-ui","color-picker","ddslick"],function(a,b){function c(){a(this).dialog("close"),a(this).find("*").removeClass("ui-state-error")}function d(d,e){require(["css!charts/indicators/stddev/stddev.css"]);require(["text!charts/indicators/stddev/stddev.html","text!charts/indicators/indicators.json"],function(f,g){var h="#cd0a0a";f=a(f),f.appendTo("body"),g=JSON.parse(g);var i=g.stddev,j={title:i.long_display_name,description:i.description};b.bind(f[0],j),f.find("input[type='button']").button(),f.find("#stddev_stroke").colorpicker({position:{at:"right+100 bottom",of:"element",collision:"fit"},part:{map:{size:128},bar:{size:128}},select:function(b,c){a("#stddev_stroke").css({background:"#"+c.formatted}).val(""),h="#"+c.formatted},ok:function(b,c){a("#stddev_stroke").css({background:"#"+c.formatted}).val(""),h="#"+c.formatted}});var k="Solid";a("#stddev_dashStyle").ddslick({imagePosition:"left",width:148,background:"white",onSelected:function(b){a("#stddev_dashStyle .dd-selected-image").css("max-width","115px"),k=b.selectedData.value}}),a("#stddev_dashStyle .dd-option-image").css("max-width","115px");var l=f.find("#stddev_levels").DataTable({paging:!1,scrollY:100,autoWidth:!0,searching:!1,info:!1,columnDefs:[{className:"dt-center",targets:[0,1,2,3]}],aoColumnDefs:[{bSortable:!1,aTargets:[1,3]}]});f.find("#stddev_level_delete").click(function(){l.rows(".selected").indexes().length<=0?require(["jquery","jquery-growl"],function(a){a.growl.error({message:"Select level(s) to delete!"})}):l.rows(".selected").remove().draw()}),f.find("#stddev_level_add").click(function(){require(["indicator_levels"],function(b){b.open(d,function(b){a.each(b,function(b,c){a(l.row.add([c.level,'<div style="background-color: '+c.stroke+';width:100%;height:20px;"></div>',c.strokeWidth,'<div style="width:50px;overflow:hidden;"><img src="images/dashstyle/'+c.dashStyle+'.svg" /></div>']).draw().node()).data("level",c).on("click",function(){a(this).toggleClass("selected")})})})})}),f.dialog({autoOpen:!1,resizable:!1,width:350,height:400,modal:!0,my:"center",at:"center",of:window,dialogClass:"stddev-ui-dialog",buttons:[{text:"OK",click:function(){var b=a(".stddev_input_width_for_period");if(!_.isInteger(_.toNumber(b.val()))||!_.inRange(b.val(),parseInt(b.attr("min")),parseInt(b.attr("max"))+1))return require(["jquery","jquery-growl"],function(a){a.growl.error({message:"Only numbers between "+b.attr("min")+" to "+b.attr("max")+" is allowed for "+b.closest("tr").find("td:first").text()+"!"})}),void b.val(b.prop("defaultValue"));var d=[];a.each(l.rows().nodes(),function(){var b=a(this).data("level");b&&d.push({color:b.stroke,dashStyle:b.dashStyle,width:b.strokeWidth,value:b.level,label:{text:b.level}})});var e={period:parseInt(f.find(".stddev_input_width_for_period").val()),stroke:h,strokeWidth:parseInt(f.find("#stddev_strokeWidth").val()),dashStyle:k,levels:d};a(a(".stddev").data("refererChartID")).highcharts().series[0].addIndicator("stddev",e),c.call(f)}},{text:"Cancel",click:function(){c.call(this)}}]}),f.find("select").each(function(b,c){a(c).selectmenu({width:150}).selectmenu("menuWidget").css("max-height","85px")}),"function"==typeof e&&e(d)})}return{open:function(b){return 0==a(".stddev").length?void d(b,this.open):void a(".stddev").data("refererChartID",b).dialog("open")}}});