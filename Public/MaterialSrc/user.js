// JavaScript Document

var table_number=0;
var txt="";
function show_boPlace(){
	document.getElementById("boPlace").style.display = "block";
	document.getElementById("boPlace_table").style.display = "block";
	document.getElementById("bo_othStuff_table").style.display = "none";
	document.getElementById("center").style.display = "none";
	document.getElementById("boStuff_table").style.display = "none"
	document.getElementById("apply").style.height = "500px";
	document.getElementById("stateQuery").style.top = "650px";
	document.getElementById("stateQuery_table").style.display = "none";
	}
function boStuff_submit(){
	document.getElementById("Form").submit();
	$(function(){$("#boStuff_table_submit").attr("disabled",true);});
	}
function boStuff_confirm(){
			flag=0;
			txt="";
			//查空
			var table_=$("#boStuff_table input");
			for(i=0;i<=4;i++)
			{
				check_null(table_[i].value,table_.eq(i));
			}
			if(flag==0)
			{
				i=0,check_length(table_[i].value,table_.eq(i),25);
				i=1,check_length(table_[i].value,table_.eq(i),30);
				i=2,check_length(table_[i].value,table_.eq(i),25);
				i=3,check_length(table_[i].value,table_.eq(i),10);
				i=4,check_length(table_[i].value,table_.eq(i),5);
			}
			var counter1=0,counter2=0,place=0;
			if(table_[5].value||table_[6].value) counter1++,place=1;
			if(table_[7].value) counter1++,place=2;
			if(table_[8].value||table_[9].value||table_[10].value) counter1++,place=3;
			if(table_[11].value||table_[12].value) counter1++,place=4;
			
			if(counter1==0){ alert("请选择物资！");flag=1;}
			else if(counter1==1)
			{
				switch(place){
				case 1:
				{
					for(i=5;i<=6;i++)
						check_null(table_[i].value,table_.eq(i));
					if(flag==0)
					{
						i=5,check_number(table_[i].value,table_.eq(i));
						if(flag==0)
						{
							i=5,check_length(table_[i].value,table_.eq(i),5);
							i=6,check_length(table_[i].value,table_.eq(i),10);
						}
					    
					}
					
					break;
				}
				case 2:
				{
					check_null(table_[7].value,table_.eq(7));
					if(flag==0)
					{
						i=7,check_number(table_[i].value,table_.eq(i));
						if(flag==0)
						{
							i=7,check_length(table_[i].value,table_.eq(i),5);
						}
					}
					
					
					break;
				}
				
				case 3:
				{
					for(i=8;i<=10;i++)
						check_null(table_[i].value,table_.eq(i));
					if(flag==0)
					{
						i=8,check_number(table_[i].value,table_.eq(i));
						i=9,check_number(table_[i].value,table_.eq(i));
						if(flag==0)
						{
							i=8,check_length(table_[i].value,table_.eq(i),5);
							i=9,check_length(table_[i].value,table_.eq(i),5);
							i=10,check_length(table_[i].value,table_.eq(i),10);
						}
					}
					
					break;
				}
				case 4:
				{
					for(i=11;i<=12;i++)
						check_null(table_[i].value,table_.eq(i));
					if(flag==0)
					{
						i=11,check_number(table_[i].value,table_.eq(i));
						i=12,check_number(table_[i].value,table_.eq(i));
						if(flag==0)
						{
							i=11,check_length(table_[i].value,table_.eq(i),5);
							i=12,check_length(table_[i].value,table_.eq(i),5);
						}
					}
					
					break;
				}
				}
			}
			else 
			{
				alert("只能选择一种物资");
				flag=1;
			}
			
			for(i=13;i<=18;i++)
			{
				check_null(table_[i].value,table_.eq(i));
			}
			if(flag==0)
			{
				//长度限制
				i=13,check_length(table_[i].value,table_.eq(i),10);
				i=15,check_length(table_[i].value,table_.eq(i),15);
				i=16,check_length(table_[i].value,table_.eq(i),15);
				i=17,check_length(table_[i].value,table_.eq(i),10);
				if(flag==0)
				{
					//电话
					i=14,check_tel(table_[i].value,table_.eq(i));
					i=18,check_tel(table_[i].value,table_.eq(i));
				}
			
			}			
		if(flag==0)
		{
			
			alert("可提交策划！");
			$(function(){$("#boStuff_table_submit").attr("disabled",false);});
			$(function(){$("#tips").hide()}); 
		}
		else
		{
			alert("未通过！请检查");
			$(function(){$("#tips").show()}); 
			$(function(){$("#p1").html(txt)}); 

		}
		
}
function boStuff_reset(){
	if(confirm("是否保存草稿？")){
		alert("已保存草稿");
		}
	}

function boPlace_submit(){
	if(table_number!=9)
	document.getElementById("Form").submit();
	else
	document.getElementById("Form2").submit();
   $(function(){$("#boPlace_table_submit").attr("disabled",true);});
	}
function boPlace_confirm(){
	flag=0;
	txt="";
	switch(table_number)
	{
		case 1:
		{
			var table_1=$("#ta_colPrinting input");
			var table_1_=$("#ta_colPrinting textarea");
			//查空
			for(i=0;i<table_1.length;i++)
			{
				check_null(table_1[i].value,table_1.eq(i));
			}
			if(flag==0)
			{
				i=0,check_null(table_1_[i].value,table_1_.eq(i));
				i=1,check_null(table_1_[i].value,table_1_.eq(i));
			}
			//其他
			if(flag==0)
			{
				check_tel(table_1[2].value,table_1.eq(2));
				if(flag==0)
				{
					i=0,check_length(table_1[i].value,table_1.eq(i),30);
					i=1,check_length(table_1[i].value,table_1.eq(i),10);
					if(flag==0)
					{
						i=0,check_length(table_1_[i].value,table_1_.eq(i),500);
						i=3,check_length(table_1[i].value,table_1.eq(i),10);
						i=4,check_length(table_1[i].value,table_1.eq(i),10);
						if(flag==0)
						{
							i=5,check_length(table_1[i].value,table_1.eq(i),25);
							i=6,check_length(table_1[i].value,table_1.eq(i),1);
							i=1,check_length(table_1_[i].value,table_1_.eq(i),200);
						}
					}
					
				}
			}
			if(flag==0)
			{
				alert("可提交策划！");
			    $(function(){$("#boPlace_table_submit").attr("disabled",false);});
			    $(function(){$("#tips").hide()}); 
		    }
		    else
		    { 
			    alert("未通过！请检查");
			    $(function(){$("#tips").show()}); 
			    $(function(){$("#p1").html(txt)}); 

		    }
			break;
		}
		case 2:
		{
			var table_2=$("#ta_colClass input");
			var table_2_=$("#ta_colClass textarea");
			//查空
			for(i=0;i<table_2.length;i++)
			{
				if(i==8) continue;
				check_null(table_2[i].value,table_2.eq(i));
			}
			if(flag==0)
			{
				i=0,check_length(table_2[i].value,table_2.eq(i),25);
				i=1,check_length(table_2[i].value,table_2.eq(i),30);
				
				if(flag==0)
				{
					i=2,check_length(table_2[i].value,table_2.eq(i),5);
					i=3,check_length(table_2[i].value,table_2.eq(i),10);
					
				}
			}
			check_null(table_2_[0].value,table_2_.eq(0));
			if(flag==0)
			{
				i=0,check_length(table_2_[i].value,table_2_.eq(i),500);
			}
			if(table_2[8].value=="有") 
			{
				check_null(table_2_[1].value,table_2_.eq(1));
				if(flag==0)
				{
					i=1,check_length(table_2_[i].value,table_2_.eq(i),50);
				}
			}
			else
			{
				check_null(table_2[8].value,table_2.eq(8));
				if(flag==0)
				{
					i=8,check_length(table_2[i].value,table_2.eq(i),1);
				}
			}
			//其他
			if(flag==0)
			{
				//other
				check_time(table_2[4].value,table_2.eq(4));
				if(table_2[5].value!="302"&&table_2[5].value!="303"&&table_2[5].value!="304"&&table_2[5].value!="603")
				{
					if(flag==0)  {table_2.eq(5).focus().select();}
		            txt=txt+table_2.eq(5).parent().prev().text()+":请选择正确的教室<br>";
		
		            flag=1;
				}
				if(table_2[7].value!="305"&&table_2[7].value!="513")
				{
					if(flag==0)  {table_2.eq(7).focus().select();}
		            txt=txt+table_2.eq(7).parent().prev().text()+":请选择正确的教室<br>";
		
		            flag=1;
				}
				
				//tel
				if(flag==0)
				{
					i=9,check_length(table_2[i].value,table_2.eq(i),10);
					i=11,check_length(table_2[i].value,table_2.eq(i),15);
					i=12,check_length(table_2[i].value,table_2.eq(i),15);
					i=13,check_length(table_2[i].value,table_2.eq(i),10);
				}
				if(flag==0)
				{
					check_tel(table_2[10].value,table_2.eq(10));
				    check_tel(table_2[14].value,table_2.eq(14));
				}
				
			}
			if(flag==0)
			{
				alert("可提交策划！");
			    $(function(){$("#boPlace_table_submit").attr("disabled",false);});
			    $(function(){$("#tips").hide()}); 
		    }
		    else
		    {
			     
			    alert("未通过！请检查");
			    $(function(){$("#tips").show()}); 
			    $(function(){$("#p1").html(txt)}); 

		    }
			break;
		}
		case 3:
		{
			var table_3=$("#ta_roShow input");
			var table_3_=$("#ta_roShow textarea");
			//查空
			for(i=0;i<table_3.length;i++)
			{
				if(i==6) continue;
				check_null(table_3[i].value,table_3.eq(i));
			}
			if(flag==0)
			{
				i=0,check_length(table_3[i].value,table_3.eq(i),25);
				i=1,check_length(table_3[i].value,table_3.eq(i),30);
				i=2,check_length(table_3[i].value,table_3.eq(i),5);
				i=3,check_length(table_3[i].value,table_3.eq(i),5);
			}
			check_null(table_3_[0].value,table_3_.eq(0));
			if(flag==0)
			{
				i=0,check_length(table_3_[i].value,table_3_.eq(i),500);
			}
			if(table_3[6].value=="有") 
			{
				check_null(table_3_[1].value,table_3_.eq(1));
				if(flag==0)
				{
					i=1,check_length(table_3_[i].value,table_3_.eq(i),50);
				}
			}
			else
			{
				check_null(table_3[6].value,table_3.eq(6));
				if(flag==0)
				{
					i=6,check_length(table_3[i].value,table_3.eq(i),1);
				}
			}
			if(flag==0)
			{
				check_time(table_3[4].value,table_3.eq(4));
				if(table_3[5].value!="韵苑路口"&&table_3[5].value!="紫菘路口"&&table_3[5].value!="沁苑路口")
				{
					if(flag==0)  {table_3.eq(5).focus().select();}
		            txt=txt+table_3.eq(5).parent().prev().text()+":请填写正确的活动地点<br>";
		
		            flag=1;
				}
				if(flag==0)
				{
					i=7,check_length(table_3[i].value,table_3.eq(i),10);
					i=9,check_length(table_3[i].value,table_3.eq(i),15);
					i=10,check_length(table_3[i].value,table_3.eq(i),15);
					i=11,check_length(table_3[i].value,table_3.eq(i),10);
				}
				if(flag==0)
				{
					check_tel(table_3[8].value,table_3.eq(8));
				    check_tel(table_3[12].value,table_3.eq(12));
				}
			}
			if(flag==0)
			{
				alert("可提交策划！");
			    $(function(){$("#boPlace_table_submit").attr("disabled",false);});
			    $(function(){$("#tips").hide()}); 
		    }
		    else
		    {
			     
			    alert("未通过！请检查");
			    $(function(){$("#tips").show()}); 
			    $(function(){$("#p1").html(txt)}); 

		    }
			break;
		}
		case 4:
		{
			var table_4=$("#ta_buClass input");
			var table_4_=$("#ta_buClass textarea");
			//查空
			for(i=0;i<table_4.length;i++)
			{
				check_null(table_4[i].value,table_4.eq(i));
			}
			if(flag==0)
			{
				i=0,check_length(table_4[i].value,table_4.eq(i),25);
				i=1,check_length(table_4[i].value,table_4.eq(i),30);
				i=2,check_length(table_4[i].value,table_4.eq(i),10);
				i=3,check_length(table_4[i].value,table_4.eq(i),25);
				i=4,check_length(table_4[i].value,table_4.eq(i),5);
			}
			check_null(table_4_[0].value,table_4_.eq(0));
			if(flag==0)
			{
				i=0,check_length(table_4_[i].value,table_4_.eq(i),500);
			}
			if(flag==0)
			{
				check_number(table_4[4].value,table_4.eq(4));
			}
			if(flag==0)
			{
				alert("可提交策划！");
			    $(function(){$("#boPlace_table_submit").attr("disabled",false);});
			    $(function(){$("#tips").hide()}); 
		    }
		    else
		    {
			     
			    alert("未通过！请检查");
			    $(function(){$("#tips").show()}); 
			    $(function(){$("#p1").html(txt)}); 

		    }
			break;
		}
		case 5:
		{
			var table_5=$("#ta_buclass2 input");
			var table_5_=$("#ta_buclass2 textarea");
			//查空
			for(i=0;i<=7;i++)
			{
				check_null(table_5[i].value,table_5.eq(i));
			}
			if(flag==0)
			{
				i=0,check_length(table_5[i].value,table_5.eq(i),15);
				i=1,check_length(table_5[i].value,table_5.eq(i),5);
				i=2,check_length(table_5[i].value,table_5.eq(i),10);
				i=5,check_length(table_5[i].value,table_5.eq(i),10);
				i=6,check_length(table_5[i].value,table_5.eq(i),5);
				i=7,check_length(table_5[i].value,table_5.eq(i),5);
			}
			if(flag==0)
			{
				var temp1=0,temp2=0;
				if(table_5_[0].value||table_5[8].value||table_5[9].value||table_5[10].value)
				{
					temp1++;temp2=1;
				}
				if(table_5_[1].value||table_5[11].value||table_5[12].value||table_5[13].value)
				{
					temp1++;temp2=2;
				}
				if(temp1==0)
				{
					if(flag==0)  {table_5_.eq(0).focus().select();}
		            txt=txt+":请填写形式与内容<br>";
					flag=1;
				}
				else if(temp1==2)
				{
					if(flag==0)  {table_5_.eq(0).focus().select();}
		            txt=txt+":活动形式只能填写一种<br>";
					flag=1;
				}
				else
				{
					if(temp2==1)
					{
						for(i=8;i<=10;i++)
						{
							check_null(table_5[i].value,table_5.eq(i));
						}
						check_null(table_5_[0].value,table_5_.eq(0));
						if(flag==0)
						{
							i=0,check_length(table_5_[i].value,table_5_.eq(i),500);
							if(flag==0)
							{
								i=8,check_length(table_5[i].value,table_5.eq(i),10);
								i=9,check_length(table_5[i].value,table_5.eq(i),30);
								i=10,check_length(table_5[i].value,table_5.eq(i),30);
							}
						}
					}
					else
					{
						for(i=11;i<=13;i++)
						{
							check_null(table_5[i].value,table_5.eq(i));
						}
						check_null(table_5_[1].value,table_5_.eq(1));
						if(flag==0)
						{
							i=1,check_length(table_5_[i].value,table_5_.eq(i),500);
							if(flag==0)
							{
								i=11,check_length(table_5[i].value,table_5.eq(i),10);
								i=12,check_length(table_5[i].value,table_5.eq(i),30);
								i=13,check_length(table_5[i].value,table_5.eq(i),30);
							}
						}
					}
				}
			}
				
			if(flag==0)
			{
				check_number(table_5[1].value,table_5.eq(1));
				check_number(table_5[6].value,table_5.eq(6));
				check_number(table_5[7].value,table_5.eq(7));
				check_tel(table_5[3].value,table_5.eq(3));
				check_tel(table_5[4].value,table_5.eq(4));
			}
			if(flag==0)
			{
				alert("可提交策划！");
			    $(function(){$("#boPlace_table_submit").attr("disabled",false);});
			    $(function(){$("#tips").hide()}); 
		    }
		    else
		    {
			     
			    alert("未通过！请检查");
			    $(function(){$("#tips").show()}); 
			    $(function(){$("#p1").html(txt)}); 

		    }
			break;
		}
		case 6:
		{
			var table_6=$("#ta_spPlace input");
			var table_6_=$("#ta_spPlace textarea");
			//查空
			for(i=0;i<table_6.length;i++)
			{
				if(i==7) continue;
				check_null(table_6[i].value,table_6.eq(i));
			}
			if(flag==0)
			{
				i=0,check_length(table_6[i].value,table_6.eq(i),25);
				i=1,check_length(table_6[i].value,table_6.eq(i),30);
				i=2,check_length(table_6[i].value,table_6.eq(i),5);
				i=3,check_length(table_6[i].value,table_6.eq(i),10);
				i=6,check_length(table_6[i].value,table_6.eq(i),1);
			}
			check_null(table_6_[0].value,table_6_.eq(0));
			if(flag==0)
			{
				i=0,check_length(table_6_[i].value,table_6_.eq(i),500);
			}
			if(table_6[7].value=="有") 
			{
				check_null(table_6_[1].value,table_6_.eq(1));
				if(flag==0)
				{
					i=1,check_length(table_6_[i].value,table_6_.eq(i),25);
				}
			}
			else
			{
				check_null(table_6[7].value,table_6.eq(7));
				if(flag==0)
				{
					i=6,check_length(table_6[i].value,table_6.eq(i),25);
				}
			}
			if(flag==0)
			{
				check_number(table_6[2].value,table_6.eq(2));
				check_time(table_6[4].value,table_6.eq(4));
				if(flag==0)
				{
					i=8,check_length(table_6[i].value,table_6.eq(i),10);
					i=10,check_length(table_6[i].value,table_6.eq(i),15);
					i=11,check_length(table_6[i].value,table_6.eq(i),15);
					i=12,check_length(table_6[i].value,table_6.eq(i),10);
				}
				if(flag==0)
				{
					check_tel(table_6[9].value,table_6.eq(9));
					check_tel(table_6[13].value,table_6.eq(13));
				}
			}
			if(flag==0)
			{
				alert("可提交策划！");
			    $(function(){$("#boPlace_table_submit").attr("disabled",false);});
			    $(function(){$("#tips").hide()}); 
		    }
		    else
		    {
			     
			    alert("未通过！请检查");
			    $(function(){$("#tips").show()}); 
			    $(function(){$("#p1").html(txt)}); 

		    }
			break;
			
		}
		case 7:
		{
			var table_7=$("#ta_spoCourt input");
			var table_7_=$("#ta_spoCourt textarea");
			//查空
			for(i=0;i<table_7.length;i++)
			{
				check_null(table_7[i].value,table_7.eq(i));
			}
			if(flag==0)
			{
				i=0,check_length(table_7[i].value,table_7.eq(i),30);
				i=1,check_length(table_7[i].value,table_7.eq(i),10);
				i=3,check_length(table_7[i].value,table_7.eq(i),10);
				i=4,check_length(table_7[i].value,table_7.eq(i),15);
				i=5,check_length(table_7[i].value,table_7.eq(i),10);
				i=6,check_length(table_7[i].value,table_7.eq(i),10);
			}
			check_null(table_7_[0].value,table_7_.eq(0));
			check_null(table_7_[1].value,table_7_.eq(1));
			if(flag==0)
			{
				i=0,check_length(table_7_[i].value,table_7_.eq(i),500);
				i=0,check_length(table_7_[i].value,table_7_.eq(i),200);
			}
			if(flag==0)
			{
				check_tel(table_7[2].value,table_7.eq(2));
				
			}
			if(flag==0)
			{
				alert("可提交策划！");
			    $(function(){$("#boPlace_table_submit").attr("disabled",false);});
			    $(function(){$("#tips").hide()}); 
		    }
		    else
		    {
			     
			    alert("未通过！请检查");
			    $(function(){$("#tips").show()}); 
			    $(function(){$("#p1").html(txt)}); 

		    }
			break;
		}
		case 8:
		{
			var table_8=$("#ta_eaThird input");
			var table_8_=$("#ta_eaThird textarea");
			//查空
			for(i=0;i<table_8.length;i++)
			{
				if(i==5) continue;
				check_null(table_8[i].value,table_8.eq(i));
			}
			if(flag==0)
			{
				i=0,check_length(table_8[i].value,table_8.eq(i),25);
				i=1,check_length(table_8[i].value,table_8.eq(i),30);
				i=2,check_length(table_8[i].value,table_8.eq(i),5);
				i=3,check_length(table_8[i].value,table_8.eq(i),10);
			}
			check_null(table_8_[0].value,table_8_.eq(0));
			if(flag==0)
			{
				i=0,check_length(table_8_[i].value,table_8_.eq(i),500);
			}
			if(table_8[5].value=="有") 
			{
				check_null(table_8_[1].value,table_8_.eq(1));
				if(flag==0)
				{
					i=1,check_length(table_8_[i].value,table_8_.eq(i),50);
				}
			}
			else
			{
				check_null(table_8[5].value,table_8.eq(5));
				{
					i=5,check_length(table_8[i].value,table_8.eq(i),1);
				}
			}
			if(flag==0)
			{
				i=6,check_length(table_8[i].value,table_8.eq(i),10);
				i=8,check_length(table_8[i].value,table_8.eq(i),15);
				i=9,check_length(table_8[i].value,table_8.eq(i),15);
				i=10,check_length(table_8[i].value,table_8.eq(i),10);
			}
			if(flag==0)
			{
				check_number(table_8[2].value,table_8.eq(2));
				check_time(table_8[4].value,table_8.eq(4));
				if(flag==0)
				{
					check_tel(table_8[7].value,table_8.eq(7));
					check_tel(table_8[11].value,table_8.eq(11));
				}
			}
			if(flag==0)
			{
				alert("可提交策划！");
			    $(function(){$("#boPlace_table_submit").attr("disabled",false);});
			    $(function(){$("#tips").hide()}); 
		    }
		    else
		    {
			     
			    alert("未通过！请检查");
			    $(function(){$("#tips").show()}); 
			    $(function(){$("#p1").html(txt)}); 

		    }
			break;
		}
	    case 9:
		{
			var filepath = $("input#wordFile_otherplace").val();
                var extStart = filepath.lastIndexOf(".");
                var ext = filepath.substring(extStart, filepath.length).toUpperCase();
                if(filepath=="")
				{
					alert("请上传文件");
					return;
				}
				if (ext != ".DOCX" && ext != ".DOC") 
				{
                    alert("文件仅限于dox或docx类型");
                    //$("#fileType").text("");
                    //$("#fileSize").text("");
					return;
                } 
				else 
				{
					//$("#fileType").text(ext) ;
				}
                try {
                 var size = 0;
                
                 if (window.ActiveXObject) {//ie旧版浏览器
                     var fileMgr = new ActiveXObject("Scripting.FileSystemObject");
                     var filePath = $('#wordFile_otherplace')[0].value;
                     var fileObj = fileMgr.getFile(filePath);
                     size = fileObj.size; //byte
                     size = size / 1024;//kb
                     size = size / 1024;//mb
					 if (size > 0) 
						{
                            if (size > 3 ) 
							{
                                alert("文件大小不能超过3M！");
                            } 
							else
							{
								alert("通过，请提交");
								$(function(){$("#boPlace_table_submit").attr("disabled",false);});
							}
							//else {
                              //  var num03 = img.fileSize / 1024;
                                //num04 = num03.toFixed(2)
                                //$("#fileSize").text(num04 + "KB");
                            //}
                            
                        }
                 } else {//其它浏览器
                    size = $('#wordFile_otherplace')[0].files[0].size;//byte
                    size = size / 1024;//kb
                    size = size / 1024;//mb
					if (size > 0) 
						{
                            if (size > 3 ) 
							{
                                alert("文件大小不能超过3M！");
                            } 
							else
							{
								alert("通过，请提交");
								$(function(){$("#boPlace_file_submit").attr("disabled",false);});
							}
							//else {
                              //  var num03 = img.fileSize / 1024;
                                //num04 = num03.toFixed(2)
                                //$("#fileSize").text(num04 + "KB");
                            //}
                            
                        }
                 }
                 
             } catch (e) {
                 alert("错误：" + e);
				 
		}
         }
	}
}
function boPlace_reset(){
	if(confirm("是否保存草稿？")){
		alert("已保存草稿");
		}else{
			location.href="file:///C:/Users/zhaoyuc/Desktop/%E7%89%A9%E8%B5%84%E7%B3%BB%E7%BB%9F/%E7%89%A9%E8%B5%84%E7%B3%BB%E7%BB%9F_%E7%94%A8%E6%88%B7.html";
			}
	}


function boPlace_file_reset(){
	if(confirm("是否保存草稿？")){
		alert("已保存草稿");
		}
}

function bo_othStuff_submit(){
		document.getElementById("Form2").submit();
		document.getElementById("stateQuery_table").style.display = "none";
		$(function(){$("#bo_othStuff_table_submit").attr("disabled",true);});
	}
	
	
function bo_othStuff_confirm(){
	            var filepath = $("input#wordFile_bo_other").val();
                var extStart = filepath.lastIndexOf(".");
                var ext = filepath.substring(extStart, filepath.length).toUpperCase();
                if(filepath=="")
				{
					alert("请上传文件");
					return;
				}
				if (ext != ".DOCX" && ext != ".DOC") 
				{
                    alert("文件仅限于dox或doxc类型");
                    //$("#fileType").text("");
                    //$("#fileSize").text("");
					return;
                } 
				else 
				{
					//$("#fileType").text(ext) ;
				}
                try {
                 var size = 0;
                
                 if (window.ActiveXObject) {//ie旧版浏览器
                     var fileMgr = new ActiveXObject("Scripting.FileSystemObject");
                     var filePath = $('#wordFile_bo_other')[0].value;
                     var fileObj = fileMgr.getFile(filePath);
                     size = fileObj.size; //byte
                     size = size / 1024;//kb
                     size = size / 1024;//mb
					 if (size > 0) 
						{
                            if (size > 3 ) 
							{
                                alert("文件大小不能超过3M！");
                            } 
							else
							{
								alert("通过，请提交");
								$(function(){$("#bo_othStuff_table_submit").attr("disabled",false);});
							}
							//else {
                              //  var num03 = img.fileSize / 1024;
                                //num04 = num03.toFixed(2)
                                //$("#fileSize").text(num04 + "KB");
                            //}
                          
                        }
                 } else {//其它浏览器
                    size = $('#wordFile_bo_other')[0].files[0].size;//byte
                    size = size / 1024;//kb
                    size = size / 1024;//mb
					if (size > 0) 
						{
                            if (size > 3 ) 
							{
                                alert("文件大小不能超过3M！");
                            } 
							else
							{
								alert("通过，请提交");
								$(function(){$("#bo_othStuff_table_submit").attr("disabled",false);});
							}
							//else {
                              //  var num03 = img.fileSize / 1024;
                                //num04 = num03.toFixed(2)
                                //$("#fileSize").text(num04 + "KB");
                            //}
                         
                        }
                 }
             } catch (e) {
                 alert("错误：" + e);
            }
}


function bo_othStuff_reset(){
	if(confirm("是否保存草稿？")){
		alert("已保存草稿");
		}
	}

//其他借用	
function show_bo_othStuff_table(){
    document.getElementById("action_type").value = "OtherStuff";
	document.getElementById("stateQuery_table").style.display = "none";
	document.getElementById("boPlace").style.display = "none";
	document.getElementById("center").style.display = "none";
	document.getElementById("bo_othStuff_table").style.display = "block";
	document.getElementById("boPlace_table").style.display = "none"
	document.getElementById("boStuff_table").style.display = "none"
	document.getElementById("apply").style.height = "500px";
	document.getElementById("bo_othStuff_table_submit").style.display = "block";
	document.getElementById("bo_othStuff_table_confirm").style.display = "block";
	
	document.getElementById("wordFile_otherplace").style.display = "none";
	document.getElementById("wordFile_bo_other").style.display = "block";
	$(function(){$("#wordFile_bo_other").attr("disabled",false);});
	
	$(function(){$("#boStuff_table").attr("disabled",true);});
	$(function(){$("#boPlace_table").attr("disabled",true);});
	$(function(){$("#bo_othStuff_table").attr("disabled",false);});
	$(function(){$("#bo_othStuff_table_submit").attr("disabled",true);});
	$(function(){$("#bo_othStuff_table_confirm").attr("disabled",false);});
	table_number=10;
	
	}
	
//物资申请表	
function show_stuff(){
    
    document.getElementById("action_type").value = "Stuff";
	document.getElementById("boPlace_table").style.display = "none";
	document.getElementById("boPlace").style.display = "none";
	document.getElementById("stateQuery_table").style.display = "none";
	document.getElementById("bo_othStuff_table").style.display = "none";
	document.getElementById("boStuff_table").style.display = "block";
	document.getElementById("boStuff_table_submit").style.display = "block";
	document.getElementById("center").style.display = "none";
	document.getElementById("boStuff_table_confirm").style.display = "block";
	
	document.getElementById("wordFile_otherplace").style.display = "none";
	document.getElementById("wordFile_bo_other").style.display = "none";
	
	
	$(function(){$("#boStuff_table").attr("disabled",false);});
	$(function(){$("#boPlace_table").attr("disabled",true);});
	$(function(){$("#bo_othStuff_table").attr("disabled",true);});
	$(function(){$("#boStuff_table_submit").attr("disabled",true);});
	$(function(){$("#boStuff_table_confirm").attr("disabled",false);});
	
	 
	table_number=1;
}
	
//查询
function show_query(){
	document.getElementById("boStuff_table").style.display = "none"
	document.getElementById("boPlace_table").style.display = "none";
	document.getElementById("bo_othStuff_table").style.display = "none";
	document.getElementById("center").style.display = "none";
	document.getElementById("stateQuery").style.top = "375px";
	document.getElementById("boPlace").style.display = "none";
	document.getElementById("center").style.display = "none";
	document.getElementById("stateQuery_table").style.display = "block";
	document.getElementById("wordFile_otherplace").style.display = "none";
	
	document.getElementById("wordFile_bo_other").style.display = "none";
	changePlaceOfFooter();
}
function changePlaceOfFooter(){
	var X = $('#myForm tr:visible').last().offset().top;
	if(x>900)
	{
		X+=150;
	    $("input:visible").css("top",X);
	}
	
}

//场地借用（彩喷悬挂）
function show_colPrinting(){
    document.getElementById("action_type").value = "ColorPrinting";
	document.getElementById("ta_colPrinting").style.display = "block";
	document.getElementById("boPlace_table_submit").style.display = "block";
	document.getElementById("boPlace_table_confirm").style.display = "block";
	document.getElementById("ta_colClass").style.display = "none";
	document.getElementById("ta_roShow").style.display = "none";
	document.getElementById("ta_buClass").style.display = "none";
	document.getElementById("ta_buclass2").style.display = "none";
	document.getElementById("ta_spPlace").style.display = "none";
	document.getElementById("ta_spoCourt").style.display = "none";
	document.getElementById("ta_eaThird").style.display = "none";
	document.getElementById("ta_othPlace").style.display = "none";
	
	document.getElementById("wordFile_otherplace").style.display = "none";
	
	document.getElementById("wordFile_bo_other").style.display = "none";
	
	
	$(function(){$("#boStuff_table").attr("disabled",true);});
	$(function(){$("#boPlace_table").attr("disabled",false);});
    $(function(){$("#ta_colPrinting").attr("disabled",false);});
	$(function(){$("#ta_colClass").attr("disabled",true);});
	$(function(){$("#ta_roShow").attr("disabled",true);});
	$(function(){$("#ta_buClass").attr("disabled",true);});
	$(function(){$("#ta_buclass2").attr("disabled",true);});
	$(function(){$("#ta_spPlace").attr("disabled",true);});
	$(function(){$("#ta_spoCourt").attr("disabled",true);});
	$(function(){$("#ta_eaThird").attr("disabled",true);});
	$(function(){$("#ta_othPlace").attr("disabled",true);});
	$(function(){$("#bo_othStuff_table").attr("disabled",true);});
	$(function(){$("#boPlace_table_submit").attr("disabled",true);});
	$(function(){$("#boPlace_table_confirm").attr("disabled",false);});

    table_number=1;
	}

//场地借用（大活教室）
function show_colClass(){
    document.getElementById("action_type").value = "StudentCenter";
	document.getElementById("ta_colClass").style.display = "block";
	document.getElementById("boPlace_table_submit").style.display = "block";
	document.getElementById("boPlace_table_confirm").style.display = "block";
	document.getElementById("ta_colPrinting").style.display = "none";
	document.getElementById("ta_roShow").style.display = "none";
	document.getElementById("ta_buClass").style.display = "none";
	document.getElementById("ta_buclass2").style.display = "none";
	document.getElementById("ta_spPlace").style.display = "none";
	document.getElementById("ta_spoCourt").style.display = "none";
	document.getElementById("ta_eaThird").style.display = "none";
	document.getElementById("ta_othPlace").style.display = "none";
	
	document.getElementById("wordFile_otherplace").style.display = "none";
	
	document.getElementById("wordFile_bo_other").style.display = "none";
	
    
	$(function(){$("#boStuff_table").attr("disabled",true);});
	$(function(){$("#boPlace_table").attr("disabled",false);});
    $(function(){$("#ta_colPrinting").attr("disabled",true);});
	$(function(){$("#ta_colClass").attr("disabled",false);});
	$(function(){$("#ta_roShow").attr("disabled",true);});
	$(function(){$("#ta_buClass").attr("disabled",true);});
	$(function(){$("#ta_buclass2").attr("disabled",true);});
	$(function(){$("#ta_spPlace").attr("disabled",true);});
	$(function(){$("#ta_spoCourt").attr("disabled",true);});
	$(function(){$("#ta_eaThird").attr("disabled",true);});
	$(function(){$("#ta_othPlace").attr("disabled",true);});
	$(function(){$("#bo_othStuff_table").attr("disabled",true);});
	$(function(){$("#boPlace_table_submit").attr("disabled",true);});
	$(function(){$("#boPlace_table_confirm").attr("disabled",false);});
	table_number=2;
	}
	
	
//场地借用（路演场地）
function show_roShow(){
    document.getElementById("action_type").value = "RoadShow";
	document.getElementById("ta_roShow").style.display = "block";
	document.getElementById("boPlace_table_submit").style.display = "block";
	document.getElementById("boPlace_table_confirm").style.display = "block";
	document.getElementById("ta_colPrinting").style.display = "none";
	document.getElementById("ta_colClass").style.display = "none";
	document.getElementById("ta_buClass").style.display = "none";
	document.getElementById("ta_buclass2").style.display = "none";
	document.getElementById("ta_spPlace").style.display = "none";
	document.getElementById("ta_spoCourt").style.display = "none";
	document.getElementById("ta_eaThird").style.display = "none";
	document.getElementById("ta_othPlace").style.display = "none";
	
	document.getElementById("wordFile_otherplace").style.display = "none";
	
	document.getElementById("wordFile_bo_other").style.display = "none";
	
	
	$(function(){$("#boStuff_table").attr("disabled",true);});
	$(function(){$("#boPlace_table").attr("disabled",false);});
    $(function(){$("#ta_colPrinting").attr("disabled",true);});
	$(function(){$("#ta_colClass").attr("disabled",true);});
	$(function(){$("#ta_roShow").attr("disabled",false);});
	$(function(){$("#ta_buClass").attr("disabled",true);});
	$(function(){$("#ta_buclass2").attr("disabled",true);});
	$(function(){$("#ta_spPlace").attr("disabled",true);});
	$(function(){$("#ta_spoCourt").attr("disabled",true);});
	$(function(){$("#ta_eaThird").attr("disabled",true);});
	$(function(){$("#ta_othPlace").attr("disabled",true);});
	$(function(){$("#bo_othStuff_table").attr("disabled",true);});
	$(function(){$("#boPlace_table_submit").attr("disabled",true);});
	$(function(){$("#boPlace_table_confirm").attr("disabled",false);});
	table_number=3;
	}
function show_buClass(){
    document.getElementById("action_type").value = "BuildingClassroom";
	document.getElementById("ta_buClass").style.display = "block";
	document.getElementById("ta_buclass2").style.display = "none";
	document.getElementById("boPlace_table_submit").style.display = "block";
	document.getElementById("boPlace_table_confirm").style.display = "block";
	document.getElementById("ta_colPrinting").style.display = "none";
	document.getElementById("ta_colClass").style.display = "none";
	document.getElementById("ta_roShow").style.display = "none";
	document.getElementById("ta_spPlace").style.display = "none";
	document.getElementById("ta_spoCourt").style.display = "none";
	document.getElementById("ta_eaThird").style.display = "none";
	document.getElementById("ta_othPlace").style.display = "none";
	
	document.getElementById("wordFile_otherplace").style.display = "none";
	
	document.getElementById("wordFile_bo_other").style.display = "none";
	
	
	$(function(){$("#boStuff_table").attr("disabled",true);});
	$(function(){$("#boPlace_table").attr("disabled",false);});
    $(function(){$("#ta_colPrinting").attr("disabled",true);});
	$(function(){$("#ta_colClass").attr("disabled",true);});
	$(function(){$("#ta_roShow").attr("disabled",true);});
	$(function(){$("#ta_buClass").attr("disabled",false);});
	$(function(){$("#ta_buclass2").attr("disabled",true);});
	$(function(){$("#ta_spPlace").attr("disabled",true);});
	$(function(){$("#ta_spoCourt").attr("disabled",true);});
	$(function(){$("#ta_eaThird").attr("disabled",true);});
	$(function(){$("#ta_othPlace").attr("disabled",true);});
	$(function(){$("#bo_othStuff_table").attr("disabled",true);});
	$(function(){$("#boPlace_table_submit").attr("disabled",true);});
	$(function(){$("#boPlace_table_confirm").attr("disabled",false);});
	table_number=4;
	}
function show_buclass2(){
    document.getElementById("action_type").value = "BuildingClassroom2";
	document.getElementById("ta_buClass").style.display = "none";
	document.getElementById("ta_buclass2").style.display = "block";
	document.getElementById("boPlace_table_submit").style.display = "block";
	document.getElementById("boPlace_table_confirm").style.display = "block";
	document.getElementById("ta_colPrinting").style.display = "none";
	document.getElementById("ta_colClass").style.display = "none";
	document.getElementById("ta_roShow").style.display = "none";
	document.getElementById("ta_spPlace").style.display = "none";
	document.getElementById("ta_spoCourt").style.display = "none";
	document.getElementById("ta_eaThird").style.display = "none";
	document.getElementById("ta_othPlace").style.display = "none";
	
	document.getElementById("wordFile_otherplace").style.display = "none";
	
	document.getElementById("wordFile_bo_other").style.display = "none";
	
	
	$(function(){$("#boStuff_table").attr("disabled",true);});
	$(function(){$("#boPlace_table").attr("disabled",false);});
    $(function(){$("#ta_colPrinting").attr("disabled",true);});
	$(function(){$("#ta_colClass").attr("disabled",true);});
	$(function(){$("#ta_roShow").attr("disabled",true);});
	$(function(){$("#ta_buClass").attr("disabled",true);});
	$(function(){$("#ta_buclass2").attr("disabled",false);});
	$(function(){$("#ta_spPlace").attr("disabled",true);});
	$(function(){$("#ta_spoCourt").attr("disabled",true);});
	$(function(){$("#ta_eaThird").attr("disabled",true);});
	$(function(){$("#ta_othPlace").attr("disabled",true);});
	$(function(){$("#bo_othStuff_table").attr("disabled",true);});
	$(function(){$("#boPlace_table_submit").attr("disabled",true);});
	$(function(){$("#boPlace_table_confirm").attr("disabled",false);});
	table_number=5;
	}
function show_spPlace(){
    document.getElementById("action_type").value = "SpecialPlace";
	document.getElementById("ta_spPlace").style.display = "block";
	document.getElementById("ta_buclass2").style.display = "none";
	document.getElementById("boPlace_table_submit").style.display = "block";
	document.getElementById("boPlace_table_confirm").style.display = "block";
	document.getElementById("ta_colPrinting").style.display = "none";
	document.getElementById("ta_colClass").style.display = "none";
	document.getElementById("ta_roShow").style.display = "none";
	document.getElementById("ta_buClass").style.display = "none";
	document.getElementById("ta_spoCourt").style.display = "none";
	document.getElementById("ta_eaThird").style.display = "none";
	document.getElementById("ta_othPlace").style.display = "none";
	
	document.getElementById("wordFile_otherplace").style.display = "none";
	document.getElementById("wordFile_bo_other").style.display = "none";
	
    
	$(function(){$("#boStuff_table").attr("disabled",true);});
	$(function(){$("#boPlace_table").attr("disabled",false);});
    $(function(){$("#ta_colPrinting").attr("disabled",true);});
	$(function(){$("#ta_colClass").attr("disabled",true);});
	$(function(){$("#ta_roShow").attr("disabled",true);});
	$(function(){$("#ta_buClass").attr("disabled",true);});
	$(function(){$("#ta_buclass2").attr("disabled",true);});
	$(function(){$("#ta_spPlace").attr("disabled",false);});
	$(function(){$("#ta_spoCourt").attr("disabled",true);});
	$(function(){$("#ta_eaThird").attr("disabled",true);});
	$(function(){$("#ta_othPlace").attr("disabled",true);});
	$(function(){$("#bo_othStuff_table").attr("disabled",true);});
	$(function(){$("#boPlace_table_submit").attr("disabled",true);});
	$(function(){$("#boPlace_table_confirm").attr("disabled",false);});
	table_number=6;
	}
function show_spoCourt(){
    document.getElementById("action_type").value = "SportCourt";
	document.getElementById("ta_spoCourt").style.display = "block";
	document.getElementById("ta_buclass2").style.display = "none";
	document.getElementById("boPlace_table_submit").style.display = "block";
	document.getElementById("boPlace_table_confirm").style.display = "block";
	document.getElementById("ta_colPrinting").style.display = "none";
	document.getElementById("ta_colClass").style.display = "none";
	document.getElementById("ta_roShow").style.display = "none";
	document.getElementById("ta_buClass").style.display = "none";
	document.getElementById("ta_spPlace").style.display = "none";
	document.getElementById("ta_eaThird").style.display = "none";
	document.getElementById("ta_othPlace").style.display = "none";
	
	document.getElementById("wordFile_otherplace").style.display = "none";
	
	document.getElementById("wordFile_bo_other").style.display = "none";
	
    
	$(function(){$("#boStuff_table").attr("disabled",true);});
	$(function(){$("#boPlace_table").attr("disabled",false);});
    $(function(){$("#ta_colPrinting").attr("disabled",true);});
	$(function(){$("#ta_colClass").attr("disabled",true);});
	$(function(){$("#ta_roShow").attr("disabled",true);});
	$(function(){$("#ta_buClass").attr("disabled",true);});
	$(function(){$("#ta_buclass2").attr("disabled",true);});
	$(function(){$("#ta_spPlace").attr("disabled",true);});
	$(function(){$("#ta_spoCourt").attr("disabled",false);});
	$(function(){$("#ta_eaThird").attr("disabled",true);});
	$(function(){$("#ta_othPlace").attr("disabled",true);});
	$(function(){$("#bo_othStuff_table").attr("disabled",true);});
	$(function(){$("#boPlace_table_submit").attr("disabled",true);});
	$(function(){$("#boPlace_table_confirm").attr("disabled",false);});
	table_number=7;
	}
function show_eaThird(){
    document.getElementById("action_type").value = "EastThird";
	document.getElementById("ta_eaThird").style.display = "block";
	document.getElementById("ta_buclass2").style.display = "none";
	document.getElementById("boPlace_table_submit").style.display = "block";
	document.getElementById("boPlace_table_confirm").style.display = "block";
	document.getElementById("ta_colPrinting").style.display = "none";
	document.getElementById("ta_colClass").style.display = "none";
	document.getElementById("ta_roShow").style.display = "none";
	document.getElementById("ta_buClass").style.display = "none";
	document.getElementById("ta_spPlace").style.display = "none";
	document.getElementById("ta_spoCourt").style.display = "none";
	document.getElementById("ta_othPlace").style.display = "none";
	
	document.getElementById("wordFile_otherplace").style.display = "none";
	document.getElementById("wordFile_bo_other").style.display = "none";
	
	
	$(function(){$("#boStuff_table").attr("disabled",true);});
	$(function(){$("#boPlace_table").attr("disabled",false);});
    $(function(){$("#ta_colPrinting").attr("disabled",true);});
	$(function(){$("#ta_colClass").attr("disabled",true);});
	$(function(){$("#ta_roShow").attr("disabled",true);});
	$(function(){$("#ta_buClass").attr("disabled",true);});
	$(function(){$("#ta_buclass2").attr("disabled",true);});
	$(function(){$("#ta_spPlace").attr("disabled",true);});
	$(function(){$("#ta_spoCourt").attr("disabled",true);});
	$(function(){$("#ta_eaThird").attr("disabled",false);});
	$(function(){$("#ta_othPlace").attr("disabled",true);});
	$(function(){$("#bo_othStuff_table").attr("disabled",true);});
	$(function(){$("#boPlace_table_submit").attr("disabled",true);});
	$(function(){$("#boPlace_table_confirm").attr("disabled",false);});
	table_number=8;
	}
function show_othPlace(){
    document.getElementById("action_type").value = "OtherPlace";
	document.getElementById("ta_othPlace").style.display = "block";
	document.getElementById("boPlace_table_submit").style.display = "none";
	document.getElementById("boPlace_table_confirm").style.display = "none";
	document.getElementById("boPlace_file_submit").style.display = "block";
	document.getElementById("boPlace_file_confirm").style.display = "block";
	document.getElementById("ta_colPrinting").style.display = "none";
	document.getElementById("ta_colClass").style.display = "none";
	document.getElementById("ta_roShow").style.display = "none";
	document.getElementById("ta_buClass").style.display = "none";
	document.getElementById("ta_buclass2").style.display = "none";
	document.getElementById("ta_spPlace").style.display = "none";
	document.getElementById("ta_spoCourt").style.display = "none";
	document.getElementById("ta_eaThird").style.display = "none";
	
	document.getElementById("wordFile_otherplace").style.display = "block";
	document.getElementById("wordFile_bo_other").style.display = "none";
	$(function(){$("#wordFile_otherplace").attr("disabled",false);});
	
	
	$(function(){$("#boStuff_table").attr("disabled",true);});
	$(function(){$("#boPlace_table").attr("disabled",false);});
    $(function(){$("#ta_colPrinting").attr("disabled",true);});
	$(function(){$("#ta_colClass").attr("disabled",true);});
	$(function(){$("#ta_roShow").attr("disabled",true);});
	$(function(){$("#ta_buClass").attr("disabled",true);});
	$(function(){$("#ta_buclass2").attr("disabled",true);});
	$(function(){$("#ta_spPlace").attr("disabled",true);});
	$(function(){$("#ta_spoCourt").attr("disabled",true);});
	$(function(){$("#ta_eaThird").attr("disabled",true);});
	$(function(){$("#ta_othPlace").attr("disabled",false);});
	$(function(){$("#bo_othStuff_table").attr("disabled",true);});
	$(function(){$("#boPlace_table_submit").attr("disabled",true);});
	$(function(){$("#boPlace_table_confirm").attr("disabled",true);});
	$(function(){$("#boPlace_file_submit").attr("disabled",true);});
	$(function(){$("#boPlace_file_confirm").attr("disabled",false);});
	table_number=9;
	}
//二、验证时调用函数

//1.该项不为空


function check_null(x,y){
	if(x=="")
	{
		if(flag==0)  y.focus().select();
		txt+=(y.parent().prev().text()+":不能为空<br>");
		
		flag=1;
	}
}
//验证电话号码：^(\(\d{3,4}\)|\d{3,4}-)?\d{7,8}$：--正确格式为：XXXX-XXXXXXX，XXXX-XXXXXXXX，XXX-XXXXXXX，XXX-XXXXXXXX，XXXXXXX，XXXXXXXX。

//2.该项应含有数字
function check_number(x,y){
	var re=/[^0-9\u4e00-\u9fa5]/g
	if(re.test(x))
	{
		if(flag==0)  y.focus().select();
		txt=txt+y.parent().prev().text()+":应为数字<br>";
		
		flag=1;
	}
	
}
//3.电话或手机格式不对，/^(\(\d{3,4}\)|\d{3,4}-)?\d{7,8}$/，
function check_tel(x,y){
	var rephone=/^[1][3-8]+\d{9}/
	var retel=/^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/
	if(rephone.test(x)==false&&retel.test(x)==false)
	{
		if(flag==0)  y.focus().select();
		txt+=(y.parent().prev().text()+":手机或电话格式不正确<br>");
		
		
		flag=1;
	}
}

//4.活动时间
function check_time(x,y){
	if(x!="上午"&&x!="下午"&&x!="晚上")
	{
		if(flag==0)  y.focus().select();
		txt+=(y.parent().prev().text()+":请正确填写活动时间<br>");
		flag=1;
	}
}
//5.字数限制
function check_length(x,y,z)
{
	if(x.length>z)
	{
		if(flag==0)  y.focus().select();
		txt+=(y.parent().prev().text()+":该项不能超过"+z+"个字符<br>");
		flag=1;
	}
}