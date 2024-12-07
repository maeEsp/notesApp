from django.urls import path, include
from rest_framework.routers import DefaultRouter
from notesapp.views import NoteItemViewSet
from django.contrib import admin

router = DefaultRouter()
router.register('notes', NoteItemViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]