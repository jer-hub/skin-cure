# Generated by Django 4.1.3 on 2023-01-03 06:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("skincure", "0009_profile_age_profile_name_alter_result_user"),
    ]

    operations = [
        migrations.RenameField(
            model_name="profile",
            old_name="user",
            new_name="guest",
        ),
        migrations.RenameField(
            model_name="result",
            old_name="user",
            new_name="profile",
        ),
    ]
