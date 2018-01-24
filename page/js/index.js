//分页展示数据
var page = 5;

//页面title（标题展示）
var title = '<div class="col-md-2 col-sm-2 col-xl-2 id">序号</div>'+
			'<div class="col-md-2 col-sm-2 col-xl-2 name">名字</div>'+
			'<div class="col-md-2 col-sm-2 col-xl-2 age">年龄</div>'+
			'<div class="col-md-2 col-sm-2 col-xl-2 school">毕业院校</div>'+
			'<div class="col-md-2 col-sm-2 col-xl-2 professional">学习专业</div>'+
			'<div class="col-md-2 col-sm-2 col-xl-2 operation">操作</div>';
$(".title").append(title);
$.getJSON({  
    type: "GET",
    url:"../js/date.json",  
    async: false, 
    cache:false,
    dataType:"json", 
    success: function(status) {
       	if(e.data.length==0){
       		alert("暂无数据4！");
       		return;
       	}
        $.each(e.data, function(idx,obj){
    	   if(idx<pagesize){
    		   dateinfo(obj)
      		}
        }); 
    	var content=e.data.length;       //总数
        var pageTotal=Math.ceil(content/pagesize);  //分页数量
        var html='<ul class="pagination" style="margin:0;" id="page2"></ul>';
        $(".page-left").append(html);
        Page({
            num:pageTotal,             //页码数
            startnum:1,
            pagesize:pagesize,             //每页显示的数量
            elem:$('#page2'),       //指定的元素
            callback:function(n){   //回调函数 
                pagination(n,e.data);     
            }
        });
    }
});
//表单数据
function dateinfo(obj){
 	var detail ='<div class="col-md-12 col-sm-12 col-xl-12 page_detail">'+ 
				'<div class="col-md-2 col-sm-2 col-xl-2 id">序号</div>'+
				'<div class="col-md-2 col-sm-2 col-xl-2 name">名字</div>'+
				'<div class="col-md-2 col-sm-2 col-xl-2 age">年龄</div>'+
				'<div class="col-md-2 col-sm-2 col-xl-2 school">毕业院校</div>'+
				'<div class="col-md-2 col-sm-2 col-xl-2 professional">学习专业</div>'+
				'<div class="col-md-2 col-sm-2 col-xl-2 delete">删除</div>'+
			'</div>';
	$(".page_info").append(detail);
}

//页数控制
function pagination(num,list){
	$(".order_ul").html('');
	$.each(list, function(idx,obj){
		if(idx>=((num-1)*pagesize) && idx<(num*pagesize)){
			drawTableOemOrder(obj);
		}
    });
}