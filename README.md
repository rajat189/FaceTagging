# FaceTagging


Project : Face tagging

Introduction : This django project contains basic face tagging application.

Database : there are two tables in database(sqlite)
## Picture (id,pic_name) :- 
This contains imformation of all images 
## Picture_tags (id,pic_id,text,pic_x,pic_y) :- 
It contains imfomation of tags related to a image.
			
1. There is a view.py fle inside "tagging" app of this project where all backend operations are handled

"Templates" and "static" folder contains all the frontend part.
"index.html" - It will show all images stored in database.
"details.html" - It will show details related to a images (all the tags).

Ajax is used to fetch the data.

## Deployment
- python manage.py migrate
- python manage.py createsuperuser
- python manage.py unserver
- open 127.0.0.1:8000/images/ in browser.
