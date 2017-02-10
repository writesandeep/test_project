from django.shortcuts import render
from django.template.loader import render_to_string
from django.shortcuts import render_to_response, redirect, render
# Create your views here.





def userlogin(request):
	variables={}
	print "*********************************"
	return render_to_response('index.html',variables)