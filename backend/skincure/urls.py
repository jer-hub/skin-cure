from django.urls import path
from .views import delProfile, ProfileView, profileCases, delCase, predictCase, guestview, guestview2

urlpatterns = [
path('guest/', guestview, name='guest-view'),
path('guest2/', guestview2, name='guest-view2'),
path('profiles/', ProfileView.as_view(), name='profile-view'),
path('delete/profile/', delProfile, name="delete-profile"),
path('delete/profile/case/', delCase, name="delete-profile-case"),
path('<str:profileID>/cases/', profileCases, name="profile-cases"),
path('predict/', predictCase, name="predict-case"),
]
