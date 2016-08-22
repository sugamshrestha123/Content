/*var sum = 0;
for (var i = 0; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
  }
}
console.log(sum);
for(
    var sum = 0, i = 1;
    i < 10;
    !(i % 3 && i % 5) && (sum += i), i++
);
// Log the result
console.log(sum);*/

angular.module("demoCarousel",[])
        .controller("carouselCtrl",function($scope){
        $scope.images=["blog-post-header.jpg","guitar.jpg","img-hiker.jpg","sitting-mountain-top.jpg","slider_image.jpg"];
        $scope.rest=$scope.images[0];
        var i=0;
        $scope.previous=function(){
        
         i--;
        
        	if(i===-1)
        		i=4;
        	 $scope.rest=$scope.images[i];
        	console.log(i);
        }

           $scope.next=function(){
        
         i++;
        
        	if(i===5)
        		i=0;
        	 $scope.rest=$scope.images[i];
        	console.log(i);
        }

  });