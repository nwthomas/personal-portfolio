from django.conf import settings
from graphene_django import DjangoObjectType
import graphene
from .models import Mail
from graphene_django.filter import DjangoFilterConnectionField


class MailType(DjangoObjectType):
    class Meta:
        model = Mail
        interfaces = (graphene.relay.Node,)
        # Filter fields must follow format of:
        # filter_fields = ['content1', 'content2']
        filter_fields = {
            'name': ['exact', 'icontains', 'startswith'],
            'email': ['exact', 'icontains', 'startswith'],
            'subject': ['exact', 'icontains', 'startswith'],
            'message': ['exact', 'icontains', 'startswith'],
        }


class Query(graphene.ObjectType):
    mail = DjangoFilterConnectionField(MailType)


# class CreateMail(graphene.Mutation):
#     class Arguments:
#         name = graphene.String()
#         email = graphene.String()
#         subject = graphene.String()
#         message = models.String()
#         honey_field = models.String()
#     mail = graphene.Field(MailType)
#     ok = graphene.Boolean()

#     def mutate(self, info, title, context):
#         print(title, context)


# class Mutation(graphene.ObjectType):
#     create_mail = CreateMail.Field()


# Exports the queries and mutations
schema = graphene.Schema(query=Query, mutation=None)
