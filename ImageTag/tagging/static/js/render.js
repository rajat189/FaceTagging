/**
 * Created by Rajat on 10/14/2017.
 */function imageFunction(){
		var event= document.createEvent('Event');
		event.initEvent('addNewTag',true,true);
		document.dispatchEvent(event);
	}

var AddTag = React.createClass({

	render:function () {
		return(
			<div id='tagit'>
				<div class='box'></div>
				<div class='name'>
					<div class='text'>Type any name or tag</div>
					<input type='text' name='txtname' id='tagname' />
					<input type='button' name='btnsave' value='Save' id='btnsave' />
					<input type='button' name='btncancel' value='Cancel' id='btncancel' />
				</div>
			</div>
		);
    }
});

var Movie = React.createClass({
			/*componentDidMount(){
				console.log('Hi');
				var counter = 0;
    			var mouseX = 0;
    			var mouseY = 0;
				$("#imgtag img").click(function(e){ // make sure the image is click
					var imgtag = $(this).parent(); // get the div to append the tagging list
					var saveBox="<div id='tagit'><div class='box'></div><div class='name'><div class='text'>Type any name or tag</div><input type='text' name='txtname' id='tagname' /><input type='button' name='btnsave' value='Save' id='btnsave' /><input type='button' name='btncancel' value='Cancel' id='btncancel' /></div></div>"
      				mouseX = e.pageX - $(imgtag).offset().left; // x and y axis
     		 		mouseY = e.pageY - $(imgtag).offset().top;
      				$('#tagit').remove(); // remove any tagit div first

      				$(imgtag).append(saveBox);
      				$('#tagit').css({top:mouseY,left:mouseX});

      				$('#tagname').focus();
    			});

				$('#tagit #btnsave').live('click',function(){
      				name = $('#tagname').val();
					var sendData = {
						pic_id:$('#PicID').val(),
						name: $('#tagname').val(),
						pic_x:mouseX,
						pic_y:mouseY
					}

      				$.ajax({
        				url: 'api/',
						dataType: 'json',
						method: 'POST',
        				data: sendData,
        				cache: true,
        				success: function(data){
          					id = data.id;
							window.location.href = "http://127.0.0.1:8000/images/"+id+"/";
          					$('#tagit').fadeOut();
        				}
      				});

    			});

     			$('#tagit #btncancel').live('click',function(){
					$('#tagit').fadeOut();

				});

    			$('#taglist li').live('mouseover mouseout',function(event){
      				id = $(this).attr("rel");
      				if (event.type == "mouseover"){
        				$('#view_' + id).show();
      				}else{
        				$('#view_' + id).hide();
      				}
    			});
    			$('#taglist li a.remove').live('click',function(){
      				id = $(this).parent().attr("rel");
      				// get all tag on page load
      				$.ajax({
        			type: "POST",
        			url: "savetag/",
        			data: {
        				tag_id:id,
            			type:"remove",
            			csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val()
        			},
        			success: function(data){
          			viewtag();
        			}
      			});
    		});

    		viewtag(); // get all tag on page load
			function viewtag(picId){
      			// get the tag list with action remove
      			$.ajax({
        		type: "POST",
        		url: "savetag/",
        		data:{
            		pic_id:picId,
            		csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val()
        		},
        		cache: true,
        		success: function(data){
          			$('#taglist ol').html(data);
        		}
      		});

      // get the tag list for boxes
      		$.ajax({
        		type: "POST",
        		url: "taglist/",
        		data:{
            		pic_id:picId,
            		csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val()
        		},
        		cache: true,
        		success: function(data){
          			$('#tagbox').html(data);
        		}
      		});
    	}
    	}, */
			render: function() {
				return (
					<div>
						<h1>Tagging</h1>
						<div id="imgtag">
							<div id="tagging"></div>
							<img src="image1.jpg" onClick="" alt="my image" width="500" height="400"/>
							<h3 id="PicID">6</h3>
							<div id="tagbox">
							</div>
						</div>
						<div id="taglist">
							<span class="tagtitle" style="">List of Tags</span>
							<ol>
							</ol>
						</div>
					</div>
					);
            }
        });
ReactDOM.render(
	<Movie/>
	, document.getElementById('tagging')
);
