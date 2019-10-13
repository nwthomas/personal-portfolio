from django.contrib import admin
from django.urls import path
from graphene_django.views import GraphQLView
from decouple import config

urlpatterns = [
    # Administrative path for Django
    path('admin/', admin.site.urls),
    # Turns on GraphiQL
    path("graphql/", GraphQLView.as_view(graphiql=config("GRAPHIQL"))),
]
