import {store} from './util.js';

let app = {
	dataArr:[],
	info:function (){
		store("todo",app.dataArr);	
	},
	addItem:function (value){
		if(!value){
			alert('不能为空哦~~~');
			return;
		};
		app.dataArr.push({
			id:Date.now(),
			content:value,
			compile:false
		});

		app.info();

		app.render(app.dataArr);
	},
	toggleAll:function (bl){
		app.dataArr.forEach((item)=>{
			item.compile  = bl;
		})	
		app.info();

		app.render(app.dataArr);
	},
	toggle:function (id){
		app.dataArr.forEach((item)=>{
			if( item.id === id ){
				item.compile  = !item.compile;
			}
		});
		app.info();

		app.render(app.dataArr);	
	},
	delectItem:function (id){
		var newArr = app.dataArr.filter((item)=>{
			return item.id !== id;
		});

		app.dataArr = newArr;
		app.info();
		app.render(app.dataArr);
	}
}

app.dataArr = store("todo") || [];



export default app;