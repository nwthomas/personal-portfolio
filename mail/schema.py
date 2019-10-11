from django.db import models
from uuid import uuid4
from django.contrib.auth.models import User


class Mail(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    name = models.CharField(max_length=256)
    email = models.CharField(max_length=256)
    subject = models.CharField(max_length=1000)
    message = models.CharField(max_length=2000)
