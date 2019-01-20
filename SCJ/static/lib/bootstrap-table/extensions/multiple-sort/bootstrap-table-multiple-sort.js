!function(t){"use strict";var o=!1,r=function(o){var r=o.$sortModal.selector,i=r.substr(1);if(!t(i).hasClass("modal")){var s='  <div class="modal fade" id="'+i+'" tabindex="-1" role="dialog" aria-labelledby="'+i+'Label" aria-hidden="true">';s+='         <div class="modal-dialog">',s+='             <div class="modal-content">',s+='                 <div class="modal-header">',s+='                     <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>',s+='                     <h4 class="modal-title" id="'+i+'Label">'+o.options.formatMultipleSort()+"</h4>",s+="                 </div>",s+='                 <div class="modal-body">',s+='                     <div class="bootstrap-table">',s+='                         <div class="fixed-table-toolbar">',s+='                             <div class="bars">',s+='                                 <div id="toolbar">',s+='                                     <button id="add" type="button" class="btn btn-default"><i class="'+o.options.iconsPrefix+" "+o.options.icons.plus+'"></i> '+o.options.formatAddLevel()+"</button>",s+='                                     <button id="delete" type="button" class="btn btn-default" disabled><i class="'+o.options.iconsPrefix+" "+o.options.icons.minus+'"></i> '+o.options.formatDeleteLevel()+"</button>",s+="                                 </div>",s+="                             </div>",s+="                         </div>",s+='                         <div class="fixed-table-container">',s+='                             <table id="multi-sort" class="table">',s+="                                 <thead>",s+="                                     <tr>",s+="                                         <th></th>",s+='                                         <th><div class="th-inner">'+o.options.formatColumn()+"</div></th>",s+='                                         <th><div class="th-inner">'+o.options.formatOrder()+"</div></th>",s+="                                     </tr>",s+="                                 </thead>",s+="                                 <tbody></tbody>",s+="                             </table>",s+="                         </div>",s+="                     </div>",s+="                 </div>",s+='                 <div class="modal-footer">',s+='                     <button type="button" class="btn btn-default" data-dismiss="modal">'+o.options.formatCancel()+"</button>",s+='                     <button type="button" class="btn btn-primary">'+o.options.formatSort()+"</button>",s+="                 </div>",s+="             </div>",s+="         </div>",s+="     </div>",t("body").append(t(s)),o.$sortModal=t(r);var e=o.$sortModal.find("tbody > tr");if(o.$sortModal.off("click","#add").on("click","#add",function(){var t=o.$sortModal.find(".multi-sort-name:first option").length,r=o.$sortModal.find("tbody tr").length;r<t&&(r++,o.addLevel(),o.setButtonStates())}),o.$sortModal.off("click","#delete").on("click","#delete",function(){var t=o.$sortModal.find(".multi-sort-name:first option").length,r=o.$sortModal.find("tbody tr").length;r>1&&r<=t&&(r--,o.$sortModal.find("tbody tr:last").remove(),o.setButtonStates())}),o.$sortModal.off("click",".btn-primary").on("click",".btn-primary",function(){var r=o.$sortModal.find("tbody > tr"),i=o.$sortModal.find("div.alert"),s=[],e=[];o.options.sortPriority=t.map(r,function(o){var r=t(o),i=r.find(".multi-sort-name").val(),e=r.find(".multi-sort-order").val();return s.push(i),{sortName:i,sortOrder:e}});for(var n=s.sort(),a=0;a<s.length-1;a++)n[a+1]==n[a]&&e.push(n[a]);if(e.length>0)0===i.length&&(i='<div class="alert alert-danger" role="alert"><strong>'+o.options.formatDuplicateAlertTitle()+"</strong> "+o.options.formatDuplicateAlertDescription()+"</div>",t(i).insertBefore(o.$sortModal.find(".bars")));else{if(1===i.length&&t(i).remove(),o.$sortModal.modal("hide"),o.options.sortName="","server"===o.options.sidePagination)return o.options.queryParams=function(t){return t.multiSort=o.options.sortPriority,t},void o.initServer(o.options.silentSort);o.onMultipleSort()}}),null!==o.options.sortPriority&&0!==o.options.sortPriority.length||o.options.sortName&&(o.options.sortPriority=[{sortName:o.options.sortName,sortOrder:o.options.sortOrder}]),null!==o.options.sortPriority&&o.options.sortPriority.length>0){if(e.length<o.options.sortPriority.length&&"object"==typeof o.options.sortPriority)for(var n=0;n<o.options.sortPriority.length;n++)o.addLevel(n,o.options.sortPriority[n])}else o.addLevel(0);o.setButtonStates()}};t.extend(t.fn.bootstrapTable.defaults,{showMultiSort:!1,sortPriority:null,onMultipleSort:function(){return!1}}),t.extend(t.fn.bootstrapTable.defaults.icons,{sort:"glyphicon-sort",plus:"glyphicon-plus",minus:"glyphicon-minus"}),t.extend(t.fn.bootstrapTable.Constructor.EVENTS,{"multiple-sort.bs.table":"onMultipleSort"}),t.extend(t.fn.bootstrapTable.locales,{formatMultipleSort:function(){return"Multiple Sort"},formatAddLevel:function(){return"Add Level"},formatDeleteLevel:function(){return"Delete Level"},formatColumn:function(){return"Column"},formatOrder:function(){return"Order"},formatSortBy:function(){return"Sort by"},formatThenBy:function(){return"Then by"},formatSort:function(){return"Sort"},formatCancel:function(){return"Cancel"},formatDuplicateAlertTitle:function(){return"Duplicate(s) detected!"},formatDuplicateAlertDescription:function(){return"Please remove or change any duplicate column."},formatSortOrders:function(){return{asc:"Ascending",desc:"Descending"}}}),t.extend(t.fn.bootstrapTable.defaults,t.fn.bootstrapTable.locales);var i=t.fn.bootstrapTable.Constructor,s=i.prototype.initToolbar;i.prototype.initToolbar=function(){this.showToolbar=!0;var i=this,e="#sortModal_"+this.$el.attr("id");if(this.$sortModal=t(e),s.apply(this,Array.prototype.slice.apply(arguments)),this.options.showMultiSort){var n=this.$toolbar.find(">.btn-group").first(),a=this.$toolbar.find("div.multi-sort");a.length||(a='  <button class="multi-sort btn btn-default'+(void 0===this.options.iconSize?"":" btn-"+this.options.iconSize)+'" type="button" data-toggle="modal" data-target="'+e+'" title="'+this.options.formatMultipleSort()+'">',a+='     <i class="'+this.options.iconsPrefix+" "+this.options.icons.sort+'"></i>',a+="</button>",n.append(a),r(i)),this.$el.on("sort.bs.table",function(){o=!0}),this.$el.on("multiple-sort.bs.table",function(){o=!1}),this.$el.on("load-success.bs.table",function(){o||null===i.options.sortPriority||"object"!=typeof i.options.sortPriority||i.onMultipleSort()}),this.$el.on("column-switch.bs.table",function(t,o){for(var s=0;s<i.options.sortPriority.length;s++)i.options.sortPriority[s].sortName===o&&i.options.sortPriority.splice(s,1);i.assignSortableArrows(),i.$sortModal.remove(),r(i)}),this.$el.on("reset-view.bs.table",function(){o||null===i.options.sortPriority||"object"!=typeof i.options.sortPriority||i.assignSortableArrows()})}},i.prototype.onMultipleSort=function(){var o=this,r=function(t,o){return t>o?1:t<o?-1:0},i=function(i,s){for(var e=[],n=[],a=0;a<o.options.sortPriority.length;a++){var l="desc"===o.options.sortPriority[a].sortOrder?-1:1,d=i[o.options.sortPriority[a].sortName],p=s[o.options.sortPriority[a].sortName];void 0!==d&&null!==d||(d=""),void 0!==p&&null!==p||(p=""),t.isNumeric(d)&&t.isNumeric(p)&&(d=parseFloat(d),p=parseFloat(p)),"string"!=typeof d&&(d=d.toString()),e.push(l*r(d,p)),n.push(l*r(p,d))}return r(e,n)};this.data.sort(function(t,o){return i(t,o)}),this.initBody(),this.assignSortableArrows(),this.trigger("multiple-sort")},i.prototype.addLevel=function(o,r){var i=0===o?this.options.formatSortBy():this.options.formatThenBy();this.$sortModal.find("tbody").append(t("<tr>").append(t("<td>").text(i)).append(t("<td>").append(t('<select class="form-control multi-sort-name">'))).append(t("<td>").append(t('<select class="form-control multi-sort-order">'))));var s=this.$sortModal.find(".multi-sort-name").last(),e=this.$sortModal.find(".multi-sort-order").last();t.each(this.columns,function(t,o){return o.sortable===!1||o.visible===!1||void s.append('<option value="'+o.field+'">'+o.title+"</option>")}),t.each(this.options.formatSortOrders(),function(t,o){e.append('<option value="'+t+'">'+o+"</option>")}),void 0!==r&&(s.find('option[value="'+r.sortName+'"]').attr("selected",!0),e.find('option[value="'+r.sortOrder+'"]').attr("selected",!0))},i.prototype.assignSortableArrows=function(){for(var o=this,r=o.$header.find("th"),i=0;i<r.length;i++)for(var s=0;s<o.options.sortPriority.length;s++)t(r[i]).data("field")===o.options.sortPriority[s].sortName&&t(r[i]).find(".sortable").removeClass("desc asc").addClass(o.options.sortPriority[s].sortOrder)},i.prototype.setButtonStates=function(){var t=this.$sortModal.find(".multi-sort-name:first option").length,o=this.$sortModal.find("tbody tr").length;o==t&&this.$sortModal.find("#add").attr("disabled","disabled"),o>1&&this.$sortModal.find("#delete").removeAttr("disabled"),o<t&&this.$sortModal.find("#add").removeAttr("disabled"),1==o&&this.$sortModal.find("#delete").attr("disabled","disabled")}}(jQuery);