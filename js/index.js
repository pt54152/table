var PtTable = function (obj) {
	this.el = obj.el;//必传，为要插入元素的id
	// this.page = obj.page;
	// this.pagesize=obj.pagesize;
	this.headData=obj.headData;//表头数据headData
	this.tableData=obj.tableData;//表格数据
	this.discoloration = obj.discoloration?obj.discoloration:true;//是否隔行变色
};
PtTable.prototype={
	init:function(){
		var el=document.getElementById(this.el);
		
		var elWidth=el.clientWidth;
		console.log(this.headData.length)
		//创建表头
		var tableHead=document.createElement('div');
		tableHead.classList.add('table-header');
		var _this=this;
		this.headData.forEach(function(v,i){
			var tableTh=document.createElement('div');
			tableTh.classList.add('fl');
			tableTh.classList.add('table-th');
			tableTh.innerHTML=v;
			tableTh.style.width=100/(_this.headData.length)+'%';
			tableHead.appendChild(tableTh)
		})
		el.appendChild(tableHead);
		//创建表体
		if(this.tableData&&this.tableData.length!=0){
			var tableBody=document.createElement('div');
			tableBody.classList.add('table-body');
			this.tableData.forEach(function(v,i){
				var tr=document.createElement('div');
				tr.classList.add('table-tr')
				tableBody.appendChild(tr);
				for(var key in v){
					var td=document.createElement('div');
					td.innerHTML=v[key];
					td.classList.add('fl')
					td.classList.add('table-td')
					td.style.width=100/(_this.headData.length)+'%';
					tr.appendChild(td);
					
				}
			})
			el.appendChild(tableBody);
		}
		//是否隔行变色
		if(this.discoloration){
			var trs=document.querySelectorAll('.table-tr');
			console.log(trs.length)
			for(var i=0;i<trs.length;i++){
				if(i%2==0){
					trs[i].style.backgroundColor='#ddd';
				}
			}
		}
		

	}
	
}
// export default PtTable;
window.PtTable=PtTable;