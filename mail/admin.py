from django.contrib import admin
from .models import Mail


class MailAdmin(admin.ModelAdmin):
    readonly_fields = ["id"]


admin.site.register(Mail, MailAdmin)
