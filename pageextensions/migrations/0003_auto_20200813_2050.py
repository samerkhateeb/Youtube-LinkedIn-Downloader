# -*- coding: utf-8 -*-
# Generated by Django 1.11.29 on 2020-08-13 17:50
from __future__ import unicode_literals

import ckeditor.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pageextensions', '0002_pageextension_author'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pageextension',
            name='description',
            field=ckeditor.fields.RichTextField(),
        ),
    ]