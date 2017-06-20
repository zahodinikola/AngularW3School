app.directive("w3TestDirective", function() {
            return {
                template: "I was made in a directive constructor!"
            };
        });
app.directive("newDirective", function() {
            return {
                
                // restrict: "M", for classes
                
                restrict: "M",
                replace: true,
                template: "<h1>Some new directive</h1>"
            };
});
app.directive("restricted", function() {
    return {
        restrict: "A",
        template: "<h1> big text </h1>"
    }
})