from rest_framework import serializers
from tagging.models import Picture_tags

class TagSerializer(serializers.ModelSerializer):

    class Meta:
        model = Picture_tags
        fields = ('id', 'pic_id', 'name', 'pic_x', 'pic_y')

    def create(self, validated_data):
        pic_id = validated_data.get('pic_id', None)
        name = validated_data.get('name', None)
        pic_x = validated_data.get('pic_x', None)
        pic_y = validated_data.get('pic_y', None)
        return Picture_tags.objects.create(pic_id=pic_id, name=name, pic_x=pic_x, pic_y=pic_y)