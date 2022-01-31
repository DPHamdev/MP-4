from django.shortcuts import render

# Create your views here.


def booking(request):
    ''' A view to return to the booking page '''

    return render(request, 'booking.html')

