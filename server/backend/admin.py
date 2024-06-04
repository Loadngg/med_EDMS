from django.contrib import admin
from django.utils.safestring import mark_safe

from .models import Cabinet, Profile, Doctor, Client, Reason, Reception

admin.site.site_title = "med EDMS"
admin.site.site_header = "med EDMS"


@admin.register(Cabinet)
class CabinetAdmin(admin.ModelAdmin):
    list_display = ("id", "floor", "number")
    list_display_links = ("id", "floor", "number")
    save_as = True
    search_fields = ("number",)


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ("id", "name")
    list_display_links = ("id", "name")
    save_as = True
    search_fields = ("name",)


@admin.register(Doctor)
class DoctorAdmin(admin.ModelAdmin):
    list_display = ("id", "full_name", "reception_time_start", "reception_time_end", "get_image")
    list_display_links = ("id", "full_name")
    save_as = True
    readonly_fields = ("get_image",)
    fieldsets = (
        ("Основная информация", {
            "fields": (
                "full_name",
                ("image", "get_image"),
                ("reception_time_start", "reception_time_end",)
            ),
        }),
        ("Характеристики", {
            "fields": (
                "profile",
                "cabinet",
            ),
        }),
    )
    search_fields = ("full_name",)

    def get_image(self, obj):
        return mark_safe(f'<img src={obj.image.url} width="100" height="110">')

    get_image.short_description = "Фото доктора"


@admin.register(Client)
class ClientAdmin(admin.ModelAdmin):
    list_display = ("id", "full_name", "birth_date", "id_card", "policy")
    list_display_links = ("id", "full_name")
    save_as = True
    search_fields = ("full_name",)


@admin.register(Reason)
class ReasonAdmin(admin.ModelAdmin):
    list_display = ("id", "title", "urgency", "no_waiting")
    list_display_links = ("id", "title")
    list_editable = ("no_waiting",)
    save_as = True
    search_fields = ("title",)
    fieldsets = (
        ("Основная информация", {
            "fields": (
                "title",
                ("urgency", "no_waiting",)
            ),
        }),
    )


@admin.register(Reception)
class ReceptionAdmin(admin.ModelAdmin):
    list_display = ("id", "reception_time_start", "reception_time_end")
    list_display_links = ("id", "reception_time_start", "reception_time_end")
    save_as = True
    search_fields = ("reception_time_start", "reception_time_end",)
    fieldsets = (
        ("Время приёма", {
            "fields": ((
                           "reception_time_start",
                           "reception_time_end",
                       ),),
        }),
        ("Причина приёма", {
            "fields": (
                "reason",
            ),
        }),
        ("Врач и пациент", {
            "fields": ((
                           "doctor",
                           "client",
                       ),),
        }),
    )
