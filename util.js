function append_text(txt){var docbody=document.getElementsByTagName("body")[0];docbody.appendChild(document.createTextNode(txt));docbody.appendChild(document.createElement("br"));}
function append_th(row,txt){var tdata=document.createElement("th");tdata.appendChild(document.createTextNode(txt));row.appendChild(tdata);}
function append_td(row,txt){var tdata=document.createElement("td");tdata.appendChild(document.createTextNode(txt));row.appendChild(tdata);}
function append_tr(table){var trow=document.createElement("tr");for(var i=1;i<arguments.length;++i){append_td(trow,arguments[i]);}
table.appendChild(trow);}
function make_table(){var docbody,table,thead,tbody,center,trow,i;docbody=document.getElementsByTagName("body")[0];table=document.createElement("table");table.setAttribute("border","1");thead=document.createElement("thead");table.appendChild(thead);tbody=document.createElement("tbody");table.appendChild(tbody);if(1){center=document.createElement("center");center.appendChild(table);docbody.appendChild(center);}else{docbody.appendChild(table);}
trow=document.createElement("tr");for(i=0;i<arguments.length;++i){append_th(trow,arguments[i]);}
thead.appendChild(trow);return tbody;}