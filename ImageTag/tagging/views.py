from django.http import HttpResponse
from django.shortcuts import render,get_object_or_404
from .models import Picture,Picture_tags

from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser
from rest_framework.views import APIView
from rest_framework.decorators import permission_classes
from rest_framework import status, generics
from tagging.serializers import TagSerializer


def index(request):
    all_pics=Picture.objects.all()
    context={"all_pics":all_pics}
    return render(request,'index.html',context)

def detail(request,p_id):
    pic=Picture.objects.get(id=p_id)
    tags = Picture_tags.objects.filter(pic_id=p_id)
    context={"all_tags":tags,"curr_pic":pic}
    return render(request,'details.html',context)

def savetag(request,p_id):
    print("save tag called**************")
    if request.method=='POST':
        try:
            type=request.POST['type']
            print(p_id+"%%%%%%%%%%%%%")
            if type=='insert':
                Pid=Picture.objects.get(id=p_id)
                Pname=request.POST['name']
                Px=request.POST['pic_x']
                Py=request.POST['pic_y']
                query=Picture_tags(pic_id=Pid,name=Pname,pic_x=Px,pic_y=Py)
                query.save()
            elif type == 'remove':
                Tag=Picture_tags.objects.get(id=request.POST['tag_id']).delete()
        except KeyError:
            print("Sorry")
        tags = Picture_tags.objects.filter(pic_id=p_id)
        context=''
        for T in tags:
            context+='<li rel="'+str(T.id)+'"><a>'+T.name+'</a> (<a class="remove">Remove</a>)</li>'

        return HttpResponse(context)

def taglist(request,p_id):
    print("taglist called------------------------------")
    context=''
    if request.method == 'POST':
        tags = Picture_tags.objects.filter(pic_id=p_id)
        for T in tags:
            context+='<div class="tagview" style="left:'+str(T.pic_x)+'px;top:'+str(T.pic_y)+'px;" id="view_'+str(T.id )+'"><label style="color: white">'+T.name+'</label></div>'

    return HttpResponse(context)

######################rest_work###############################

class TagList(APIView):

	def get(self, request, format=None):
		tags = Picture_tags.objects.filter(pic_id=5)
		serializer = TagSerializer(tags, many=True)
		return Response(serializer.data)

	@permission_classes((IsAdminUser,))
	def post(self, request, format=None):
		user = request.useru
		serializer = TagSerializer(data=request.data, context={'user':user})
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TagDetail(generics.RetrieveUpdateDestroyAPIView):
	queryset = Picture_tags.objects.all()
	serializer_class = TagSerializer