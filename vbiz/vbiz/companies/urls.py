from rest_framework import routers
from .api import CompanyViewSet

router = routers.DefaultRouter()
router.register('api/companies', CompanyViewSet,'companies')

urlpatterns = router.urls
