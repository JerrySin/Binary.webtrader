define(["jquery","common/rivetsExtra","jquery-ui","color-picker","ddslick"],function(a,b){function c(){a(this).dialog("close"),a(this).find("*").removeClass("ui-state-error")}function d(d,e){require(["css!charts/indicators/var/var.css"]),require(["text!charts/indicators/var/var.html","text!charts/indicators/indicators.json"],function(f,g){var h="#cd0a0a";f=a(f),f.appendTo("body"),g=JSON.parse(g);var i=g["var"],j={title:i.long_display_name,description:i.description};b.bind(f[0],j),f.find("input[type='button']").button(),f.find("#var_stroke").colorpicker({position:{at:"right+100 bottom",of:"element",collision:"fit"},part:{map:{size:128},bar:{size:128}},select:function(b,c){a("#var_stroke").css({background:"#"+c.formatted}).val(""),h="#"+c.formatted},ok:function(b,c){a("#var_stroke").css({background:"#"+c.formatted}).val(""),h="#"+c.formatted}});var k="Solid";a("#var_dashStyle").ddslick({imagePosition:"left",width:148,background:"white",onSelected:function(b){a("#var_dashStyle .dd-selected-image").css("max-width","115px"),k=b.selectedData.value}}),a("#var_dashStyle .dd-option-image").css("max-width","115px"),f.dialog({autoOpen:!1,resizable:!1,width:350,height:400,modal:!0,my:"center",at:"center",of:window,dialogClass:"var-ui-dialog",buttons:[{text:"OK",click:function(){var b=a(".var_input_width_for_period");if(!_.isInteger(_.toNumber(b.val()))||!_.inRange(b.val(),parseInt(b.attr("min")),parseInt(b.attr("max"))+1))return require(["jquery","jquery-growl"],function(a){a.growl.error({message:"Only numbers between "+b.attr("min")+" to "+b.attr("max")+" is allowed for "+b.closest("tr").find("td:first").text()+"!"})}),void b.val(b.prop("defaultValue"));var d={period:parseInt(f.find(".var_input_width_for_period").val()),stroke:h,strokeWidth:parseInt(f.find("#var_strokeWidth").val()),dashStyle:k,levels:[]};a(a(".var").data("refererChartID")).highcharts().series[0].addIndicator("var",d),c.call(f)}},{text:"Cancel",click:function(){c.call(this)}}]}),f.find("select").each(function(b,c){a(c).selectmenu({width:150}).selectmenu("menuWidget").css("max-height","85px")}),"function"==typeof e&&e(d)})}return{open:function(b){return 0==a(".var").length?void d(b,this.open):void a(".var").data("refererChartID",b).dialog("open")}}});