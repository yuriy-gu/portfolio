$(document).ready(function(){$(".nav-list__item-link").on("click",function(){$(".nav-list__item").children().removeClass("nav_active"),$(this).addClass("nav_active")}),$(".mobile-nav_title").click(function(){$(".nav-list").toggle("slow"),$(".nav-list__item").click(function(){$(".nav-list").css("display","none")})}),$(".slider").slick({infinite:!0,autoplay:!0,slidesToShow:5,slidesToScroll:1,responsive:[{breakpoint:1200,settings:{slidesToShow:4,arrows:!1}},{breakpoint:768,settings:{slidesToShow:3,arrows:!1}},{breakpoint:600,settings:{slidesToShow:2,arrows:!1}},{breakpoint:480,settings:{slidesToShow:1,arrows:!1}}]})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJvbiIsImNoaWxkcmVuIiwicmVtb3ZlQ2xhc3MiLCJ0aGlzIiwiYWRkQ2xhc3MiLCJjbGljayIsInRvZ2dsZSIsImNzcyIsInNsaWNrIiwiaW5maW5pdGUiLCJhdXRvcGxheSIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsImFycm93cyJdLCJtYXBwaW5ncyI6IkFBQUFBLEVBQUVDLFVBQVVDLE1BQU0sV0FHaEJGLEVBQUUsd0JBQXdCRyxHQUFHLFFBQVEsV0FDbkNILEVBQUUsbUJBQW1CSSxXQUFXQyxZQUFZLGNBQzVDTCxFQUFFTSxNQUFNQyxTQUFTLGdCQUduQlAsRUFBRSxxQkFBcUJRLE1BQU0sV0FDM0JSLEVBQUUsYUFBYVMsT0FBTyxRQUN0QlQsRUFBRSxtQkFBbUJRLE1BQU0sV0FDekJSLEVBQUUsYUFBYVUsSUFBSSxVQUFXLFlBS2pDVixFQUFFLFdBQVdXLE9BQ2RDLFVBQVUsRUFDVkMsVUFBVSxFQUNWQyxhQUFjLEVBQ2RDLGVBQWdCLEVBQ2hCQyxhQUVJQyxXQUFZLEtBQ1pDLFVBQ0FKLGFBQWMsRUFDZEssUUFBUSxLQUlSRixXQUFZLElBQ1pDLFVBQ0FKLGFBQWMsRUFDZEssUUFBUSxLQUlSRixXQUFZLElBQ1pDLFVBQ0FKLGFBQWMsRUFDZEssUUFBUSxLQUlSRixXQUFZLElBQ1pDLFVBQ0FKLGFBQWMsRUFDZEssUUFBUSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiBcclxuIC8vbmF2aWdhdGlvbiAgXHJcbiAgJCgnLm5hdi1saXN0X19pdGVtLWxpbmsnKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcubmF2LWxpc3RfX2l0ZW0nKS5jaGlsZHJlbigpLnJlbW92ZUNsYXNzKCduYXZfYWN0aXZlJyk7XHJcbiAgICAkKHRoaXMpLmFkZENsYXNzKFwibmF2X2FjdGl2ZVwiKTtcclxuICB9KTtcclxuICAvL21vYmlsZVxyXG4gICQoJy5tb2JpbGUtbmF2X3RpdGxlJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICQoJy5uYXYtbGlzdCcpLnRvZ2dsZSgnc2xvdycpO1xyXG4gICAgJCgnLm5hdi1saXN0X19pdGVtJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgJCgnLm5hdi1saXN0JykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgIH0pXHJcbiAgfSk7XHJcblxyXG4gLy9zbGlkZXJcclxuICAgJCgnLnNsaWRlcicpLnNsaWNrKHtcclxuICBpbmZpbml0ZTogdHJ1ZSxcclxuICBhdXRvcGxheTogdHJ1ZSxcclxuICBzbGlkZXNUb1Nob3c6IDUsXHJcbiAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgcmVzcG9uc2l2ZTogW1xyXG4gICAge1xyXG4gICAgICBicmVha3BvaW50OiAxMjAwLFxyXG4gICAgICBzZXR0aW5nczoge1xyXG4gICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgIGFycm93czogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgYnJlYWtwb2ludDogNzY4LFxyXG4gICAgICBzZXR0aW5nczoge1xyXG4gICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgIGFycm93czogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgYnJlYWtwb2ludDogNjAwLFxyXG4gICAgICBzZXR0aW5nczoge1xyXG4gICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgIGFycm93czogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgYnJlYWtwb2ludDogNDgwLFxyXG4gICAgICBzZXR0aW5nczoge1xyXG4gICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgIGFycm93czogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIF1cclxufSk7XHJcblxyXG59KTsiXX0=
