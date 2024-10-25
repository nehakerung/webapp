from lib2to3.fixes.fix_input import context

from django.shortcuts import render

posts = [
    {
        'author': 'Neha',
        'title' : 'First Post',
        'content': 'lorem ipsum',
        'date': '25 august'
    },
    {
        'author': 'Nagma',
        'title': 'Second Post',
        'content': 'lorem ipsum',
        'date': '23 September'
    }
]


def home(request):
    context = {
        'posts': posts
    }
    return render(request,
                  'blog/home.html', context)

def about(request):
    return render (request, 'blog/about.html',  {'title' : 'About'}
                   )