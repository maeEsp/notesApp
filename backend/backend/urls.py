from django.urls import path, include
from rest_framework.routers import DefaultRouter
from notesapp.views import NoteItemViewSet

router = DefaultRouter()
router.register('notes', NoteItemViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]